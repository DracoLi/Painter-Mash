(function() {

  $(function() {
    var PaintingManager, Paintings, paint, paintManager, paintings, _i, _j, _len, _len2, _ref, _ref2, _results;
    Paintings = (function() {

      function Paintings() {}

      Paintings.prototype.free_paintings = [];

      Paintings.prototype.paid_paintings = [];

      Paintings.prototype.add_free = function(icon, description) {
        var paint;
        paint = {
          icon: icon,
          description: description
        };
        return this.free_paintings.push(paint);
      };

      Paintings.prototype.add_paid = function(icon, description, price) {
        var paint;
        paint = {
          icon: icon,
          description: description,
          price: price
        };
        return this.paid_paintings.push(paint);
      };

      return Paintings;

    })();
    paintings = new Paintings;
    paintings.add_free('Fugue');
    paintings.add_free('ShadesOfEternalNight');
    paintings.add_free('Aglow');
    paintings.add_free('Dancer');
    paintings.add_paid('ATreeInNaples', "40M");
    paintings.add_paid('CompositionNo8', "25M");
    paintings.add_paid('LeGuitariste', "80M");
    paintings.add_paid('TheHumanCondition', "20M");
    paintings.add_paid('UntitledYellowRedBlue', "35M");
    PaintingManager = (function() {

      function PaintingManager() {}

      PaintingManager.prototype.free_selector = $('#free_paintings .paintings');

      PaintingManager.prototype.paid_selector = $('#paid_paintings .paintings');

      PaintingManager.prototype.free_html = "<div class=\"paint\">\n  <div class=\"paint_image\">\n    <a href=\"\" data-rel=\"dialog\"><img src=\"\" /></a>\n  </div>\n  <button class=\"btn\">Use This</a>\n</div>";

      PaintingManager.prototype.paid_html = "<div class=\"paint\">\n  <div class=\"paint_image\">\n    <a href=\"\" data-rel=\"dialog\"><img src=\"\" /></a>\n  </div>\n  <div class=\"paint_price\"></div>\n  <button class=\"btn\">Use This</a>\n</div>";

      PaintingManager.prototype.add_free = function(paint) {
        var new_paint;
        new_paint = this.add_general(paint, this.free_html);
        this.free_selector.append(new_paint);
        return console.log(new_paint);
      };

      PaintingManager.prototype.add_paid = function(paint) {
        var new_paint;
        console.log(paint.price);
        new_paint = this.add_general(paint, this.paid_html);
        $(new_paint).find('.paint_price').html(paint.price);
        this.paid_selector.append(new_paint);
        return console.log(new_paint);
      };

      PaintingManager.prototype.add_general = function(paint, html) {
        var icon, new_paint;
        icon = paint.icon;
        new_paint = $(html).clone();
        $(new_paint).find('.paint_image img').attr('src', "resources/" + icon + "_icon.png");
        $(new_paint).find('.paint_image a').attr('href', "resources/" + icon + ".html");
        $(new_paint).click(function() {
          console.log("add this background: " + icon);
          return window.addBackground(icon);
        });
        return new_paint;
      };

      return PaintingManager;

    })();
    paintManager = new PaintingManager;
    _ref = paintings.free_paintings;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      paint = _ref[_i];
      paintManager.add_free(paint);
    }
    _ref2 = paintings.paid_paintings;
    _results = [];
    for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
      paint = _ref2[_j];
      _results.push(paintManager.add_paid(paint));
    }
    return _results;
  });

}).call(this);
