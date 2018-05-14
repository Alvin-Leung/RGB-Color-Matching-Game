var Application = {};

var h1 = document.querySelector("h1");

var colorDisplay = document.getElementById("colorDisplay");

var resetButton = document.getElementById("resetButton");

var easyButton = document.getElementById("easyButton");

var hardButton = document.getElementById("hardButton");

var messageDisplay = document.getElementById("message");

var defaultNumberOfSquares = 6;

resetButton.addEventListener("click", ResetClickHandler);

Application.SquareGenerator = function() {
	var squares = [];

	var colors = [];

	var pickedColor;

	var container = document.querySelector(".container");

	var RemoveSquaresFromContainer = function() 
	{
		for (var i=0; i<squares.length; i++)
		{
			container.removeChild(squares[i]);
		}
	}

	var CreateSquares = function(numberOfSquares)
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

	var AppendSquaresToContainer = function()
	{
		for (var i=0; i<squares.length; i++)
		{
			container.appendChild(squares[i]);
		}
	}

	var ColorSquares = function() {
		for (var i=0; i<squares.length; i++)
		{
			squares[i].style.backgroundColor = colors[i];
		}
	}

	var AddSquareEventListeners = function() {
		for (var i=0; i<squares.length; i++)
		{
			squares[i].addEventListener("click", SquareClickHandler);
		}
	}

	var SquareClickHandler = function() {
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

	var SetSquareColors = function(color) {
		for (var i=0; i<squares.length; i++)
		{
			squares[i].style.backgroundColor = color;
		}
	}

	return {
		Initialize: function(numberOfSquares) {

			RemoveSquaresFromContainer();

			squares = CreateSquares(numberOfSquares);

			AppendSquaresToContainer();

			colors = Application.ColorGenerator.GenerateRandomColorArray(numberOfSquares);

			pickedColor = Application.ColorGenerator.PickRandomColor(colors);

			colorDisplay.textContent = pickedColor.toUpperCase(); // colorDisplay needs to go somewhere that makes sense

			ColorSquares();

			AddSquareEventListeners();

			h1.style.backgroundColor = "#232323"; // h1 needs to go somewhere that makes sense

			resetButton.textContent = "New Colors"; // probably doing too much
		}
	};
}();

Application.ColorGenerator = function() {
	var GenerateRandomColor = function() {
		var red = GetRandom8BitNumber();

		var green = GetRandom8BitNumber();

		var blue = GetRandom8BitNumber();

		var rgb = "rgb(" + red.toString() + ", " + green.toString() + ", " + blue.toString() + ")";

		return rgb;
	}

	var GetRandom8BitNumber = function()
	{
		var rand8Bit = Math.floor(Math.random() * 256);

		return rand8Bit;
	}

	return {
		PickRandomColor: function(colors) {
			var index = Math.floor(Math.random() * colors.length);

			return colors[index];
		},

		GenerateRandomColorArray: function(numberOfRandomColors)
		{
			var colorArray = [];

			for (var i=0; i<numberOfRandomColors; i++)
			{
				colorArray.push(GenerateRandomColor());
			}

			return colorArray;
		}
	};
}();

Application.SquareGenerator.Initialize(defaultNumberOfSquares);

function ResetClickHandler() {
	Application.SquareGenerator.Initialize(defaultNumberOfSquares);
} 