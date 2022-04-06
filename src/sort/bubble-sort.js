/**
 * Bubble sort is the old faithful, O(n^2) implementation of sort that gosh darn it
 * its simple and it works. But its slow and way to hard on your computer.
 *
 * @param {any[]} inputArr - The array to be sorted
 * @param {function():bool} comparatorFunc - A function that applies a sort criteria to two input params
 */
function BubbleSort(inputArr, comparatorFunc) {
  for (let i = 0; i < inputArr.length; i++) {
    for (let j = i + 1; j < inputArr.length; j++) {
      if (comparatorFunc && comparatorFunc(inputArr[i], inputArr[j])) {
        [inputArr[i], inputArr[j]] = [inputArr[j], inputArr[i]];
      } else if (inputArr[i] > inputArr[j]) {
        [inputArr[i], inputArr[j]] = [inputArr[j], inputArr[i]];
      }
    }
  }
}

module.exports = BubbleSort;
