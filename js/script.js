$(document).ready(function() {
	createGrid(16);
});

function createGrid(x) {
	var squareSize = (960 / x);
	if ($(".square")[0]) {
		$(".square").remove();
	}
	for (var i = 0; i < (x * x); i++) {
		$(".container").append("<div class='square'></div>");
	}
	$(".square").width(squareSize);
	$(".square").height(squareSize);
	sketch();
}

function sketch() {
	$(".square").mouseenter(function() {
		$(this).css("background-color", "white");
	});
}

function opacityChange() {
	$(".square").mouseenter(function() {
			var cOpacity = $(this).css("opacity");
			if (cOpacity != 0) {
				$(this).css("opacity", cOpacity - 0.1);
			}
		});
}

function reset() {
	$(".square").css("background-color", "black");
	$(".square").css("opacity", 1);
}

function randomColor() {
	$(".square").mouseenter(function() {
		var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
		$(this).css("background-color", randomColor);
	});
}

function trails() {
	$(".square").mouseenter(function() {
		$(this).fadeTo(100, 0);
});
	$(".square").mouseleave(function() {
		$(this).fadeTo(400, 1);
	});
}
var toggleBorder = $("input[type=checkbox]")

toggleBorder.click(function() {
	if ($(this).is(":checked")) {
		$(".square").css("border","1px dashed #333");
	}
	else {
		$(".square").css("border","none");
	}
});

function getGridSize() {
	do {
		var size = prompt("Please enter an integer between 1 and 128");
	}	while (size < 1 || size > 128);
	return size;
	}

//Button functions
$("button").click(function() {
	$(".square").unbind();
});

$("#default").click(function() {
	sketch();
});

$("#random").click(function() {
	randomColor();
});

$("#trail").click(function() {
	trails();
});

$("#opacity").click(function() {
	opacityChange();
})

$("#reset").click(function() {
	reset()
	alert("The sketchpad has been resetted, please choose an effect")
})

$("#newGrid").click(function() {
	createGrid(getGridSize());
	$(borders).attr("checked", false);
});

//Some help from Jack Doyle's code