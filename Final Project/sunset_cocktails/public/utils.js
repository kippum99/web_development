/**
 * @author June Kim
 * CS 101 Spring 2021
 * Date: June 2, 2021
 *
 * This file contains various helper functions for using API and DOM access/manipulation.
 */

/* Helper functions for fetching from API */

/**
 * Helper function to return the Response object if successful, otherwise
 * throws an Error with an error status and corresponding text.
 *
 * @param {Response} response - response object to check for success/error
 * @returns {object} - Response if status code is ok (200-level)
 */
async function checkStatus(response) {
    if (!response.ok) {
        throw Error(await response.text());
    }
    return response; // a Response object
}

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
