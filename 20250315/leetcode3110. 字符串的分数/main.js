// 给你一个字符串 s 。一个字符串的 分数 定义为相邻字符 ASCII 码差值绝对值的和。

// 请你返回 s 的 分数 。

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  const n = s.length;
  let res = 0;
  for (let i = 1; i < n; i++) {
    res += Math.abs(s[i].charCodeAt() - s[i - 1].charCodeAt());
  }
  return res;
};
