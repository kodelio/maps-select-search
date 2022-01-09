/**
 * Created by Laurent on 02/06/2017.
 */

function create() {
  var context = "selection";
  var title = "Search this address on Google Maps";
  chrome.contextMenus.create({
    title: title,
    contexts: [context],
    id: "context" + context,
  });
}

chrome.runtime.onInstalled.addListener(function () {
  create();
});

create();

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
  var sText = info.selectionText;
  var url = "https://www.google.com/maps?q=" + encodeURIComponent(sText);
  window.open(url, "_blank");
}
