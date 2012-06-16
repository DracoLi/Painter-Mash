$ ->
  
  class Paintings
    paintings: []
    add_panting: (icon, description) ->
      paint = {icon: icon, description: description}
      @paintings.push paint
  paintings = new Paintings
  paintings.add_panting 'miro', 'micro finance'
  paintings.add_panting 'magritte', 'smock alot'
  paintings.add_panting 'mondrian', 'mandarin'
  paintings.add_panting 'rothko', 'rock is cool'
  
  
  class PaintingManager
  
    free_selector: $('#free_paintings .paintings')
    
    $paid_selector: $('#paid_paintings .paintings')
  
    paint_html: """
      <div class="paint">
        <div class="paint_image">
          <img src="" />
        </div>
        <div class="paint_description">
        
        </div>
      
        <button>Use This</button>
      </div>
    """
  
    add_free: (paint) ->
      {description, icon} = paint
      new_paint = $(@paint_html).clone()
      $(new_paint).find('.paint_description').html description
      $(new_paint).find('.paint_image img').attr 'src', "resources/#{icon}_icon.png"
      @free_selector.append new_paint
      console.log new_paint
    
  paintManager = new PaintingManager

  for paint in paintings.paintings
    paintManager.add_free paint