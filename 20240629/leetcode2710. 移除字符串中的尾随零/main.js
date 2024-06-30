// 给你一个用字符串表示的正整数 num ，请你以字符串形式返回不含尾随零的整数 num 。

/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  const n = num.length;
  for (let i = n - 1; i >= 0; i--) {
    if (num[i] !== "0") return num.substring(0, i + 1);
  }
  return "";
};
