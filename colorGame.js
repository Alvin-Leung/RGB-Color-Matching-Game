var colors = [];

var h1 = document.querySelector("h1");

var container = document.querySelector(".container");

var squares = [];

var colorDisplay = document.getElementById("colorDisplay");

var resetButton = document.getElementById("resetButton");

var easyButton = document.getElementById("easyButton");

var hardButton = document.getElementById("hardButton");

var messageDisplay = document.getElementById("message");

var defaultNumberOfSquares = 6;

var pickedColor;

resetButton.addEventListener("click", ResetClickHandler);

Initialize(defaultNumberOfSquares);

function Initialize(numberOfSquares) {
	RemoveSquaresFromContainer();

	squares = CreateSquares(numberOfSquares);

	AppendSquaresToContainer();

	colors = GenerateRandomColorArray(numberOfSquares);

	pickedColor = PickRandomColor();

	colorDisplay.textContent = pickedColor.toUpperCase();

	ColorSquares();

	AddSquareEventListeners();

	h1.style.backgroundColor = "#232323";

	resetButton.textContent = "New Colors";
}

function CreateSquares(numberOfSquares)
{
	var squares = [];

	var squareNode;

	for (var i=0; i<numberOfSquares; i++)
	{
		squareNode = document.createElement("div");

		squareNode.classList.add("square");

		squares.push(squareNode);
	}

	return squares;
}

function AppendSquaresToContainer()
{
	for (var i=0; i<squares.length; i++)
	{
		container.appendChild(squares[i]);
	}
}

function RemoveSquaresFromContainer()
{
	for (var i=0; i<squares.length; i++)
	{
		container.removeChild(squares[i]);
	}
}

function AddSquareEventListeners() {
	for (var i=0; i<squares.length; i++)
	{
		squares[i].addEventListener("click", SquareClickHandler);
	}
}

function RemoveSquareEventListeners() {
	for (var i=0; i<squares.length; i++)
	{
		squares[i].removeEventListener("click", SquareClickHandler);
	}
}

function ResetClickHandler() {
	Initialize(defaultNumberOfSquares);
} 

function SquareClickHandler() {
	if (this.style.backgroundColor === pickedColor)
	{
		messageDisplay.textContent = "Correct";

		SetSquareColors(this.style.backgroundColor);

		h1.style.backgroundColor = this.style.backgroundColor;

		resetButton.textContent = "Play Again?";
	}
	else
	{
		this.style.backgroundColor = "#232323";

		messageDisplay.textContent = "Try Again";
	}
}

function ColorSquares() {
	for (var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor = colors[i];
	}
}

function SetSquareColors(color) {
	for (var i=0; i<squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function PickRandomColor() {
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