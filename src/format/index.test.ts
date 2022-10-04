import { reformatInput } from ".";

describe("reformatInput", () => {
  test("it returns 0 for an empty input", () => {
    expect(reformatInput("")).toEqual(0);
  });
  test("it returns 0 for a single letter", () => {
    expect(reformatInput("e")).toEqual(0);
  });
  test("it returns 0 for a single special character", () => {
    expect(reformatInput("?")).toEqual(0);
  });
  test("it preserves an existing number if a letter is entered after", () => {
    expect(reformatInput("1f")).toEqual(1);
  });
  test("it replaces a first number with a second number if entered after", () => {
    expect(reformatInput("37")).toEqual(7);
  });
  test("it returns the number for a regularly entered number", () => {
    expect(reformatInput("9")).toEqual(9);
  });
});
