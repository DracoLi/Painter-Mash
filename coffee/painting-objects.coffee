$ ->
    
  class Objects
    free_objects: []
    paid_objects: []
    add_free: (icon, description) ->
      paint = {icon: icon, description: description}
      @free_objects.push paint
    add_paid: (icon, description, price) ->
      paint = {icon: icon, description: description, price: price}
      @paid_objects.push paint
  objects = new Objects
  objects.add_free 'miro', 'micro finance'
  objects.add_free 'magritte', 'smock alot'
  objects.add_paid 'mondrian', 'mandarin', 3000
  objects.add_paid 'rothko', 'rock is cool', 5000
  
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
      {description, icon} = paint
      new_paint = $(html).clone()
      $(new_paint).find('.object_description').html description
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