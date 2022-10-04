import { SudokuBoard } from "../types";
import Node from "./Node";

const GameBoard = ({
  board,
  addToBoard,
}: {
  board: SudokuBoard;
  addToBoard: (rowIndex: number, columnIndex: number, value: number) => void;
}) => {
  return (
    <div id="board">
      {board.map((row: any, rowIndex: number) => (
        <div key={rowIndex} className="row">
          {row.map((val: number, columnIndex: number) => (
            <Node
              key={columnIndex}
              val={val}
              rowIndex={rowIndex}
              columnIndex={columnIndex}
              addToBoard={addToBoard}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
