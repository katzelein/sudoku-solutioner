import { SudokuBoard } from "../types";

export const allRowsValid = (board: SudokuBoard): boolean => {
  return board.every((row) => {
    const existing = new Set(row);
    return !existing.has(0) && existing.size === 9;
  });
};

export const allColumnsValid = (board: SudokuBoard): boolean => {
  let isValid = true;
  for (let rowIdx = 0; rowIdx < 9; rowIdx++) {
    let existing = new Set();
    for (let colIdx = 0; colIdx < 9; colIdx++) {
      existing.add(board[colIdx][rowIdx]);
    }
    if (existing.has(0) || existing.size < 9) {
      isValid = false;
      break;
    }
  }
  return isValid;
};

export const allSquaresValid = (board: SudokuBoard): boolean => {
  let isValid = true;
  SquareLoop: for (let rowIdx = 1; rowIdx < 9; rowIdx += 3) {
    for (let colIdx = 1; colIdx < 9; colIdx += 3) {
      const square = [
        [rowIdx, colIdx],
        [rowIdx, colIdx - 1],
        [rowIdx, colIdx + 1],
        [rowIdx + 1, colIdx],
        [rowIdx + 1, colIdx - 1],
        [rowIdx + 1, colIdx + 1],
        [rowIdx - 1, colIdx],
        [rowIdx - 1, colIdx - 1],
        [rowIdx - 1, colIdx + 1],
      ];
      let existing = new Set(square.map(([k, l]) => board[k][l]));
      if (existing.has(0) || existing.size < 9) {
        isValid = false;
        break SquareLoop;
      }
    }
  }
  return isValid;
};

export const isValidBoard = (board: SudokuBoard): boolean => {
  return (
    allRowsValid(board) && allColumnsValid(board) && allSquaresValid(board)
  );
};
