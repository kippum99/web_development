/**
 * @author June Kim
 * Date: April 22, 2021
 *
 * This is the set.js file for adding interactive game UI and behaviors to the Set card game
 * website.
 */

(function() {
    "use strict";

    /* Module-global constants */

    const NUM_ATTRIBUTES = 4;           // Number of types of attributes
    const NUM_ATTRIBUTE_OPTIONS = 3;    // Number of options for each attribute

    const STYLES = ["solid", "outline", "striped"];
    const COLORS = ["green", "purple", "red"];
    const SHAPES = ["diamond", "oval", "squiggle"];
    const COUNT = [1, 2, 3];

    const IMG_DIR = "imgs/";
    const IMG_FILE_EXTENSION = ".png";


    /* Module-global variables */

    let timerId;
    let secondsRemaining;


    /* Functions for core game logic and UI */

    /**
     * This function sets up event listeners to the start button (in main view) and the back
     * button and the refresh button (in the game view) to allow toggling between the views and
     * refreshing the game board. */
    function init() {
        id("start-btn").addEventListener("click", startGame);
        id("back-btn").addEventListener("click", returnToMain);
        id("refresh-btn").addEventListener("click", refreshBoard);
    }

    /**
     * This function starts a new game by clearing any previous game starts and setting them to
     * initial values; it resets the set count, starts the game timer, switches the view to the game
     * view, creates a new board, and enables the refresh button. This function gets called when the
     * start button in the main view is clicked.
     */
    function startGame() {
        id("set-count").textContent = 0;
        startTimer();
        toggleView();
        refreshBoard();
        id("refresh-btn").disabled = false;
    }

    /**
     * This function ends a game by clearing the game timer and switching the view back to the main
     * view. This function gets called when the back button in the game view is clicked.
     */
    function returnToMain() {
        clearTimer();
        toggleView();
    }

    /**
     * This function toggles betweeh the main view and the game view by toggling
     * the "hidden" class on the corresponding elements.
     */
    function toggleView() {
        id("menu-view").classList.toggle("hidden");
        id("game-view").classList.toggle("hidden");
    }

    /**
     * This function refreshes the game board by clearing all existing cards and generating 9 or
     * 12 unique cards depending on the difficulty level selected by the user in the main view.
     */
    function refreshBoard() {
        const board = id("board");
        const isEasy = isEasyMode();
        const numCards = isEasy ? 9 : 12;

        board.innerHTML = "";

        for (let i = 0; i < numCards; i++) {
            board.appendChild(generateUniqueCard(isEasy));
        }
    }

    /**
     * This function returns a randomly-generated array of string attributes in the form
     * [STYLE, SHAPE, COLOR, COUNT].
     *
     * @param {boolean} isEasy - Indicates if the game difficulty level is easy. If true, the style
     *     will always be "solid" instead of randomly selected.
     * @return {string[]} A Randomly generated array of attributes in the form
     *     [STYLE, SHAPE, COLOR, COUNT]
     */
    function generateRandomAttributes(isEasy) {
        let attributes = [];

        [STYLES, SHAPES, COLORS, COUNT].forEach(attributeValues => {
            attributes.push(attributeValues[Math.floor(Math.random() * NUM_ATTRIBUTE_OPTIONS)]);
        });

        if (isEasy) {
            attributes[0] = STYLES[0];
        }

        return attributes;
    }

    /**
     * This function returns a newly generated unique card, which is a div element with COUNT number
     * of img elements appended as children.
     *
     * @param {boolean} isEasy - Indicates if the game difficulty level is easy. If true, the style
     *     will always be "solid" instead of randomly selected.
     * @return {HTMLElement} A div element representing a newly generated unique card in the board
     */
    function generateUniqueCard(isEasy) {
        let attributesString = generateRandomAttributes(isEasy).join("-");

        // Make sure that the generated set of attributes is unique in the board
        while (id(attributesString) != null) {
            attributesString = generateRandomAttributes(isEasy).join("-");
        }

        const card = gen("div");
        card.id = attributesString;
        card.classList.add("card");

        // Add COUNT number of img elements
        const count = parseInt(attributesString[attributesString.length - 1]);
        const attributesStringWithoutCount = attributesString.substring(0,
            attributesString.length - 2);

        for (let i = 0; i < count; i++) {
            const img = gen("img");
            card.appendChild(img);
            img.src = IMG_DIR + attributesStringWithoutCount + IMG_FILE_EXTENSION;
            img.alt = attributesString;
        }

        // Add a click event listener to the card
        card.addEventListener("click", cardSelected);

        return card;
    }

    /**
     * This function returns true if a given list of 3 cards comprises a Set, false otherwise.
     *
     * @param {HTMLElement[]} selected - A DOM list of 3 properly generated card div elements that
     *     are selected.
     * @return {boolean} true if all the given cards are a Set, otherwise false
     */
    function isASet(selected) {
        /*
         * A list of sets, where each set contains the 3 cards' values for each type of attributes.
         * For example, attribute_sets[0] would be a set of unique STYLE values seen in the 3 cards.
         * In order for the 3 cards to comprise a Set, every set must have a size of either 1 or
         * NUM_ATTRIBUTE_OPTIONS.
         */
        let attributeSets = []

        for (let i = 0; i < NUM_ATTRIBUTES; i++) {
            attributeSets[i] = new Set();
        }

        selected.forEach(card => {
            const attributes = card.id.split("-");

            for (let i = 0; i < NUM_ATTRIBUTES; i++) {
                attributeSets[i].add(attributes[i]);
            }
        });

        // Check if each of the attributes for each card is either the same or all different.
        for (let i = 0; i < NUM_ATTRIBUTES; i++) {
            const numUniqueValues = attributeSets[i].size;

            if (numUniqueValues != 1 && numUniqueValues != NUM_ATTRIBUTE_OPTIONS) {
                return false;
            }
        }

        return true;
    }

    /**
     * This function accesses the timing option selected from the #menu-view and sets the timer to
     * display that time and updates the state of the game to keep track of the current time.
     * This function gets called when a game starts.
     */
    function startTimer() {
        secondsRemaining = parseInt(qs("#menu-view select").value);
        updateDisplayedTime();

        timerId = setInterval(advanceTimer, 1000);
    }

    /**
     * This function, which gets called every second after the game starts, decrements the
     * secondsRemaining variable by 1 and updates the time displayed in the game. If there is no
     * time left in the game, the board will be disabled.
     */
    function advanceTimer() {
        secondsRemaining--;
        updateDisplayedTime();
    }

    /** This function, which gets called when a game ends, stops and clears the game timer. */
    function clearTimer() {
        clearInterval(timerId);
        timerId = null;
    }

    /**
     * This function updates the remaining time displayed in the game view using the current value
     * of the internal secondsRemaining variable. If there is no time left, the board is disabled.
     */
    function updateDisplayedTime() {
        // Disable the board if there is no time left
        if (secondsRemaining <= 0) {
            secondsRemaining = 0;
            disableBoard();
        }

        // Get remaining minutes and seconds in the MM and SS formats
        const minutes = Math.floor(secondsRemaining / 60).toString().padStart(2, "0");
        const seconds = (secondsRemaining % 60).toString().padStart(2, "0");

        id("time").textContent = minutes + ":" + seconds;
    }

    /**
     * This function disables the board by unselecting all cards, disabling user interaction with
     * the cards and the "Refresh Board" button, and clearing the game timer.
     */
    function disableBoard() {
        qsa(".card").forEach(card => {
            // Unselect the card if selected
            card.classList.remove("select");

            // Remove click event listener from the card
            card.removeEventListener("click", cardSelected);
        });

        // Disable "Refresh Board" button
        id("refresh-btn").disabled = true;

        // Stop and clear timer
        clearTimer();
    }

    /**
     * This function, which is attached as a click event listener to every card, toggles the
     * selected state of the clicked card. If three cards are selected on the board, a
     * 1-second message is displayed to indicate whether the 3 selected cards are a Set or not.
     * If the cards are Set, the number of sets found displayed on the board is incremented.
     */
    function cardSelected() {
        this.classList.toggle("selected");

        const board = id("board");
        const selectedCards = qsa(".selected");

        if (selectedCards.length === 3) {
            if (isASet(selectedCards)) {
                id("set-count").textContent++;

                /*
                 * Unselect the cards and display a 1-second message that says "SET!" on each
                 * selected card.
                 */
                displayMessageOnCards(selectedCards, "SET!");

                // After 1 second, replace each selected card with a new unique card
                setTimeout(() => {
                    selectedCards.forEach(card => {
                        board.replaceChild(generateUniqueCard(isEasyMode()), card);
                    });
                }, 1000);
            }
            else {
                // Deduct 15 seconds from the remaining time
                secondsRemaining -= 15;
                updateDisplayedTime();

                /*
                 * Unselect the cards and display a 1-second message that says ""Not a Set :(" on
                 * each selected card.
                 */
                displayMessageOnCards(selectedCards, "Not a Set :(");

                /*
                 * After 1 second, hide the message and show the original images in each image
                 * again.
                 */
                setTimeout(() => {
                    selectedCards.forEach(card => {
                        card.removeChild(card.querySelector("p"));
                        card.classList.remove("hide-imgs");
                    });
                }, 1000);
            }
        }
    }

    /**
     * This function unselects the given cards, hides the images in the cards, and displays a
     * 1-second message on each of the given cards.
     *
     * @param {DOMList} cards - A DOM list of div elements, each of which represents a card
     * @param {string} msg_string - A message to be displayed on each of the given cards
     */
    function displayMessageOnCards(cards, msg_string) {
        cards.forEach(card => {
            card.classList.remove("selected");
            card.classList.add("hide-imgs");

            const msg = gen("p");
            msg.textContent = msg_string;
            card.appendChild(msg);
        });
    }

    /**
     * This function accesses the difficulty level selected by the user in the main view, and
     * returns true if the difficulty level is easy, false otherwise.
     *
     * @returns {boolean} true if the difficulty level selected by the user is easy, false otherwise
     */
    function isEasyMode() {
        return (qs("input[name='diff']:checked").value === "easy");
    }


    /* Helper functions for DOM access and manipulation */

    /**
     * This function returns a DOM element with the given id.
     *
     * @param {string} idName - id to be used to find a DOM element
     * @returns {HTMLElement} - DOM element with the given id
     */
    function id(idName) {
        return document.getElementById(idName);
    }

    /**
     * This function returns the first DOM element with the given CSS query selector.
     *
     * @param {string} selector - A CSS query selector to find a DOM element with
     * @returns {HTMLElement} - The first DOM element with the given CSS query selector
     */
    function qs(selector) {
        return document.querySelector(selector);
    }

    /**
     * This function returns a list of all DOM elements with the given CSS query selector.
     *
     * @param {string} selector - A CSS query selector to find DOM elements with
     * @returns {DOMList} - A list of all DOM elements with the given CSS query selector.
     */
    function qsa(selector) {
        return document.querySelectorAll(selector);
    }

    /**
     * This function creates a new DOM element of the given element type and returns it.
     *
     * @param {string} elType - The type of DOM element to create
     * @returns {HTMLElement} - A new DOM element of the given element type
     */
    function gen(elType) {
        return document.createElement(elType);
    }


    init();
})();
