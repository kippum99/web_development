/**
 * @author June Kim
 * Date: April 29, 2021
 *
 * This is the index.js script file for the index.html page of Salt Covenant Church website.
 */

(function() {
    "use strict";

    const YOUTUBE_DATA_API_URL = "https://www.googleapis.com/youtube/v3/"
    const YOUTUBE_PLAYLIST_ID = "PLn3gC0zxOsmwrme5FuzqiY1FMpw6pGtiD&";
    const YOUTUBE_PLACEHOLDER_VIDEO_ID = "dkz6X1QlRBw";
    const YOUTUBE_API_KEY_URL = "api_key.txt";

    let videoIdList = [];

    /** This function sets up basic event listeners on the page. */
    function init() {
        // Fetch YouTube videos to play
        fetch(YOUTUBE_API_KEY_URL)
            .then(checkStatus)
            .then(res => res.text())
            .then(fetchYouTubeVideos)
            .catch(handleError);

        // Allow hovering on a navigation item to show an extended dropdown menu.
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

    /**
     * This function fetches YouTube videos to play and loads them to the video player.
     *
     * @param {String} apiKey - API key to use the YouTube Data API.
     */
    function fetchYouTubeVideos(apiKey) {
        const url = YOUTUBE_DATA_API_URL + "playlistItems?part=contentDetails&playlistId="
                    + YOUTUBE_PLAYLIST_ID + "&key=" + apiKey;

        fetch(url)
            .then(checkStatus)
            .then(res => res.json())
            .then(processResponse)
            .catch(handleError);
    }

    /**
     * This function checks the status of the given response, and returns it back if the status is
     * ok, and throws an Error otherwise.
     *
     * @param {Response} res - Response object
     * @returns {Response} - The given Response object
     */
    function checkStatus(res) {
        if (!res.ok) {
          throw Error("Error in request: " + res.statusText);
        }
        return res;
    }

    /**
     * This function processes the given response from YouTube playlistItems request and loads the
     * videos in the playlist.
     *
     * @param {Object} jsonRes - Response as a JSON object to be processed
     */
    function processResponse(jsonRes) {
        for (let item of jsonRes.items) {
            videoIdList.push(item.contentDetails.videoId);
        }

        loadVideos();
    }

    /**
     * This function handles an error from the YouTube playlistItems request by loading a
     * placeholder video instead.
     */
    function handleError() {
        videoIdList.push(YOUTUBE_PLACEHOLDER_VIDEO_ID);
        loadVideos()
    }

    /**
     * This function creates a YouTube Player object in the #main-video IFrame, and loads the videos
     * in the given videoIdList into the video player.
     */
    function loadVideos() {
        // Wait for the player to be ready (for up to 10 seconds)
        const startTime = new Date();

        while (!isYouTubeIframeAPIReady) {
            if (new Date() - startTime >= 10000) {
                break;
            }
        }

        if (isYouTubeIframeAPIReady) {
            const _ = new YT.Player("main-video", {
                events: {
                    "onReady": onPlayerReady
                }
            });
        }
        else {
            const mainVideo = id("main-video");
            mainVideo.parentNode.removeChild(mainVideo);
        }
    }

    /**
     * This function loads the videos stored in videoIdList module global into the #main-video
     * IFrame. This function gets called when the YouTube Player in the IFrame is ready.
     *
     * @param {Event} event - Event object corresponding to the YouTube Player being ready
     */
    function onPlayerReady(event) {
        event.target.loadPlaylist(videoIdList);
    }

    /**
     * This function toggles the visibility of the expanded dropdown menu and adds an underline to
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

    /**
     * This function toggles the highlighted effect of an item in the main body. It is called when
     * a main item panel is hovered on.
     */
    function toggleMainItemHighlight() {
        this.classList.toggle("main-item-hovered");
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


    init();
})();
