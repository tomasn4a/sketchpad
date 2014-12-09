$(document).ready(function(){
	var $grid = $("#container");
	for (i = 0; i < 16; i++) {
   		var row = "<div>";
    	for (j = 0; j < 16; j++){
       		row += "<div class='square'>" + j + "</div>";
    	};
    row += "</div>";
    $grid.append(row);
	};
});

/* $(document).ready(function(){
	var $grid = $("#container");
	for (i=0; i<16; i++){
		$grid.append("<div>");
		for (j=0; j<16; j++){
			$grid.append("<div class='square'>" + j + "</div>");
		};
		$grid. append("</div>");
	};
}); */