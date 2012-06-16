(function() {
  var PaintingManager, paintManager;

  PaintingManager = (function() {

    function PaintingManager() {}

    PaintingManager.prototype.$free_selector = $('#free_paintings');

    PaintingManager.prototype.$paid_selector = $('#paid_paintings');

    PaintingManager.prototype.paint_html = "<div class=\"paint\">\n  <div class=\"paint_image\">\n    <img src=\"\"/>\n  </div>\n  <div class=\"paint_description\">\n    \n  </div>\n  \n  <button>Use This</button>\n</div>";

    PaintingManager.prototype.add_free = function(paint) {
      var description, icon, new_paint;
      description = paint.description, icon = paint.icon;
      new_paint = $(paint_html).clone;
      $(paint_html).children('.paint_description').html(description);
      $(paint_html).children('.paint_image a').attr('src', "resources/" + icon + ".png");
      this.$free_selector.append(new_paint);
      return console.log('added new free');
    };

    return PaintingManager;

  })();

  paintManager = new PaintingManager;

  paintManager.add_free({
    description: "i like chicken",
    icon: "paint"
  });

}).call(this);
