// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s 的，而不是部分字符串。

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  const reg = new RegExp(p);
  const matchStr = s.match(reg);
  console.log(matchStr);
  if (matchStr) {
    return matchStr[0] === s;
  }
  return false;
};

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  // 动态规划
  const m = s.length;
  const n = p.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(false));
  dp[0][0] = true;
  const match = (i, j) => {
    if (i === 0) return false;
    if (p[j - 1] === ".") return true;
    return s[i - 1] === p[j - 1];
  };
  for (let i = 0; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (p[j - 1] === "*") {
        dp[i][j] = dp[i][j - 2]; // 不匹配p[j-2]*
        if (match(i, j - 1)) {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      } else {
        if (match(i, j)) {
          dp[i][j] = dp[i - 1][j - 1];
        }
      }
    }
  }
  return dp[m][n];
};
