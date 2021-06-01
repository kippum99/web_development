/**
 * @author June Kim
 * Date: May 25, 2021
 *
 * This is the spacex.js file for handling user inputs and fetching and displaying appropriate
 * SpaceX launch data on the SpaceX Dashboard website.
 */
(function() {
  "use strict";

  // API 1: SpaceX (2 endpoints used)
  const SPACEX_API_URL = "https://api.spacexdata.com/v4";

  // API 2: OpenCage geocording, using API 1's Endpoint 2 results
  const OPENCAGE_API_URL = "https://api.opencagedata.com/geocode/v1/json";

  // Program constants for querying/option parameters
  const DEFAULT_DATE_RANGE = 28; // 28 days, or 4 weeks
  const LAUNCH_LIMIT = 8; // the maximum number of launches to process at a time

  /**
   * Sets up the page, initializing date defaults in the start/end date inputs
   * with end date being the current day. When the form is submitted,
   * validates the date order and fetches launch data to populate the dashboard view.
   */
   function init() {
    setDateDefaults();
    qs("form").addEventListener("submit", handleSubmit);
  }

  /**
   * Handles the submit behavior, preventing default page refresh, clearing any
   * previous displayed data, and checking for valid date ordering. If selected start
   * date is after selected end date, displays an error message, otherwise fetches
   * launch data to populate the dashboard.
   * @param {SubmitEvent} evt - event object to prevent default behavior.
   */
  function handleSubmit(evt) {
    evt.preventDefault();
    id("launches").innerHTML = ""; // clear any previous data
    if (id("start-date").value > id("end-date").value) {
      handleError("Error: Start date should not be later than end date.");
    } else {
      id("message-area").classList.add("hidden"); // hide any previous error message
      fetchLaunches();
    }
  }

  /* ------------------------- Provided Date Utility Functions ------------------------- */
  /**
   * Sets the default date values for the start/end date inputs,
   * with end date being the current date and the start date
   * being DEFAULT_DATE_RANGE days ago. Users can still change the date input
   * values, but this allows them to have a default range.
   */
  function setDateDefaults() {
    let endDate = new Date(); // today
    id("end-date").value = dateToYMD(endDate); // e.g. 2021-05-17
    let startDate = new Date(endDate.setDate(endDate.getDate() - DEFAULT_DATE_RANGE));
    id("start-date").value = dateToYMD(startDate); // e.g. 2021-04-21
  }

  /**
   * Converts a Date object to YYYY-MM-DD format required for <input type="date">
   * elements.
   * @param {Date} date - date object to convert.
   * @returns {String} - String representation of date in YYYY-MM-DD format (left-padding with 0's)
   */
  function dateToYMD(date) {
    let day = date.getDate();
    if (day < 10) {
      day = "0" + day;
    }
    let month = date.getMonth() + 1; // months are 0-11...
    if (month < 10) {
      month = "0" + month;
    }
    let year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  /**
   * Takes a date in UTC format and converts it to Month, D YYYY format.
   * Example: a Date("2017-10-30T19:34:00.000Z") would correspond to the formatted string
   * of October 31, 2017.
   * @param {Date} date object
   * @returns {String} - formatted string in Month, D YYYY format.
   */
  function formatUTCDate(date) {
    let dateOptions = {
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    return date.toLocaleDateString("en-US", dateOptions);
  }

  /* ------------------------- Begin Implementation: Parts 1-4 ------------------------- */
  /**
   * Fetch the launches in the specified date range, up to LAUNCH_LIMIT launches.
   */
  async function fetchLaunches() {
    const startDateISOString = new Date(id("start-date").value).toISOString();
    const endDateISOString = new Date(id("end-date").value).toISOString();

    let requestBody = {
      "query": {
        "date_utc": {
          $gte: startDateISOString,
          $lte: endDateISOString
        }
      },
      "options": {
        "limit": LAUNCH_LIMIT,
        "sort": "-date_utc" // sorts in descending order
      }
    };

    // (Provided) the options used to get the proper number of launches
    // from the SpaceX API
    let requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    };

    try {
      const res = await fetch(SPACEX_API_URL + "/launches/query", requestOptions);
      checkStatus(res);
      const data = await res.json();
      displayLaunches(data.docs);
    }
    catch (err) {
      handleError(err);
    }
  }

  /**
   * Populates dashboard view with "cards" (as articles) for each launch object
   * in the passed array of launch data, including the name of the launch, an image,
   * the date of the launch, and uses the latitude/longitude to fetch the corresponding
   * address to display on the launch card.
   * Displays an error message on the page if an error occurred.
   * @param {Object[]} launches - Array of launch data to process and populate on the dashboard.
   */
  function displayLaunches(launches) {
    for (const launch of launches) {
      const card = gen("article");
      const img = gen("img");
      const imgPath = launch.links.patch.small;

      if (imgPath) {
        img.src = imgPath;
        img.alt = "Launch logo";
      }
      else {
        img.src = "imgs/spacex_default.png";
        img.alt = "Default SpaceX image";
      }

      card.appendChild(img);

      const title = gen("h2");
      title.textContent = launch.name;
      card.appendChild(title);

      const date = gen("p");
      date.textContent = formatUTCDate(new Date(launch.date_utc));
      card.appendChild(date);

      const address = gen("p");
      getLaunchpad(launch.launchpad, address);
      card.appendChild(address);

      id("launches").appendChild(card);
    }
  }

  /**
   * Gets data about a given launchpad and passes this data to `setLaunchpadAddress`
   * to get the street address of the launchpad.
   * Displays an error message on the page if an error occurred.
   * @param pad - A launchpad id from the `/launches/query` endpoint
   * @param para - The `<p>` tag which will contain the launchpad address
   */
  async function getLaunchpad(pad, para) {
    try {
      const res = await fetch(SPACEX_API_URL + "/launchpads/" + pad);
      checkStatus(res);
      const data = await res.json();
      setLaunchpadAddress(data.latitude, data.longitude, para);
    }
    catch (err) {
      handleError(err);
    }
  }

  /**
   * Sets the launchpad address paragraph on the DOM to the address returned by
   * the OpenCage API via the longitude and latitude provided by SpaceX.
   * Displays an error message on the page if an error occurred.
   * @param {Number} latitude - latitude of launchpad address
   * @param {Number} longitude - longitude of launchpad address
   * @param {DOMElement} para The `<p>` tag to populate with the launchpad address
   */
  async function setLaunchpadAddress(latitude, longitude, para) {
    try {
      const url = OPENCAGE_API_URL + "?key=" + OPENCAGE_KEY + "&q=" + latitude + "+" + longitude;
      const res = await fetch(url);
      checkStatus(res);
      const data = await res.json();
      para.textContent = data.results[0].formatted;
    }
    catch (err) {
      handleError(err);
    }
  }
  /* ------------------------- End Implementation of Parts 1-4 ------------------------- */

  /* ------------------------------ Other Helper Functions ------------------------------ */
  /**
   * Helper function to return the Response object if successful, otherwise
   * throws an Error with an error status and corresponding text.
   * @param {Response} response - response object to check for success/error
   * @returns {object} - Response if status code is ok (200-level)
   */
  function checkStatus(response) {
    if (!response.ok) {
      throw Error("Error in request: " + response.statusText);
    }
    return response; // a Response object
  }

  /**
   * Displays an error message on the page, hiding any previous results.
   * If errMsg is passed as a string, that string is used to customize an error message.
   * Otherwise (the errMsg is an object or missing), a generic message is displayed.
   * @param {String} errMsg - optional specific error message to display on page.
   */
  function handleError(errMsg) {
    if (typeof errMsg === "string") {
      id("message-area").textContent = errMsg;
    } else {
      // the err object was passed, don't want to show it on the page;
      // instead use generic error message.
      id("message-area").textContent = "An error ocurred fetching the launch data";
    }
    id("message-area").classList.remove("hidden");
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
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
