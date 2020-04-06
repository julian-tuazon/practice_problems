// Which Number Is Not like the Others ?
//   Create a function that takes an array of numbers and return the number that's unique.

// Examples
// unique([3, 3, 3, 7, 3, 3]) ➞ 7

// unique([0, 0, 0.77, 0, 0]) ➞ 0.77

// unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0
// Notes
// Test cases will always have exactly one unique number while all others are the same.

function unique(arr) {
  arr.sort();
  if (arr[0] !== arr[1]) return arr[0];
  return arr[arr.length - 1];
}
