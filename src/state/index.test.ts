import { allColumnsValid, allRowsValid, allSquaresValid } from ".";

describe("allRowsValid", () => {
  test("it returns false for an empty board", () => {
    const board = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    expect(allRowsValid(board)).toEqual(false);
  });
  test("it returns false for a board with any 0 values in it", () => {
    const board = [
      [1, 5, 2, 8, 7, 3, 6, 9, 4], // 0 at 2,2 and 6,6
      [1, 5, 2, 8, 7, 3, 6, 9, 4],
      [1, 5, 0, 8, 7, 3, 6, 9, 4],
      [1, 5, 2, 8, 7, 3, 6, 9, 4],
      [1, 5, 2, 8, 7, 3, 6, 9, 4],
      [1, 5, 2, 8, 7, 3, 6, 9, 4],
      [1, 5, 2, 8, 7, 3, 0, 9, 4],
      [1, 5, 2, 8, 7, 3, 6, 9, 4],
      [1, 5, 2, 8, 7, 3, 6, 9, 4],
    ];
    expect(allRowsValid(board)).toEqual(false);
  });
  test("it returns false for any row with repeated values", () => {
    const board = [
      [1, 5, 2, 8, 7, 3, 6, 9, 4], // repeat at 1,4 and 3,8
      [1, 5, 2, 8, 2, 3, 6, 9, 4],
      [1, 5, 2, 8, 7, 3, 6, 9, 4],
      [1, 5, 2, 8, 7, 3, 6, 9, 9],
      [1, 5, 2, 8, 7, 3, 6, 9, 4],
      [1, 5, 2, 8, 7, 3, 6, 9, 4],
      [1, 5, 2, 8, 7, 3, 6, 9, 4],
      [1, 5, 2, 8, 7, 3, 6, 9, 4],
      [1, 5, 2, 8, 7, 3, 6, 9, 4],
    ];
    expect(allRowsValid(board)).toEqual(false);
  });
  test("it returns true for rows which have all values 1-9 with no repetitions", () => {
    const board = [
      [1, 5, 2, 8, 7, 3, 6, 9, 4],
      [1, 5, 2, 8, 7, 3, 6, 9, 4],
      [1, 5, 2, 8, 7, 3, 6, 9, 4],
      [1, 5, 2, 8, 7, 3, 6, 9, 4],
      [1, 5, 2, 8, 7, 3, 6, 9, 4],
      [1, 5, 2, 8, 7, 3, 6, 9, 4],
      [1, 5, 2, 8, 7, 3, 6, 9, 4],
      [1, 5, 2, 8, 7, 3, 6, 9, 4],
      [1, 5, 2, 8, 7, 3, 6, 9, 4],
    ];
    expect(allRowsValid(board)).toEqual(true);
  });
});

describe("allColumnsValid", () => {
  test("it returns false for an empty board", () => {
    const board = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    expect(allColumnsValid(board)).toEqual(false);
  });
  test("it returns false for a board with any 0 values in it", () => {
    const board = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1], // 0 at 2,2 and 6,5
      [5, 5, 5, 5, 5, 5, 5, 5, 5],
      [2, 2, 0, 2, 2, 2, 2, 2, 2],
      [8, 8, 8, 8, 8, 8, 8, 8, 8],
      [7, 7, 7, 7, 7, 7, 7, 7, 7],
      [3, 3, 3, 3, 3, 3, 3, 3, 3],
      [6, 6, 6, 6, 6, 0, 6, 6, 6],
      [9, 9, 9, 9, 9, 9, 9, 9, 9],
      [4, 4, 4, 4, 4, 4, 4, 4, 4],
    ];
    expect(allColumnsValid(board)).toEqual(false);
  });
  test("it returns false for any column with repeated values", () => {
    const board = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1], // repeat at 1,1 and 3,3
      [5, 1, 5, 5, 5, 5, 5, 5, 5],
      [2, 2, 2, 2, 2, 2, 2, 2, 2],
      [8, 8, 8, 8, 2, 8, 8, 8, 8],
      [7, 7, 7, 7, 7, 7, 7, 7, 7],
      [3, 3, 3, 3, 3, 3, 3, 3, 3],
      [6, 6, 6, 6, 6, 6, 6, 6, 6],
      [9, 9, 9, 9, 9, 9, 9, 9, 9],
      [4, 4, 4, 4, 4, 4, 4, 4, 4],
    ];
    expect(allColumnsValid(board)).toEqual(false);
  });
  test("it returns true for columns which have all values 1-9 with no repetitions", () => {
    const board = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1],
      [5, 5, 5, 5, 5, 5, 5, 5, 5],
      [2, 2, 2, 2, 2, 2, 2, 2, 2],
      [8, 8, 8, 8, 8, 8, 8, 8, 8],
      [7, 7, 7, 7, 7, 7, 7, 7, 7],
      [3, 3, 3, 3, 3, 3, 3, 3, 3],
      [6, 6, 6, 6, 6, 6, 6, 6, 6],
      [9, 9, 9, 9, 9, 9, 9, 9, 9],
      [4, 4, 4, 4, 4, 4, 4, 4, 4],
    ];
    expect(allColumnsValid(board)).toEqual(true);
  });
});

describe("allSquaresValid", () => {
  test("it returns false for an empty board", () => {
    const board = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];
    expect(allSquaresValid(board)).toEqual(false);
  });
  test("it returns false for a board with any 0 values in it", () => {
    const board = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9], // 0 at 1,1 and 2,5
      [4, 0, 6, 7, 8, 9, 1, 2, 3],
      [7, 8, 9, 1, 2, 0, 4, 5, 6],
      [2, 3, 4, 5, 6, 7, 8, 9, 1],
      [5, 6, 7, 8, 9, 1, 2, 3, 4],
      [8, 9, 1, 2, 3, 4, 5, 6, 7],
      [3, 4, 5, 6, 7, 8, 9, 1, 2],
      [6, 7, 8, 9, 1, 2, 3, 4, 5],
      [9, 1, 2, 3, 4, 5, 6, 7, 8],
    ];
    expect(allSquaresValid(board)).toEqual(false);
  });
  test("it returns false for any square with repeated values", () => {
    const board = [
      [1, 2, 3, 4, 4, 6, 7, 8, 9], // repeat at 0,4 and 1,8
      [4, 5, 6, 7, 8, 9, 1, 2, 9],
      [7, 8, 9, 1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7, 8, 9, 1],
      [5, 6, 7, 8, 9, 1, 2, 3, 4],
      [8, 9, 1, 2, 3, 4, 5, 6, 7],
      [3, 4, 5, 6, 7, 8, 9, 1, 2],
      [6, 7, 8, 9, 1, 2, 3, 4, 5],
      [9, 1, 2, 3, 4, 5, 6, 7, 8],
    ];
    expect(allSquaresValid(board)).toEqual(false);
  });
  test("it returns true for squares which have all values 1-9 with no repetitions", () => {
    const board = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [4, 5, 6, 7, 8, 9, 1, 2, 3],
      [7, 8, 9, 1, 2, 3, 4, 5, 6],
      [2, 3, 4, 5, 6, 7, 8, 9, 1],
      [5, 6, 7, 8, 9, 1, 2, 3, 4],
      [8, 9, 1, 2, 3, 4, 5, 6, 7],
      [3, 4, 5, 6, 7, 8, 9, 1, 2],
      [6, 7, 8, 9, 1, 2, 3, 4, 5],
      [9, 1, 2, 3, 4, 5, 6, 7, 8],
    ];
    expect(allSquaresValid(board)).toEqual(true);
  });
});
