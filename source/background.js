// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
  // If the letter 'facebook' is found in the tab's URL...
  if (tab.url.indexOf('facebook') > -1) {
    // ... show the page action.
    chrome.pageAction.show(tabId);
        //chrome.tabs.executeScript(null,{code:"document.getElementById('pagelet_ego_pane_w').innerHTML='blocked'"});

chrome.tabs.executeScript(null, { 
  code: "document.body.appendChild(document.createElement('script')).src='" + 
    chrome.extension.getURL("demo.js") +"';" 
});
      
  }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
