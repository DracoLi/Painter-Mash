window.onload = function() {
	var canvas = document.getElementById("paint-img");
	//var context = canvas.getContext("2d");
	

	loadStage();
	addBackground("miro_normal");
	addImage("miro_icon");
	addImage("rothko_icon");

	//var params = getUrlVars();
	/*
	if (params["painting"] != 'undefined' && params["painting"] != {}) {
		var imageObj = new Image();
		imageObj.src = "resources/" + params["painting"]+ ".png"
		imageObj.onload = function() {
		//	context.drawImage(imageObj, 0, 0);
			drawImage(this);
		}
	}
	*/	
};

function loadStage() {
	stage = new Kinetic.Stage("stage", 320, 480);
        layer = new Kinetic.Layer();
	stage.add(layer);
}

window.addImage = function(imageName) {
	var imageObj = new Image();
	imageObj.src = "resources/" + imageName + ".png"

       var kinImgObject = new Kinetic.Image({
	       image: imageObj,
               x: 0,
               y: 0
               //width: 100,
               //height: 100
       });

	// enable drag and drop
	kinImgObject.draggable(true);

	// add cursor styling
	kinImgObject.on("mouseover", function(){
		document.body.style.cursor = "pointer";
	});
	kinImgObject.on("mouseout", function(){
		document.body.style.cursor = "default";
	});

	//var layer = new Kinetic.Layer();
	layer.add(kinImgObject);
	stage.clear();
	stage.add(layer);
}

window.addBackground = function(imageName) {
	$("menu").hide();
	$("stage").show();
	var imageObj = new Image();
	imageObj.src = "resources/" + imageName + ".png"

       var kinImgObject = new Kinetic.Image({
	       image: imageObj,
               x: 0,
               y: 0
               //width: 100,
               //height: 100
       });

	// disable drag and drop
	kinImgObject.draggable(false);

	layer.add(kinImgObject);
	stage.clear();
	stage.add(layer);
}

/*

function drawImage(imageObj){
            var x = stage.width / 2 ;
            var y = stage.height / 2;
 
            // darth vader
            var imgObject = new Kinetic.Image({
                image: imageObj,
                x: x,
                y: y
                //width: 100,
                //height: 100
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
*/

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
