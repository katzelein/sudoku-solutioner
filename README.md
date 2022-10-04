# Sudoku Solutioner
## By Kat Guthrie

Welcome to Sudoku Solutioner, a simple app that checks if your solution to everyone's favorite 9x9 logic puzzle is a winner! (or not)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Everything inside the `components`, `format`, `hooks`, `state`, and `types` folders were created by me. Everything outside of that remains mostly intact from the original create-react-app build.

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
- Click to validate: I would have ultimately liked to validate the solution every single time a value was entered into an input field instead of needing the user to click a button. This is easily done using a `useEffect` hook that acts almost exactly like the `checkBoard` function. In order to do this in a way which communicate the difference between a wrong board vs. an incomplete board, I would have needed to do more work within the `state` functions to return string values such as `correct`, `incorrect`, and `incomplete`, which would be more user friendly but would take more time spent on refactoring and new design.

- Reducer: manipulating the game board is essentially a reducing function, so I could move the functionality into a reducer and refer to it in child components directly

- Design: it isn't the most stunning, but I'm erring on the side of clean and demure until gifs.

- So much typing: I would add a textarea where a pre-formatted double array could be easily typed and validated instead of needing to enter values into every single input field

- Testing: I tend to avoid most component tests since they are easily changed, but I have kept one basic one here just to prove the header exists. I spent most of my time writing tests for the `state` and `format` functions, since they were the most important for the game rules. If it was very important to those arbiting my performance, I could write more tests confirming we had a 9x9 game board, that the gifs were visible at appropriate times, etc.

## Thanks for playing!


