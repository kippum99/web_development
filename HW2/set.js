/**
 * @author June Kim
 * Date: April 22, 2021
 *
 * Mystery Box Solution using Module Pattern shown in Lecture 7
 */

(function() {
    "use strict";

    /** This function sets up basic event listeners on the page. */
    function init() {
        document.getElementById("start-btn").addEventListener("click", toggleView);
        document.getElementById("back-btn").addEventListener("click", toggleView);
    }

    /* This function toggles betweeh the main view and the game view by toggling
     * the "hidden" class on the corresponding elements.
     */
    function toggleView() {
        document.getElementById("menu-view").classList.toggle("hidden");
        document.getElementById("game-view").classList.toggle("hidden");
    }

    init();
})();
