/**
 * @author June Kim
 * CS 101 Spring 2021
 * This is the app.js file for Sunset Cocktails API, which supports the following endpoints:
 * GET /menu
 * GET /menu/:itemId
 * GET /alcohol_kinds
 *
 * POST /addItem
 * POST /contact
 */

"use strict";

const express = require("express");
const fs = require("fs/promises");
const globby = require("globby");
const multer = require("multer");

const DEFAULT_IMAGE = "cocktail.png";
const SERVER_ERROR = "Something went wrong on the server. Please try again later or contact us.";

const app = express();


/* Middlewares for handling different POST formats */

// For application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// For application/json
app.use(express.json());
// For multipart/form-data
app.use(multer().none());


app.use(express.static("public"));


/* GET endpoints */

/**
 * Returns an array of all the items in the menu as a JSON response, or filtered items if a query
 * parameter for alcohol_kind is provided.
 * Each item has name, price, ingredients and image path.
 * Returns a 500 error if something goes wrong on the server.
 */
app.get("/menu", async (req, res, next) => {
    try {
        const queryAlcoholKind = req.query.alcohol_kind;
        let alcoholKinds;

        if (typeof(queryAlcoholKind) === "string") {
            // Case in which a single value is given for alcohol_kind
            alcoholKinds = [queryAlcoholKind];
        }
        else {
            // Case in which alcohol_kind param is undefined or is a list of multiple values
            alcoholKinds = queryAlcoholKind;
        }

        let items = await getMenuData(alcoholKinds);
        res.json(items);
    }
    catch (err) {
        res.status(500);
        err.message = SERVER_ERROR;
        return next(err);
    }
});

app.get("/menu/:itemId", async (req, res, next) => {
    const itemId = req.params.itemId;

    try {
        res.json(await getItemData(`data/menu/${itemId}.txt`));
    }
    catch (err) {
        if (err.code === "ENOENT") {
            res.status(404);
            err.message(`No drink with id ${itemId} was found.`);
        }
        else {
            res.status(500);
            err.message = SERVER_ERROR;
        }
        return next(err);
    }
})

/**
 * Returns an array of all alcohol kinds available for filtering drinks as a JSON response.
 */
app.get("/alcohol_kinds", async (req, res, next) => {
    try {
        let fileContents = await fs.readFile("data/alcohol_kinds.txt", "utf8");
        res.json(fileContents.split("\n"));
    }
    catch (err) {
        res.status(500);
        err.message = SERVER_ERROR;
        return next(err);
    }
})


/* POST endpoints */

app.post("/contact", async (req, res, next) => {
    let msgJSON;

    if (req.body.name && req.body.email && req.body.message) {
        msgJSON = { name: req.body.name,
                    email: req.body.email,
                    message: req.body.message
                  };
    }
    else {
        res.status(400);
        return next(Error("Please provide all parameters (name, email, message)"));
    }

    try {
        // Get previous messages
        let allMessages = JSON.parse(await fs.readFile("data/messages.json", "utf8"));
        allMessages.push(msgJSON);

        // Add current message
        await fs.writeFile("data/messages.json", JSON.stringify(allMessages, null, 2), "utf8");

        res.type("text");
        res.send("Thank you for contacting us! We will get back to you as soon as possible.");
    }
    catch (err) {
        res.status(500);
        err.message = SERVER_ERROR;
        return next(err);
    }
});

app.post("/addItem", async (req, res, next) => {
    // String containing ID, name, price, ingredients, imgPath separated by new lines
    let itemData;

    if (req.body.id) {
        // List of filenames containing item data, where each one is {itemId}.txt
        let filenamesList = await fs.readdir("data/menu");

        if (filenamesList.includes(req.body.id + ".txt")) {
            res.status(400);
            return next(Error("The provided ID already exists."));
        }
    }

    if (req.body.id && req.body.name && req.body.price && req.body.ingredients) {
        itemData = [req.body.id + "\n"
                    + req.body.name + "\n"
                    + req.body.price + "\n"
                    + req.body.ingredients + "\n"
                    + DEFAULT_IMAGE
                   ];
    }
    else {
        res.status(400);
        return next(Error("Please provide all parameters (id, name, price, ingredients)"));
    }

    try {
        let filePath = "data/menu/" + req.body.id + ".txt";
        await fs.writeFile(filePath, itemData, "utf8");

        res.type("text");
        res.send("The item has been successfully added!");
    }
    catch (err) {
        res.status(500);
        err.message = SERVER_ERROR;
        return next(err);
    }
});


/* Helper functions for endpoints */

async function getMenuData(alcoholKinds) {
    let itemPromises = [];

    let itemDirs = await globby("data/menu/*");

    for (let itemDir of itemDirs) {
        itemPromises.push(getItemData(itemDir));
    }

    let items = await Promise.all(itemPromises);

    if (alcoholKinds) {
        let filteredItems = [];

        for (let item of items) {
            let ingredientsStr = item["ingredients"].toLowerCase();

            let isItemIncluded = false;

            for (let alcoholKind of alcoholKinds) {
                const alcoholKindLower = alcoholKind.toLowerCase();

                if (ingredientsStr.includes(alcoholKindLower)) {
                    isItemIncluded = true;
                    break;
                }
            }

            if (isItemIncluded) {
                filteredItems.push(item);
            }
        }

        return filteredItems;
    }

    return items;
}

async function getItemData(itemDir) {
    // Read item data from the .txt file containing it
    let fileContents = await fs.readFile(itemDir, "utf8");
    let lines = fileContents.split("\n");

    return {
        "id": lines[0],
        "name": lines[1],
        "price": lines[2],
        "ingredients": lines[3],
        "imgPath": "imgs/" + lines[4]
    };
}

function errorHandler(err, req, res, next) {
    res.type("text");
    res.send(err.message);
}

app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT);
