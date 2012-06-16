(function() {

  $(function() {
    var Objects, ObjectsManager, objectManager, objects, paint, _i, _j, _len, _len2, _ref, _ref2;
    Objects = (function() {

      function Objects() {}

      Objects.prototype.free_objects = [];

      Objects.prototype.paid_objects = [];

      Objects.prototype.add_free = function(icon) {
        var paint;
        paint = {
          icon: icon
        };
        return this.free_objects.push(paint);
      };

      Objects.prototype.add_paid = function(icon, price) {
        var paint;
        paint = {
          icon: icon,
          price: price
        };
        return this.paid_objects.push(paint);
      };

      return Objects;

    })();
    objects = new Objects;
    objects.add_free('MonaLisa');
    objects.add_free('MonaLisaHead');
    objects.add_free('TheScream');
    objects.add_free('TheScreamHead');
    objects.add_free('BalloonGirl');
    objects.add_free('BalloonGirlJustGirl');
    objects.add_free('BalloonGirlJustBalloon');
    objects.add_paid('SonOfMan', "20M");
    objects.add_free('SonOfManHead');
    objects.add_paid('GirlWithPearlEarring', "30M");
    objects.add_free('GirlWithPearlEarringHead');
    ObjectsManager = (function() {

      function ObjectsManager() {}

      ObjectsManager.prototype.free_selector = $('#free_objects .objects');

      ObjectsManager.prototype.paid_selector = $('#paid_objects .objects');

      ObjectsManager.prototype.free_html = "<div class=\"object\">\n  <div class=\"object_image\">\n    <a href=\"\" data-rel=\"dialog\"><img src=\"\" /></a>\n  </div>\n  <button class=\"btn\">Use This</a>\n</div>";

      ObjectsManager.prototype.paid_html = "<div class=\"object\">\n  <div class=\"object_image\">\n    <a href=\"\" data-rel=\"dialog\"><img src=\"\" /></a>\n  </div>\n  <div class=\"object_price\"></div>\n  <button class=\"btn\">Use This</a>\n</div>";

      ObjectsManager.prototype.add_free = function(paint) {
        var new_paint;
        new_paint = this.add_general(paint, this.free_html);
        this.free_selector.append(new_paint);
        return console.log(new_paint);
      };

      ObjectsManager.prototype.add_paid = function(paint) {
        var new_paint;
        console.log(paint.price);
        new_paint = this.add_general(paint, this.paid_html);
        $(new_paint).find('.object_price').html(paint.price);
        this.paid_selector.append(new_paint);
        return console.log(new_paint);
      };

      ObjectsManager.prototype.add_general = function(paint, html) {
        var icon, new_paint;
        icon = paint.icon;
        new_paint = $(html).clone();
        $(new_paint).find('.object_image img').attr('src', "resources/" + icon + "_icon.png");
        $(new_paint).find('.object_image a').attr('href', "resources/" + icon + ".html");
        $(new_paint).find('.btn').click(function() {
          console.log("add this image: " + icon);
          return window.addImage(icon);
        });
        return new_paint;
      };

      return ObjectsManager;

    })();
    objectManager = new ObjectsManager;
    _ref = objects.free_objects;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      paint = _ref[_i];
      objectManager.add_free(paint);
    }
    _ref2 = objects.paid_objects;
    for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
      paint = _ref2[_j];
      objectManager.add_paid(paint);
    }
    $('#openObjects').click(function() {
      $('#paintingsView').hide();
      $('#objectsView').show();
      $('#stage').hide();
      return console.log('objectsView');
    });
    $('#openBackground').click(function() {
      $('#paintingsView').show();
      $('#objectsView').hide();
      $('#stage').hide();
      return console.log('paintingsView');
    });
    $('#shareButton').click(function() {
      $(this).addClass('ui-disabled');
      return $(this).find('.ui-btn-text').html('Shared');
    });
    return window.revertNavigation = function() {
      $('#paintingsView').hide();
      $('#objectsView').hide();
      $('#stage').show();
      return console.log('revertNavigation');
    };
  });

}).call(this);
