

$(function(){

	var distanceIndicator = $("#Distance");
	var previousOffsetX = document.body.scrollLeft;
	var previousOffsetY = document.body.scrollTop;
	var ignoreScroll = false;
	var timeout = -1;
	var pagePixels = 0;


	function testScroll(){
		var scrollLeft = $(document).scrollLeft();
		var scrollTop = $(document).scrollTop();
		var dX = previousOffsetX - scrollLeft;
		var dY = previousOffsetY - scrollTop;
		previousOffsetX = scrollLeft;
		previousOffsetY = scrollTop;
		if (dX !== 0 || dY !== 0){
			sendPixels(dX, dY);
		}
	}

	

	function sendPixels(dX, dY){
		dX = Math.abs(dX);
		dY = Math.abs(dY);
		var pixels = dX + dY;
		pagePixels += pixels;
		displayDist(pagePixels);
	}


	(function update(){
		testScroll();
		requestAnimationFrame(update);
	}());

	
	var side = 0;

	var currentPosition = {
		x : 0,
		y : 0,
		rotation : 0
	};

	var imageSize = 25;

	var maxX = window.innerWidth - imageSize * 2 + 10;
	var minX = -25;
	var maxY = 0;
	var minY = -window.innerHeight;

	window.addEventListener("resize", function(){
		maxX = window.innerWidth - imageSize * 2 + 10;
		minX = -25;
		maxY = 0;
		minY = -window.innerHeight;
	});

	function displayDist(pixels){
		var cm = pixels / 119;
		distanceIndicator.text((cm / 1000).toFixed(3) + "m");
	}
});