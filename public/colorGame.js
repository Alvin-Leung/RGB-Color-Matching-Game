var Application = {};

Application.Page = function() {

	var page = {
		h1: document.querySelector("h1"),
		colorDisplay: document.getElementById("colorDisplay"),
		resetButton: document.getElementById("resetButton"),
		easyButton: document.getElementById("easyButton"),
		hardButton: document.getElementById("hardButton"),
		expertButton: document.getElementById("expertButton"),
		messageDisplay: document.getElementById("message"),
		SetColorDisplay: function(rgbString) {
			this.colorDisplay.textContent = rgbString;
		}
	}

	var ResetPage = function() {
		page.h1.style.backgroundColor = "steelblue";

		page.resetButton.textContent = "New Colors";

		page.messageDisplay.textContent = "";
	}

	var ResetClickHandler = function() {
		ResetPage();

		Application.SquareGenerator.Initialize();
	}; 

	var EasyButtonClickHandler = function() {
		ResetPage();

		Application.SquareGenerator.Initialize(3);

		this.classList.add("selected");

		page.hardButton.classList.remove("selected");

		page.expertButton.classList.remove("selected");
	};

	var HardButtonClickHandler = function() {
		ResetPage();

		Application.SquareGenerator.Initialize(6);

		this.classList.add("selected");

		page.easyButton.classList.remove("selected");

		page.expertButton.classList.remove("selected");
	};

	var ExpertButtonClickHandler = function() {
		ResetPage();

		Application.SquareGenerator.Initialize(12);

		this.classList.add("selected");

		page.easyButton.classList.remove("selected");

		page.hardButton.classList.remove("selected");
	};

	page.resetButton.addEventListener("click", ResetClickHandler);

	page.easyButton.addEventListener("click", EasyButtonClickHandler);

	page.hardButton.addEventListener("click", HardButtonClickHandler);

	page.expertButton.addEventListener("click", ExpertButtonClickHandler);

	return page;
}();

Application.SquareGenerator = function() {
	var lastInitializationNumberOfSquares = 6;

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
	};

	var CreateSquares = function(numberOfSquares)
	{
		var squares = [];

		var squareNode;

		var squareClass;

		if (numberOfSquares <= 6) 
		{
			squareClass = "square";
		}
		else
		{
			squareClass = "squareSmall";
		}

		for (var i=0; i<numberOfSquares; i++)
		{
			squareNode = document.createElement("div");

			squareNode.classList.add(squareClass);

			squares.push(squareNode);
		}

		return squares;
	};

	var AppendSquaresToContainer = function()
	{
		for (var i=0; i<squares.length; i++)
		{
			container.appendChild(squares[i]);
		}
	};

	var ColorSquares = function() {
		window.setTimeout(function() {
			for (var i=0; i<squares.length; i++)
			{
				squares[i].style.backgroundColor = colors[i];
			}
		}, 100);
	};

	var AddSquareEventListeners = function() {
		for (var i=0; i<squares.length; i++)
		{
			squares[i].addEventListener("click", SquareClickHandler);
		}
	};

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
	};

	var SetSquareColors = function(color) {
		for (var i=0; i<squares.length; i++)
		{
			squares[i].style.backgroundColor = color;
		}
	};

	return {
		Initialize: function(numberOfSquares = lastInitializationNumberOfSquares) {
			lastInitializationNumberOfSquares = numberOfSquares;

			RemoveSquaresFromContainer();

			squares = CreateSquares(numberOfSquares);

			AppendSquaresToContainer();

			colors = Application.ColorGenerator.GenerateRandomColorArray(numberOfSquares);

			pickedColor = Application.ColorGenerator.PickRandomColor(colors);

			Application.Page.SetColorDisplay(pickedColor);

			AddSquareEventListeners();

			ColorSquares();
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
	};

	var GetRandom8BitNumber = function()
	{
		var rand8Bit = Math.floor(Math.random() * 256);

		return rand8Bit;
	};

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

Application.SquareGenerator.Initialize();