export const adjustInput = (inputVal: string) => {
  let newVal: number;
  if (!Number(inputVal)) {
    if (inputVal.length > 1) {
      newVal = Number(inputVal.slice(0, 1));
    } else {
      newVal = 0;
    }
  } else if (inputVal.length === 0) {
    newVal = 0;
  } else if (inputVal.length > 1) {
    newVal = Number(inputVal.slice(-1));
  } else {
    newVal = Number(inputVal);
  }
  return newVal;
};

export const checkValidRows = (board: number[][]): boolean => {
  let isValid = true;
  RowLoop: for (let i = 0; i < 9; i++) {
    let existing = new Set();
    for (let j = 0; j < 9; j++) {
      const value = board[i][j];
      if (value === 0 || existing.has(value)) {
        isValid = false;
        break RowLoop;
      }
      existing.add(value);
    }
  }
  return isValid;
};

export const checkValidColumns = (board: number[][]): boolean => {
  let isValid = true;
  ColumnLoop: for (let i = 0; i < 9; i++) {
    let existing = new Set();
    for (let j = 0; j < 9; j++) {
      const value = board[j][i];
      if (value === 0 || existing.has(value)) {
        isValid = false;
        break ColumnLoop;
      }
      existing.add(value);
    }
  }
  return isValid;
};

export const checkValidSquares = (board: number[][]): boolean => {
  let isValid = true;
  const centerNodes = [
    [1, 1],
    [1, 4],
    [1, 7],
    [4, 1],
    [4, 4],
    [4, 7],
    [7, 1],
    [7, 4],
    [7, 7],
  ];
  SquareLoop: for (let centerNode of centerNodes) {
    let existing = new Set();
    const [i, j] = centerNode;
    const square = [
      [i, j],
      [i, j - 1],
      [i, j + 1],
      [i + 1, j],
      [i + 1, j - 1],
      [i + 1, j + 1],
      [i - 1, j],
      [i - 1, j - 1],
      [i - 1, j + 1],
    ];
    for (let node of square) {
      const [row, col] = node;
      if (board[row][col] === 0 || existing.has(board[row][col])) {
        isValid = false;
        break SquareLoop;
      }
      existing.add(board[row][col]);
    }
  }
  return isValid;
};

export const checkIfValid = (board: number[][]): boolean => {
  return (
    checkValidRows(board) &&
    checkValidColumns(board) &&
    checkValidSquares(board)
  );
};
