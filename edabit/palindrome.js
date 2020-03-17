// Palindrome ?
//   A palindrome is a word that is identical forward and backwards.

//     mom
// racecar
// kayak
// Given a word, create a function that checks whether it is a palindrome.

//   Examples
// checkPalindrome("mom") ➞ true

// checkPalindrome("scary") ➞ false

// checkPalindrome("reviver") ➞ true

// checkPalindrome("stressed") ➞ false
// Notes
// All test input is lower cased.
function checkPalindrome(str) {
  return str.slice(0, str.length / 2) === str.split('').reverse().join('').slice(0, str.length / 2);
}
