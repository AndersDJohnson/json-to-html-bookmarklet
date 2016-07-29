var jsonToHtml = require('json-to-html')

var el = document.documentElement
if (document.body) {
  el = document.body
  // Chrome has a <pre> wrapper in <body> for JSON file
  if (el.children) {
    el = el.children[0]
  }
}

var json = JSON.parse(el.innerHTML)
document.documentElement.innerHTML = '<pre>' + jsonToHtml(json) + '</pre>'
