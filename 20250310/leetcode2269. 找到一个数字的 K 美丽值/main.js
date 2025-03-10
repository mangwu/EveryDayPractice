// 一个整数 num 的 k 美丽值定义为 num 中符合以下条件的 子字符串 数目：

// 子字符串长度为 k 。
// 子字符串能整除 num 。
// 给你整数 num 和 k ，请你返回 num 的 k 美丽值。

// 注意：

// 允许有 前缀 0 。
// 0 不能整除任何值。
// 一个 子字符串 是一个字符串里的连续一段字符序列。

/**
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  const strNum = num.toString();
  const n = strNum.length;
  let res = 0;
  for (let i = 0; i <= n - k; i++) {
    const curNum = parseInt(strNum.substring(i, i + k));
    if (num % curNum === 0) res++;
  }
  return res;
};
