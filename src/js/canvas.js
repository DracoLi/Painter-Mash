window.onload = function() {
	var canvas = document.getElementById("paint-img");
	var context = canvas.getContext("2d");
	

	var params = getUrlVars();
	if (params["painting"] != 'undefined' && params["painting"] != {}) {
		var imageObj = new Image();
		imageObj.src = "resources/" + params["painting"]+ ".png"
		imageObj.onload = function() {
		//	context.drawImage(imageObj, 0, 0);
			drawImage(this);
		}
	}	
};


function drawImage(imageObj){
            var stage = new Kinetic.Stage("stage", 480, 320);
            var layer = new Kinetic.Layer();
            var x = stage.width / 2 - 200 / 2;
            var y = stage.height / 2 - 137 / 2;
 
            // darth vader
            var imgObject = new Kinetic.Image({
                image: imageObj,
                x: x,
                y: y,
                width: 100,
                height: 100
            });
 
            // enable drag and drop
            imgObject.draggable(true);
 
            // add cursor styling
            imgObject.on("mouseover", function(){
                document.body.style.cursor = "pointer";
            });
            imgObject.on("mouseout", function(){
                document.body.style.cursor = "default";
            });
 
            layer.add(imgObject);
            stage.add(layer);
}


function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
