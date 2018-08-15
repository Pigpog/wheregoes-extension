//create the context menu item

var menuItem = {
    "id": "checkUrlcontext",
    "title": "Wheregoes",
    "contexts": ["link"]
};

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    window.open("popup.html?url='"+clickData.linkUrl+"'") //pass url to temporary instance of popup.html
});
