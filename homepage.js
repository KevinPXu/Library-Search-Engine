// All supported result formats. Can be used for autocomplete
var resultFormats = [ "audio", "film-and-videos", "manuscripts", "maps", "newspapers", "photos", "notated-music", "web-archives" ];

// Swaps the homepage to the results page with the given result type and search term
function swapPage(type, search) {
    var url = "./search-result.html?type=" + type + "&search=" + search;
    window.location.replace(url);
}