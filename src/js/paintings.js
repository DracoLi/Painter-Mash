(function() {

  $(function() {
    var PaintingManager, Paintings, paint, paintManager, paintings, _i, _len, _ref, _results;
    Paintings = (function() {

      function Paintings() {}

      Paintings.prototype.paintings = [];

      Paintings.prototype.add_panting = function(icon, description) {
        var paint;
        paint = {
          icon: icon,
          description: description
        };
        return this.paintings.push(paint);
      };

      return Paintings;

    })();
    paintings = new Paintings;
    paintings.add_panting('miro', 'micro finance');
    paintings.add_panting('magritte', 'smock alot');
    paintings.add_panting('mondrian', 'mandarin');
    paintings.add_panting('rothko', 'rock is cool');
    PaintingManager = (function() {

      function PaintingManager() {}

      PaintingManager.prototype.free_selector = $('#free_paintings .paintings');

      PaintingManager.prototype.$paid_selector = $('#paid_paintings .paintings');

      PaintingManager.prototype.paint_html = "<div class=\"paint\">\n  <div class=\"paint_image\">\n    <img src=\"\" />\n  </div>\n  <div class=\"paint_description\">\n  \n  </div>\n\n  <button>Use This</button>\n</div>";

      PaintingManager.prototype.add_free = function(paint) {
        var description, icon, new_paint;
        description = paint.description, icon = paint.icon;
        new_paint = $(this.paint_html).clone();
        $(new_paint).find('.paint_description').html(description);
        $(new_paint).find('.paint_image img').attr('src', "resources/" + icon + "_icon.png");
        this.free_selector.append(new_paint);
        return console.log(new_paint);
      };

      return PaintingManager;

    })();
    paintManager = new PaintingManager;
    _ref = paintings.paintings;
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      paint = _ref[_i];
      _results.push(paintManager.add_free(paint));
    }
    return _results;
  });

}).call(this);
