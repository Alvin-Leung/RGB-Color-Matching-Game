# RGB Color Matching Game

The RGB Color Matching Game helps players practice identifying colors from the component values of red, green, and blue within a color triplet. This project was made using vanilla JavaScript, and is responsive on desktop. Closures and the module design pattern were used to separate responsibility, hide private functionality, and avoid polluting the global namespace. 

## Play

The color to identify is in the header with the format RGB(r, g, b), where r, g, and b are component values of red, green, and blue respectively. These component values can range in value from 0 to 255, inclusive, where 0 is the minimum amount of that component and 255 is the maximum amount. Below the header, there are four buttons. The NEW COLORS button will reset the game, giving you a new color to identify. Upon winning, this button displays the text PLAY AGAIN? and has the same game resetting functionality. The EASY, HARD, and ++ buttons to the right select the difficulty of play. EASY mode has three squares to pick from, HARD mode has six squares, and ++ (expert) mode has twelve squares. Below the buttons will be the clickable squares, each of different color, and only one being a match for the color triplet in the header. A player wins by clicking the square that corresponds to the color triplet in the header.

## Acknowledgments

This project is one of many included in The Web Developer Bootcamp, taught by Colt Steele on Udemy. 