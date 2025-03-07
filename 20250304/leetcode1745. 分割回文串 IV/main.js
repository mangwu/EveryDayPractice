// 给你一个字符串 s ，如果可以将它分割成三个 非空 回文子字符串，那么返回 true ，否则返回 false 。

// 当一个字符串正着读和反着读是一模一样的，就称其为 回文字符串 。

/**
 * @param {string} s
 * @return {boolean}
 */
var checkPartitioning = function (s) {
  const n = s.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(true));
  // dp[i][j] 表示s[i]-s[j]是否是回文字符串
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      if (i >= j) continue;
      if (s[i] !== s[j]) dp[i][j] = false;
      else dp[i][j] = dp[i + 1][j - 1];
    }
  }
  const cache = new Array(n).fill(false).map(() => new Array(4).fill(-1));
  const dfs = (i, left) => {
    if (i === n) return left === 0;
    if (left <= 0) return false;
    if (cache[i][left] !== -1) return cache[i][left];
    let res = false;
    for (let j = i; j < n; j++) {
      if (dp[i][j]) {
        res = res || dfs(j + 1, left - 1);
      }
    }
    cache[i][left] = res;
    return res;
  };
  return dfs(0, 3);
};
console.log(checkPartitioning("aabbaab"));
