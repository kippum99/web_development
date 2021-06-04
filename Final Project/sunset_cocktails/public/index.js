/**
 * @author June Kim
 * CS 101 Spring 2021
 * Date: June 2, 2021
 *
 * This is the index.js script file for the index.html page of Sunset Cocktails website. The script
 * sets up event handlers on the page, and fetches the menu data from the Sunset Cocktails API and
 * loads it on the page.
 */

(function() {
    "use strict";

    const API_MENU_ENDPOINT = "menu/";
    const API_MENU_FILTER_QUERY_PARAM = "alcohol_kind";
    const API_FILTER_ENDPOINT = "alcohol_kinds/";

    /** This function fetches and loads the menu data. */
    function init() {
        // Fetch and load menu data
        loadMenu()

        // Fetch and load available filters and add event listeners to them
        loadFilterItems();
    }

    async function loadMenu() {
        // Get selected filter items
        let selectedFilterElements = qsa("#filter-container input[type='checkbox']:checked");
        let selectedFilterNames = [];

        for (let el of selectedFilterElements) {
            selectedFilterNames.push(el.value);
        }

        // Fetch menu data from the API and load on the page
        try {
            let menuItems = await fetchMenu(selectedFilterNames);
            populateMenu(menuItems);
        }
        catch (err) {
            displayError(err.message, id("menu-container"));
        }
    }

    async function fetchMenu(selectedFilters) {
        // Build API get request url using selected filters as query parameters
        let url = API_MENU_ENDPOINT;

        for (let i = 0; i < selectedFilters.length; i++) {
            url += (i === 0) ? "?" : "&";
            url += API_MENU_FILTER_QUERY_PARAM + "=" + selectedFilters[i];
        }

        let res = await fetch(url);
        checkStatus(res);

        return await res.json();
    }

    function populateMenu(menuItems) {
        let menuContainer = id("menu-container");
        menuContainer.innerHTML = "";

        for (let item of menuItems) {
            let article = gen("article");
            article.className = "item";
            article.addEventListener("click", showItemDetails(item.id));
            menuContainer.appendChild(article);

            let img = gen("img");
            img.src = item.imgPath;
            img.alt = item.name;
            article.appendChild(img);

            let name = gen("p");
            name.textContent = item.name;
            article.appendChild(name);

            let price = gen("p");
            price.textContent = `$${item.price}`;
            article.appendChild(price);
        }
    }

    // Hide menu view and show a single-item view for the given itemId
    function showItemDetails(itemId) {
        id("menu-view").classList.add("hidden");
        id("item-details").classList.remove("hidden");
    }

    async function loadFilterItems() {
        let filterItems = await getFilterItems();

        let filterContainer = id("filter-container");

        for (let filterItem of filterItems) {
            let div = gen("div");
            filterContainer.appendChild(div);

            let checkbox = gen("input");
            checkbox.type = "checkbox";
            checkbox.name = filterItem;
            checkbox.value = filterItem;
            checkbox.addEventListener("click", loadMenu);
            div.appendChild(checkbox);

            let label = gen("label");
            label.for = filterItem;
            label.textContent = filterItem;
            div.appendChild(label);
        }
    }

    async function getFilterItems() {
        try {
            let res = await fetch(API_FILTER_ENDPOINT);
            checkStatus(res)
            return await res.json();
        }
        catch (err) {
            displayError(err.message, id("#filter-container"));
        }
    }


    /* Helper functions for fetching from API */

    /**
     * Helper function to return the Response object if successful, otherwise
     * throws an Error with an error status and corresponding text.
     *
     * @param {Response} response - response object to check for success/error
     * @returns {object} - Response if status code is ok (200-level)
     */
    function checkStatus(response) {
        if (!response.ok) {
        throw Error("Error in request: " + response.statusText);
        }
        return response; // a Response object
    }

    // /**
    //  * Displays an error message on the page, hiding any previous results.
    //  * If errMsg is passed as a string, that string is used to customize an error message.
    //  * Otherwise (the errMsg is an object or missing), a generic message is displayed.
    //  *
    //  * @param {String} errMsg - optional specific error message to display on page.
    //  */
    // function handleError(errMsg) {
    //     if (typeof errMsg === "string") {
    //     id("message-area").textContent = errMsg;
    //     } else {
    //     // the err object was passed, don't want to show it on the page;
    //     // instead use generic error message.
    //     id("message-area").textContent = "An error ocurred fetching the launch data";
    //     }
    //     id("message-area").classList.remove("hidden");
    // }

    function displayError(errMsg, container) {
        let msg = gen("p");
        msg.textContent = errMsg;
        container.appendChild(msg);
    }


    /* Helper functions for DOM access and manipulation */

    /**
     * Returns the element that has the ID attribute with the specified value.
     *
     * @param {string} idName - element ID
     * @returns {object} DOM object associated with id.
     */
    function id(idName) {
        return document.getElementById(idName);
    }

    /**
     * Returns the first element that matches the given CSS selector.
     * @param {string} query - CSS query selector.
     * @returns {object[]} array of DOM objects matching the query.
     */
    function qs(query) {
        return document.querySelector(query);
    }

    /**
     * Returns the array of elements that match the given CSS selector.
     * @param {string} query - CSS query selector
     * @returns {object[]} array of DOM objects matching the query.
     */
    function qsa(query) {
        return document.querySelectorAll(query);
    }

    /**
     * Alias function for returning a DOM element represented by `el`.
     * @param {String} el - String representation of DOM element, e.g. "p".
     * @returns {DOMElement} - element corresponding to `el`
     */
    function gen(el) {
        return document.createElement(el);
    }

    init();
})();
