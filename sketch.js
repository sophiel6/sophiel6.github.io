
//Sophie Lanier (shl2166)
//Data Visualization - A0 

function setup() {
	createCanvas(800,800); // make an HTML canvas element width x height pixels
	prevMinute = minute();
	print(prevMinute)
}


function draw() {
	rectMode(CORNER);
	sqsize = map(hour(), 0, 23, 50, width);
	fill(0, 0, 255);
	rect(0, height-sqsize, sqsize, sqsize);

	ellipseMode(CORNER);
	circsize = map(minute(), 0, 59, 50, width);
	fill(255, 0, 0, 191);
	ellipse(0, height-circsize, circsize, circsize);
	if (minute() != prevMinute)
	{
		print(minute())
		prevMinute = minute();
	}

	trisize = map(second(), 0, 59, 5, width);
	fill(255, 204, 0, 140);
	triangle(0, height, 0, height-trisize, trisize, height);
}

//blue square - hour
//red circle - minutes
//yellow triange - seconds
