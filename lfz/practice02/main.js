function arrayReverse(arr) {
  var answer = [];
  for (var i = arr.length-1; i >= 0; i--) {
      answer.push(arr[i]);
  }
  return answer;
}
var testArr = ["Twice", "Gfriend", "fromis_9", "IZ*ONE"]
console.log(testArr, arrayReverse(testArr));
