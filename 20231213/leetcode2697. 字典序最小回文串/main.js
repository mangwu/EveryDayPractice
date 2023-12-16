/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
  const n = s.length;
  const arr = s.split("");
  for (let i = 0; i < n / 2; i++) {
    let right = n - i - 1;
    if (arr[i] < arr[right]) {
      arr[right] = arr[i];
    } else {
      arr[i] = arr[right];
    }
  }
  return arr.join("");
};
