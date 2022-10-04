import { reformatInput } from "../format";
import { NodeProps } from "../types";

const Node = ({ val, rowIndex, columnIndex, addToBoard }: NodeProps) => {
  const onKeyPress = (e: React.FormEvent<HTMLInputElement>) => {
    const inputVal = reformatInput(e.currentTarget.value);
    addToBoard(rowIndex, columnIndex, inputVal);
  };

  return (
    <div className="node">
      <input value={val === 0 ? "" : val} onChange={onKeyPress} />
    </div>
  );
};

export default Node;
