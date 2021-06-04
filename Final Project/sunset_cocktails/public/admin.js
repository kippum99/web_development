/**
 * @author June Kim
 * CS 101 Spring 2021
 * Date: June 2, 2021
 *
 * This is the admin.js script file for the admin.html page of Sunset Cocktails website.
 * The script sets up an event handler for the Add New Item form to be processed through the API.
 */

(function() {
    "use strict";

    const API_ENDPOINT = "addItem/"


    /** This function sets up an event handler for the add item form submit button. */
    function init() {
        id("add-item-form").addEventListener("submit", (e) => {
            e.preventDefault();
            submitRequest();
        })
    }

    async function submitRequest() {
        id("submit-response").innerHTML = "";

        let params = new FormData(id("add-item-form"));

        try {
            let res = await fetch(API_ENDPOINT, { method: "POST", body : params });
            await checkStatus(res);

            let resText = gen("p");
            resText.textContent = await res.text();
            id("submit-response").appendChild(resText);
        }
        catch (err) {
            displayError(err.message, id("submit-response"));
        }
    }

    init();
})();
