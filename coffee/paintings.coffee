$ ->
    
  class Paintings
    free_paintings: []
    paid_paintings: []
    add_free: (icon, description) ->
      paint = {icon: icon, description: description}
      @free_paintings.push paint
    add_paid: (icon, description, price) ->
      paint = {icon: icon, description: description, price: price}
      @paid_paintings.push paint
  paintings = new Paintings
  paintings.add_free 'Fugue'
  paintings.add_free 'ShadesOfEternalNight'
  paintings.add_free 'Aglow'
  paintings.add_free 'Dancer'
  paintings.add_paid 'ATreeInNaples', "40M"
  paintings.add_paid 'CompositionNo8', "25M"
  paintings.add_paid 'LeGuitariste', "80M"
  paintings.add_paid 'TheHumanCondition', "20M"
  paintings.add_paid 'UntitledYellowRedBlue', "35M"
  
  class PaintingManager
  
    free_selector: $('#free_paintings .paintings')
    
    paid_selector: $('#paid_paintings .paintings')
  
    free_html: """
      <div class="paint">
        <div class="paint_image">
          <a href="" data-rel="dialog"><img src="" /></a>
        </div>
        <button class="btn">Use This</a>
      </div>
    """
    paid_html: """
      <div class="paint">
        <div class="paint_image">
          <a href="" data-rel="dialog"><img src="" /></a>
        </div>
        <div class="paint_price"></div>
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
      $(new_paint).find('.paint_price').html paint.price
      @paid_selector.append new_paint
      console.log new_paint
    add_general: (paint, html) ->
      {icon} = paint
      new_paint = $(html).clone()
      $(new_paint).find('.paint_image img').attr 'src', "resources/#{icon}_icon.png"
      $(new_paint).find('.paint_image a').attr 'href', "resources/#{icon}.html"
      $(new_paint).click ->
        console.log "add this background: #{icon}"
        window.addBackground icon
      new_paint
  
  # Load the paintings
  paintManager = new PaintingManager
  for paint in paintings.free_paintings
    paintManager.add_free paint
  for paint in paintings.paid_paintings
    paintManager.add_paid paint