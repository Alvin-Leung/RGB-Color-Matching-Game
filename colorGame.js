var Application = {};

var defaultNumberOfSquares = 6;

Application.Page = function() {

	var ResetClickHandler = function() {
		Application.SquareGenerator.Initialize(defaultNumberOfSquares);
	} 

	var resetButton = document.getElementById("resetButton");

	resetButton.addEventListener("click", ResetClickHandler);

	return {
		h1: document.querySelector("h1"),
		colorDisplay: document.getElementById("colorDisplay"),
		resetButton: this.resetButton,
		easyButton: document.getElementById("easyButton"),
		hardButton: document.getElementById("hardButton"),
		messageDisplay: document.getElementById("message")
	};
}();

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
			Application.Page.messageDisplay.textContent = "Correct";

			SetSquareColors(this.style.backgroundColor);

			Application.Page.h1.style.backgroundColor = this.style.backgroundColor;

			Application.Page.resetButton.textContent = "Play Again?";
		}
		else
		{
			this.style.backgroundColor = "#232323";

			Application.Page.messageDisplay.textContent = "Try Again";
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

			Application.Page.colorDisplay.textContent = pickedColor.toUpperCase();

			ColorSquares();

			AddSquareEventListeners();

			Application.Page.h1.style.backgroundColor = "#232323";

			Application.Page.resetButton.textContent = "New Colors"; // probably doing too much
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