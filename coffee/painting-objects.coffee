$ ->
    
  class Objects
    free_objects: []
    paid_objects: []
    add_free: (icon) ->
      paint = {icon: icon}
      @free_objects.push paint
    add_paid: (icon, price) ->
      paint = {icon: icon, price: price}
      @paid_objects.push paint
  objects = new Objects
  objects.add_free 'MonaLisa'
  objects.add_free 'MonaLisaHead'
  objects.add_free 'TheScream'
  objects.add_free 'TheScreamHead'
  objects.add_free 'BalloonGirl'
  objects.add_free 'BalloonGirlJustGirl'
  objects.add_free 'BalloonGirlJustBalloon'
  objects.add_paid 'SonOfMan', "20M"
  objects.add_free 'SonOfManHead'
  objects.add_paid 'GirlWithPearlEarring', "30M"
  objects.add_free 'GirlWithPearlEarringHead'
  
  class ObjectsManager
    free_selector: $('#free_objects .objects')
    
    paid_selector: $('#paid_objects .objects')
  
    free_html: """
      <div class="object">
        <div class="object_image">
          <a href="" data-rel="dialog"><img src="" /></a>
        </div>
        <button class="btn">Use This</a>
      </div>
    """
    paid_html: """
      <div class="object">
        <div class="object_image">
          <a href="" data-rel="dialog"><img src="" /></a>
        </div>
        <div class="object_price"></div>
        <button class="btn">Use This</a>
      </div>
    """
    add_free: (paint) ->
      new_paint = @add_general paint, @free_html
      @free_selector.append new_paint
      console.log new_paint
    add_paid: (paint) ->
      console.log paint.price
      new_paint = @add_general paint, @paid_html
      $(new_paint).find('.object_price').html paint.price
      @paid_selector.append new_paint
      console.log new_paint
    add_general: (paint, html) ->
      {icon} = paint
      new_paint = $(html).clone()
      $(new_paint).find('.object_image img').attr 'src', "resources/#{icon}_icon.png"
      $(new_paint).find('.object_image a').attr 'href', "resources/#{icon}.html"
      $(new_paint).find('.btn').click ->
        console.log "add this image: #{icon}"
        window.addImage icon
      new_paint
  
  # Load the paintings
  objectManager = new ObjectsManager
  for paint in objects.free_objects
    objectManager.add_free paint
  for paint in objects.paid_objects
    objectManager.add_paid paint
    
  # handle navigation
  $('#openObjects').click ->
    $('#paintingsView').hide()
    $('#objectsView').show()
    $('#stage').hide()
    console.log 'objectsView'
  $('#openBackground').click ->
    $('#paintingsView').show()
    $('#objectsView').hide()
    $('#stage').hide()
    console.log 'paintingsView'
  $('#shareButton').click ->
    window.exportImage()
    
  window.revertNavigation = ->
    $('#paintingsView').hide()
    $('#objectsView').hide()
    $('#stage').show()
    console.log 'revertNavigation'