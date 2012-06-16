window.onload = function() {
	//var context = canvas.getContext("2d");
	
	initialize();
	addBackground("miro_normal");
	addImage("miro_icon");
	addImage("rothko_icon");
  
  $('#shareButton').click(function() {
    window.exportImage();
  });
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

function initialize() {
	buttonDown = false;
	draw = true;
	loadStage();
	canvas = layer.getCanvas();
	context = canvas.getContext("2d");
	canvas.addEventListener('mousedown', startPaint, false);
	canvas.addEventListener('mousemove', continuePaint, false);
	canvas.addEventListener('mouseup', stopPaint, false);

}

function loadStage() {
	stage = new Kinetic.Stage("innerStage", 320, 480);
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
	
	window.revertNavigation();
}

window.addBackground = function(imageName) {
	$("#other").hide();
	$("#stage").show();
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
	
	window.revertNavigation();
}


window.exportImage = function() {
	var canvas = layer.getCanvas();
	var canvasData = canvas.toDataURL();
	var ajax = new XMLHttpRequest();
	ajax.open("POST",'http://simple_planet_5852.herokuapp.com/painter',false);
	ajax.setRequestHeader('Content-Type', 'application/upload');
	//ajax.send("image="+canvasData);
}


function startPaint(evt) {
	if(!buttonDown && draw)
	{               
		context.beginPath();
		context.moveTo(evt.x, evt.y);
		buttonDown = true;
	}            
	evt.preventDefault();
}


function continuePaint(evt) {
	if(buttonDown && draw)
	{                            
		context.lineTo(evt.x,evt.y);
		context.stroke();
	}
}

function stopPaint(evt) {
	buttonDown =false;
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
