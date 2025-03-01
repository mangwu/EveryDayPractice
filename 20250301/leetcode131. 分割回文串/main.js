// 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const n = s.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(true));
  // dp[i][j]是为回文串：1. i >= j （空串或者单字符）2. i<j, s[i] === s[j], dp[i+1][j-1]为true
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
    }
  }
  // dfs
  const path = [];
  const res = [];
  const dfs = (i) => {
    if (i === n) {
      res.push(path.slice());
      return;
    }
    // 遍历从i开始的子字符串
    for (let j = i; j < n; j++) {
      if (dp[i][j]) {
        path.push(s.substring(i, j + 1));
        dfs(j + 1);
        path.pop();
      }
    }
  };
  dfs(0);
  return res;
};
