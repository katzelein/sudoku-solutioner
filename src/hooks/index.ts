import { SudokuBoard } from "../types";

export const updateBoard = (
  prevState: SudokuBoard,
  rowIndex: number,
  colIndex: number,
  value: number
) => {
  let rowToUpdate = prevState[rowIndex];
  rowToUpdate = [
    ...rowToUpdate.slice(0, colIndex),
    value,
    ...rowToUpdate.slice(colIndex + 1),
  ];
  return [
    ...prevState.slice(0, rowIndex),
    rowToUpdate,
    ...prevState.slice(rowIndex + 1),
  ];
};
