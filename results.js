// Parses the input args into an array (ex search=example). Use .split("=")[1] to get the value for each argument
var inputArgs = document.location.search.split("?")[1].split("&");
var baseURL = "https://www.loc.gov/";
var resultFormats = [ "audio", "film-and-videos", "manuscripts", "maps", "newspapers", "photos", "notated-music", "web-archives" ];
var format = "json";

// Fetch the initial results on load from the given arguments
fetchResults(buildURL(inputArgs[0].split("=")[1], inputArgs[1].split("=")[1], format));

// Build the API URL for the given type, search term, and return format
function buildURL(type, search, returnFormat) {
    return baseURL + type + "?q=" + search + "&fo=" + returnFormat;
}

// Fetch API results and call createResult() for each result
function fetchResults(url) {
    fetch(url).then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                data.results.forEach(createResult);
            });
        } else {
            // Execute if the reponse is an error
        }
    });
}

function createResult(result) {
    // Create page element for each result
};