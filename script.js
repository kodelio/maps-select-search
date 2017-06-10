/**
 * Created by Laurent on 02/06/2017.
 */

chrome.runtime.onInstalled.addListener(function() {
    var context = "selection";
    var title = "Search on Google Maps";
    var id = chrome.contextMenus.create({"title": title, "contexts":[context],
        "id": "context" + context});
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
    var sText = info.selectionText;
    var url = "https://www.google.com/maps?q=" + encodeURIComponent(sText);
    window.open(url, '_blank');
};