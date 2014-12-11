var gridSize = 16;

$(document).ready(function(){
	createGrid(gridSize);
	init();
	$("#clear").click(function(){
		var newDims = prompt("Choose grid size between 1 and 60 ");
		createGrid(newDims);
		init()
	});
	$("#transparency").click(function(){
		var newDims = prompt("Choose grid size between 1 and 60 ");
		createGrid(newDims);
		$(".square").mouseenter(function(){
			$(this).css("opacity","-=0.1");
		});			
	});
	$("#random").click(function(){
		var newDims = prompt("Choose grid size between 1 and 60 ");
		createGrid(newDims);
		$(".square").mouseenter(function(){
			$(this).css("background-color",randomColor());
		});
	});
});

createGrid = function(gridSize){
	$("#container").empty();
	for (i=0; i<gridSize; i++){
		$("#container").append("<div class='line'></div>");
		for (j=0; j<gridSize; j++){
			$("#container > div:last").append("<div class='square'> </div>");
		};
	};
	var dimensions = 640 / gridSize;
	$(".square").css("height",dimensions);
	$(".line").css("height",dimensions);
	$(".square").css("width",dimensions);	
};

action = function(mode){
	$(".square").mouseenter(function(){
		$(this).addClass(mode);
	});
};

buttonClick = function(which){
	var newDims = prompt("Choose grid size between 1 and 60 ");
	createGrid(newDims);
	action(which);
};

randomColor = function(){
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ){
        color += letters[Math.floor(Math.random() * 16)];
    };
    return color;
};

init = function(){
	newColor = randomColor();
	$(".square").mouseenter(function(){
		$(this).css("background-color",newColor);
	});
};
	