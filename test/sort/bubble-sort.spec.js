const expect = require("chai").expect;
const BubbleSort = require("../../src/sort/bubble-sort");

describe("BubbleSort()", () => {
  it("should sort the array of numbers in ascending order", () => {
    const testArray = [36, 37, 18, 11, 3, 23, 25, 14, 21];
    const expectedResult = [3, 11, 14, 18, 21, 23, 25, 36, 37];
    BubbleSort(testArray);
    expect(testArray).to.be.eql(expectedResult);
  });

  it("should sort the array of objects according to the comparator function", () => {
    const testArray = [
      { age: 10 },
      { age: 12 },
      { age: 15 },
      { age: 2 },
      { age: 29 },
      { age: 10 },
    ];
    const expectedResult = [
      { age: 29 },
      { age: 15 },
      { age: 12 },
      { age: 10 },
      { age: 10 },
      { age: 2 },
    ];
    BubbleSort(testArray, (a, b) => b.age > a.age);
    expect(testArray).to.be.eql(expectedResult);
  });
});
