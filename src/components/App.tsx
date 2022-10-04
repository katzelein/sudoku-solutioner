import React from "react";
import "./App.css";
import { isValidBoard } from "../state";
import Results from "./Results";
import Buttons from "./Buttons";
import GameBoard from "./GameBoard";
import { SudokuBoard } from "../types";

const emptyBoard: SudokuBoard = new Array(9).fill(new Array(9).fill(0));

const App = () => {
  const [board, setBoard] = React.useState(emptyBoard);
  const [isBoardValid, setIsBoardValid] = React.useState(false);
  const [hasAttemptedSolution, setHasAttemptedSolution] = React.useState(false);

  const addToBoard = (rowIndex: number, colIndex: number, value: number) => {
    setBoard((previousBoard) => {
      let rowToUpdate = previousBoard[rowIndex];
      rowToUpdate = [
        ...rowToUpdate.slice(0, colIndex),
        value,
        ...rowToUpdate.slice(colIndex + 1),
      ];
      return [
        ...previousBoard.slice(0, rowIndex),
        rowToUpdate,
        ...previousBoard.slice(rowIndex + 1),
      ];
    });
  };

  const checkBoard = () => {
    if (isValidBoard(board)) {
      setIsBoardValid(true);
    } else {
      setIsBoardValid(false);
    }
    setHasAttemptedSolution(true);
  };

  const clearBoard = () => {
    setBoard(emptyBoard);
    setIsBoardValid(false);
    setHasAttemptedSolution(false);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Sudoku Solutioner</h1>
      </header>

      <section id="board-outline">
        <GameBoard board={board} addToBoard={addToBoard} />
        <Buttons
          hasAttemptedSolution={hasAttemptedSolution}
          checkBoard={checkBoard}
          clearBoard={clearBoard}
        />
      </section>
      <Results
        isBoardValid={isBoardValid}
        hasAttemptedSolution={hasAttemptedSolution}
      />
    </div>
  );
};

export default App;
