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

var pickedColor = colors[3];

colorDisplay.textContent = pickedColor.toUpperCase();

for (var i=0; i<squares.length; i++)
{
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function() {
		if (this.style.backgroundColor === pickedColor)
		{
			alert("Correct!");
		}
		else
		{
			alert("Wrong!");
		}
	});
}