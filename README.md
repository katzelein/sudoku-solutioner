# Sudoku Solutioner
## By Kat Guthrie

Welcome to Sudoku Solutioner, a simple app that checks if your solution to everyone's favorite 9x9 logic puzzle is winner! (or not)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Everything inside the `components` and `validations` folders were created by me. Everything outside of that remains mostly intact from the original create-react-app build.

## How to Play

After cloning the repo onto your local machine, in the base directory please run:

### `yarn start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Then enter a solution which you believe will win you your game. Press the `Check Solution` button to confirm your hopes and dreams, and press `Reset Board` to dash all your hopes of glory. And apologies if the win and lose celebrations, straight from Giphy's "trending" section, don't make you laugh, but I giggled every time.

## How to Test

### `yarn test`

Launches the tests which confirm game functionality. 

## Areas of improvement

Nested array manipulation: I loathe needing to update the nested array of a board every time a node gets updated. If work was to be continued here, I would store values in an object in a format such as `[${row},${col}]: val` for easy lookup, although validation functions would still need to have some kind of looping mechanism. But since I tend to overcomplicate things when it comes to algorithms, I decided to leave this solution as-is given time constraints for this exercise.

Design: it isn't the most stunning, but I'm erring on the side of clean and demure until gifs.

Testing: I tend to avoid most component tests since they are easily changed, but I have kept one basic one here just to prove the header exists. I spent most of my time writing tests for the validation functions, since they were the most important for the game rules. If it was very important to those arbiting my performance, I could write more tests confirming we had a 9x9 game board, that the gifs were visible at appropriate times, etc.

## Thanks for playing!


