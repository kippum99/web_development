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
const SERVER_ERROR = "Something went wrong onthe server. Please try again later or contact us.";

const app = express();


/* Middlewares for handling different POST formats */

// For application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// For application/json
app.use(express.json());
// For multipart/form-data
app.use(multer().none());


app.use(express.static("public"));


/* API endpoints */

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
        next(err);
    }
});

app.get("/menu/:itemId", async (req, res, next) => {
    const itemId = req.params.itemId;
    try {
        return await getItemData(`data/menu/${itemId}.txt`);
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
        next(err);
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
        next(err);
    }
})


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
