window.onload = function() {
	//var context = canvas.getContext("2d");
	
	initialize();
	addBackground("TheHumanCondition");
  
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
	pts = new Array();
	canvas = layer.getCanvas();
	$('canvas').css("position", "inherit");
	context = canvas.getContext("2d");
	canvas.addEventListener('mousedown', startPaint, false);
	canvas.addEventListener('mousemove', continuePaint, false);
	canvas.addEventListener('mouseup', stopPaint, false);
	//canvas.addEventListener('touchstart', startPaint, false);
	//canvas.addEventListener('touchmove', continuePaint, false);
	//canvas.addEventListener('touchend', stopPaint, false);


}

function loadStage() {
	stage = new Kinetic.Stage("container", 320, 480);
	
        layer = new Kinetic.Layer();
	stage.add(layer);
}

window.addImage = function(imageName) {
	var imageObj = new Image();
	imageObj.src = "resources/" + imageName + "_normal.png"

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
	imageObj.src = "resources/" + imageName + "_normal.png"

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
  var canvasData = canvas.toDataURL();
  $.ajax({
    type: "POST",
    url: "http://simple-planet-5852.herokuapp.com/painter",
    data: { "image": canvasData },
    complete: function(response) {
      console.log(response);
    },
    success: function(response) {
      console.log(response)
      $.get("http://simple-planet-5852.herokuapp.com/painter");
      $('<iframe src="http://simple-planet-5852.herokuapp.com/painter"></iframe>').appendTo($('body'));
    }
  });
}

function startPaint(evt) {
	if(!buttonDown && draw)
	{               
		context.beginPath();
		context.moveTo(evt.x, evt.y);
		buttonDown = true;
		pts = new Array();
		pts.push(evt.x);
		pts.push(evt.y);
	}            
	evt.preventDefault();
}


function continuePaint(evt) {
	if(buttonDown && draw)
	{                            
		context.lineTo(evt.x,evt.y);
		context.stroke();
		pts.push(evt.x);
		pts.push(evt.y);
		//var line = new Kinetic.Line({ points: pts});
		//layer.add(line);		
		//stage.clear();
		//stage.add(layer);
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
