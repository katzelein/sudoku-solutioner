import { adjustInput } from "../validation";

const Node = ({
  val,
  rowIndex,
  columnIndex,
  addToBoard,
}: {
  val: number;
  rowIndex: number;
  columnIndex: number;
  addToBoard: (rowIndex: number, columnIndex: number, value: number) => void;
}) => {
  const onKeyPress = (e: React.FormEvent<HTMLInputElement>) => {
    const inputVal = adjustInput(e.currentTarget.value);
    addToBoard(rowIndex, columnIndex, inputVal);
  };

  return (
    <div className="node">
      <input value={val === 0 ? "" : val} onChange={onKeyPress} />
    </div>
  );
};

export default Node;
