var colors = [
	"rgb(0, 0, 255)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(255, 0, 0)",
	"rgb(255, 0, 255)",
	"rgb(255, 255, 0)"
];

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