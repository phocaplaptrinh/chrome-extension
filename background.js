chrome.contextMenus.create({
  id: 'tomtat',
  title: 'Tóm tắt',
  contexts: ['selection']
})

chrome.contextMenus.onClicked.addListener(function(info) {
  if (info.menuItemId === 'tomtat') {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {text: info.selectionText});
    })
  }
})