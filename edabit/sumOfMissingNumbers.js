// Sum of Missing Numbers
// Create a function that returns the sum of missing numbers.

//   Examples
// sumMissingNumbers([1, 3, 5, 7, 10]) ➞ 29
// // 2 + 4 + 6 + 8 + 9

// sumMissingNumbers([10, 7, 5, 3, 1]) ➞ 29

// sumMissingNumbers([10, 20, 30, 40, 50, 60]) ➞ 1575
// Notes
// The minimum and maximum value of the given array are the inclusive bounds of the numeric range to consider when searching for missing numbers.

function sumMissingNumbers(arr) {
  arr = arr.sort((a, b) => a - b);
  const sumPresentNums = arr.reduce((acc, cur) => acc + cur, 0);
  const max = Math.max(arr[0], arr[arr.length - 1]);
  const min = Math.min(arr[0], arr[arr.length - 1]);
  let sumMissingNums = 0;
  for (let i = min; i <= max; i++) {
    sumMissingNums += i;
  }
  return sumMissingNums - sumPresentNums;
}
