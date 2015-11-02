marked = require 'marked'
NodeList.prototype.forEach = Array.prototype.forEach
HTMLCollection.prototype.forEach = Array.prototype.forEach

marked.setOptions
  highlight: (code) ->
    require('highlight.js').highlightAuto(code).value

renderer = new marked.Renderer()
renderer.heading = (text, level) ->
  escapedText = text.toLowerCase().replace /[^\w]+/g, '-'
  '<h' + level + '>
    <a name="' + escapedText + '" class="anchor" href="#' + escapedText + '">
      <span class="header-link"></span>
    </a>' + text + '
  </h' + level + '>'
