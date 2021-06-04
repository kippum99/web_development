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
        await checkStatus(res);

        return await res.json();
    }

    function populateMenu(menuItems) {
        let menuContainer = id("menu-container");
        menuContainer.innerHTML = "";

        for (let item of menuItems) {
            let article = gen("article");
            article.className = "item";
            article.addEventListener("click", () => { showItemDetails(item.id); });
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
    async function showItemDetails(itemId) {
        // <img src="imgs/cocktail.png" />
        // <div id="item-details">
        //   <h2>cocktail</h2>
        //   <p>Price: $<span id="item-price">12</span></p>
        //   <p id="item-ingredients">This and that</p>
        // </div>
        let container = qs("#item-view > div");

        try {
            let itemData = await fetchItem(itemId);

            let img = gen("img");
            img.src = itemData.imgPath;
            img.alt = itemData.name;
            container.appendChild(img);

            let detailsContainer = gen("div");
            detailsContainer.id = "item-details";
            container.appendChild(detailsContainer);

            let name = gen("h2");
            name.textContent = itemData.name;
            detailsContainer.appendChild(name);

            let price = gen("p");
            price.textContent = `Price: $${itemData.price}`;
            detailsContainer.appendChild(price);

            let ingredients = gen("p");
            ingredients.textContent = itemData.ingredients;
            detailsContainer.appendChild(ingredients);
        }
        catch (err) {
            displayError(err.message, container);
        }

        id("menu-view").classList.add("hidden");
        id("item-view").classList.remove("hidden");
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

    async function fetchItem(itemId) {
        let url = API_MENU_ENDPOINT + itemId;

        let res = await fetch(url);
        checkStatus(res);

        return await res.json();
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


    init();
})();
