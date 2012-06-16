forge.logging.info "Add paintings"

class PaintingManager
  
  $free_selector: $('#free_paintings')
    
  $paid_selector: $('#paid_paintings')
  
  paint_html: """
    <div class="paint">
      <div class="paint_image">
        <img src=""/>
      </div>
      <div class="paint_description">
        
      </div>
      
      <button>Use This</button>
    </div>
  """
  
  add_free: (paint) ->
    {description, icon} = paint
    new_paint = $(paint_html).clone
    $(paint_html).children('.paint_description') = description
    $(paint_html).children('.paint_image a').attr('src', "resources/#{icon}.png")
    @$free_selector.append new_paint