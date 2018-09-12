// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The onClicked callback function.
function onClickHandler(info, tab) {
  var url = 'timraovat.com/search?q=' + info.selectionText;
	chrome.tabs.create({url: url, active: true});
	
	//console.log(info.menuItemId);
};

function onInstallHandler() {
  chrome.alarms.create("myAlarm", {periodInMinutes: 0.1} );
}
chrome.alarms.onAlarm.addListener(function(alarm) {
  console.log("Beep");
});


chrome.runtime.onInstalled.addListener(onInstallHandler);
chrome.contextMenus.onClicked.addListener(onClickHandler);

// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({"title": "Tìm SĐT tại timraovat.com", "contexts":["selection"], "id": "context1"}, function() {
    if (chrome.extension.lastError) {
      console.log("Got expected error: " + chrome.extension.lastError.message);
    }
  });

});



