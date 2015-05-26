var s = document.createElement('script');
s.setAttribute("id", "puca-script");
// TODO: add "script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('script.js');
//s.onload = function() {
//    this.parentNode.removeChild(this);
//};
//(document.head||document.documentElement).appendChild(s);
document.body.appendChild(s);