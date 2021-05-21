/**
 * @author June Kim
 * Date: May 20, 2021
 *
 * This is the youtube-api.js script file for using the YouTube Iframe API on the index.html page of
 * Salt Covenant Church website. Note that the functions here must be global in order for the
 * external YouTube API script to call onYouTubeIframeAPIReady() once the API script has been
 * downloaded.
 */

let isYouTubeIframeAPIReady = false;

/**
 * This function sets isYouTubeIframeAPIReady to true.
 * This function gets called by the external YouTube API script when the script has been downloaded.
 */
function onYouTubeIframeAPIReady() {
    isYouTubeIframeAPIReady = true;
}
