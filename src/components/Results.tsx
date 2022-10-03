const Results = ({
  isBoardValid,
  hasAttemptedSolution,
}: {
  isBoardValid: boolean;
  hasAttemptedSolution: boolean;
}) => {
  return (
    <>
      <img
        alt="a model of success: a kitten riding a unicorn in front of a rainbow"
        className="gif"
        style={{
          display: isBoardValid && hasAttemptedSolution ? "flex" : "none",
        }}
        src="https://media.giphy.com/media/2A75RyXVzzSI2bx4Gj/giphy.gif"
      />
      <img
        alt="a model of failure: a yellow parakeet shaking its head vigorously back and forth"
        className="gif"
        style={{
          display: !isBoardValid && hasAttemptedSolution ? "flex" : "none",
        }}
        src="https://media.giphy.com/media/W5YVAfSttCqre/giphy.gif"
      />
    </>
  );
};

export default Results;
