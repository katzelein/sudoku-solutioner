export type SudokuBoard = number[][];

export type GameBoardProps = {
  board: SudokuBoard;
  addToBoard: AddToBoardFnType;
};

export type NodeProps = {
  val: number;
  rowIndex: number;
  columnIndex: number;
  addToBoard: AddToBoardFnType;
};

type AddToBoardFnType = (
  rowIndex: number,
  columnIndex: number,
  value: number
) => void;

export type ButtonsProps = {
  hasAttemptedSolution: boolean;
  checkBoard: () => void;
  clearBoard: () => void;
};

export type ResultsProps = {
  isBoardValid: boolean;
  hasAttemptedSolution: boolean;
};
