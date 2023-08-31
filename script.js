chrome.runtime.onInstalled.addListener(() => {
  var context = "selection";
  var title = "Search this address on Google Maps";
  chrome.contextMenus.create({
    title: title,
    contexts: [context],
    id: "context" + context,
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  var sText = info.selectionText;
  var url = "https://www.google.com/maps?q=" + encodeURIComponent(sText);
  chrome.tabs.create({ url: url });
});