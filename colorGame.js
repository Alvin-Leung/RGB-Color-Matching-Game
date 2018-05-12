var colors = GenerateRandomColorArray(6);

var squares = document.getElementsByClassName("square");

var colorDisplay = document.getElementById("colorDisplay");

var messageDisplay = document.getElementById("message");

var pickedColor = PickColor();

colorDisplay.textContent = pickedColor.toUpperCase();

for (var i=0; i<squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {
		if (this.style.backgroundColor === pickedColor)
		{
			messageDisplay.textContent = "Correct";

			ChangeColors(this.style.backgroundColor);
		}
		else
		{
			this.style.backgroundColor = "#232323";

			messageDisplay.textContent = "Try Again";
		}
	});
}

function ChangeColors(color) {
	for (var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function PickColor() {
	var index = Math.floor(Math.random() * colors.length);

	return colors[index];
}

function GenerateRandomColorArray(numberOfRandomColors)
{
	var colorArray = [];

	for (var i=0; i<numberOfRandomColors; i++)
	{
		colorArray.push(GenerateRandomColor());
	}

	return colorArray;
}

function GenerateRandomColor() {
	var red = GetRandom8BitNumber();

	var green = GetRandom8BitNumber();

	var blue = GetRandom8BitNumber();

	var rgb = "rgb(" + red.toString() + ", " + green.toString() + ", " + blue.toString() + ")";

	return rgb;
}

function GetRandom8BitNumber()
{
	var rand8Bit = Math.floor(Math.random() * 256);

	return rand8Bit;
}