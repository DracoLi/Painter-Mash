(function() {

  $(function() {
    var getUrlVars, name, params;
    getUrlVars = function() {
      var hash, hashes, vars, _i, _len;
      vars = [];
      hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
      for (_i = 0, _len = hashes.length; _i < _len; _i++) {
        hash = hashes[_i];
        hash = hash.split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
      }
      return vars;
    };
    params = getUrlVars();
    name = decodeURIComponent(params["name"]);
    return console.log(name);
  });

}).call(this);
