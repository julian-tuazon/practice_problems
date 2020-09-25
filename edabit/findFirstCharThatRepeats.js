// Find First Character That Repeats
// Create a function that takes a string and returns the first character that repeats.If there is no repeat of a character, return "-1".

//   Examples
// firstRepeat("legolas") ➞ "l"

// firstRepeat("Gandalf") ➞ "a"

// firstRepeat("Balrog") ➞ "-1"

// firstRepeat("Isildur") ➞ "-1"
// // Case sensitive "I" not equal to "i"
// Notes
// Tests are case sensitive.

function firstRepeat(chars) {
  const cache = {};
  for (const char of chars) {
    if (!cache[char]) cache[char] = true;
    else return char;
  }
  return '-1';
}
