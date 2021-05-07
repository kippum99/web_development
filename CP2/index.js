/**
 * @author June Kim
 * Date: April 29, 2021
 *
 * This is the index.js script file for the index.html page of Salt Covenant Church website.
 */

(function() {
    "use strict";

    /** This function sets up basic event listeners on the page. */
    function init() {
        // Allow hovering on a mainigation item to show an extended dropdown menu.
        let navItems = document.querySelectorAll("nav > ul > li");

        for (let i = 0; i < navItems.length; i++) {
            navItems[i].addEventListener("mouseenter", toggleDropdown);
            navItems[i].addEventListener("mouseleave", toggleDropdown);
        }

        // Allow hovering on a main item panel to change in color.
        let mainItems = document.querySelectorAll("#main-container > div");

        for (let i = 0; i < mainItems.length; i++) {
            mainItems[i].addEventListener("mouseenter", toggleMainItemHighlight);
            mainItems[i].addEventListener("mouseleave", toggleMainItemHighlight);
        }
    }

    /** This function toggles the visibility of the expanded dropdown menu and adds an underline to
     * give a highlighted look. It is called when a navigation item is hovered on.
     */
    function toggleDropdown() {
        let dropdownList = this.querySelector(".dropdown-list");

        if (dropdownList) {
            if (dropdownList.classList.contains("hidden")) {
                dropdownList.classList.remove("hidden");

                // Create an underline to indicate the item was hovered over
                let underline = document.createElement("div");
                underline.classList.add("nav-underline");
                this.insertBefore(underline, dropdownList);
            }
            else {
                dropdownList.classList.add("hidden");
                this.querySelector(".nav-underline").remove();
            }
        }
    }

    /** This function toggles the highlighted effect of an item in the main body. It is called when
     * a main item panel is hovered on.
     */
    function toggleMainItemHighlight() {
        this.classList.toggle("main-item-hovered");
    }

    init();
})();
