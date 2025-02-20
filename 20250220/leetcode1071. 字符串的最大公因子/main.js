// 对于字符串 s 和 t，只有在 s = t + t + t + ... + t + t（t 自身连接 1 次或多次）时，我们才认定 “t 能除尽 s”。

// 给定两个字符串 str1 和 str2 。返回 最长字符串 x，要求满足 x 能除尽 str1 且 x 能除尽 str2 。

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  const m = str1.length;
  const n = str2.length;
  let i = 0;
  while ((i < m || i < n) && str1[i] === str2[i]) {
    i++;
    continue;
  }
  for (let j = i; j > 0; j--) {
    if (m % j === 0 && n % j === 0) {
      const str = str1.substring(0, j);
      if (str.repeat(m / j) === str1 && str.repeat(n / j) === str2) return str;
    }
  }
  return "";
};
