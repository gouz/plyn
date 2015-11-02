$textarea = document.querySelector '#js-textarea'
$preview = document.querySelector '#js-pane-preview'

$textarea.style.height = (document.querySelector '#js-pane-editor').getBoundingClientRect().height - 10 + 'px'

$textarea.addEventListener 'input', ->
  $preview.innerHTML = marked $textarea.value, { sanitize: true }
