document.querySelectorAll('.js-toggle').forEach (e) ->
  e.addEventListener 'click', ->
    if @classList.contains 'active'
      (document.querySelector '#js-pane-' + @getAttribute('data-pane')).style.display = 'none'
      @classList.remove 'active'
    else
      (document.querySelector '#js-pane-' + @getAttribute('data-pane')).style.display = 'block'
      @classList.add 'active'
