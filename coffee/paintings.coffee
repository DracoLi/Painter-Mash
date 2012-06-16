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
  paintings.add_free 'miro', 'micro finance'
  paintings.add_free 'magritte', 'smock alot'
  paintings.add_paid 'mondrian', 'mandarin', 3000
  paintings.add_paid 'rothko', 'rock is cool', 5000
  
  class PaintingManager
  
    free_selector: $('#free_paintings .paintings')
    
    paid_selector: $('#paid_paintings .paintings')
  
    free_html: """
      <div class="paint">
        <div class="paint_image">
          <img src="" />
        </div>
        <div class="paint_description">
        
        </div>
      
        <button>Use This</button>
      </div>
    """
    paid_html: """
      <div class="paint">
        <div class="paint_image">
          <img src="" />
        </div>
        <div class="paint_description">
          
        </div>
        <div class="paint_price"></div>
        <button>Use This</button>
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
      {description, icon} = paint
      new_paint = $(html).clone()
      $(new_paint).find('.paint_description').html description
      $(new_paint).find('.paint_image img').attr 'src', "resources/#{icon}_icon.png"
      new_paint
      
  paintManager = new PaintingManager

  for paint in paintings.free_paintings
    paintManager.add_free paint
  for paint in paintings.paid_paintings
    paintManager.add_paid paint