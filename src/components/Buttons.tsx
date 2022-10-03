const Buttons = ({
  hasAttemptedSolution,
  checkBoard,
  clearBoard,
}: {
  hasAttemptedSolution: boolean;
  checkBoard: () => void;
  clearBoard: () => void;
}) => {
  return (
    <div className="btn-actions">
      <button
        disabled={hasAttemptedSolution}
        aria-label="Check solution"
        className="button"
        onClick={checkBoard}
      >
        Check Solution
      </button>
      <button className="button" aria-label="Reset board" onClick={clearBoard}>
        Reset Board
      </button>
    </div>
  );
};

export default Buttons;
