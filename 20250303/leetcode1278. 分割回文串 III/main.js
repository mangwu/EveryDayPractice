/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-03-03 09:07:36                                                  *
 * @LastModifiedDate: 2025-03-03 14:44:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由小写字母组成的字符串 s，和一个整数 k。

// 请你按下面的要求分割字符串：

// 首先，你可以将 s 中的部分字符修改为其他的小写英文字母。
// 接着，你需要把 s 分割成 k 个非空且不相交的子串，并且每个子串都是回文串。
// 请返回以这种方式分割字符串所需修改的最少字符数。

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var palindromePartition = function (s, k) {
  // 二分查找
  const n = s.length;
  if (n === k) return 0;
  // dp计算dp[i][j]字符需要改变多少字符串才能使得s[i]...s[j]为回文串
  const dp = new Array(n).fill(0).map((v) => new Array(n).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      if (i >= j) continue;
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1];
      } else {
        dp[i][j] = dp[i + 1][j - 1] + 1;
      }
    }
  }
  const half = Math.floor(n / 2);
  // 检查能否分割为回文串
  const cache = new Array(n)
    .fill(0)
    .map(() =>
      new Array(k + 1).fill(0).map((v) => new Array(half + 1).fill(-1))
    );
  const dfs = (i, leftK, leftNum) => {
    if (i === n) return leftK === 0 && leftNum >= 0;
    if (leftK < 0 || leftNum < 0) return false;
    if (cache[i][leftK][leftNum] !== -1) return cache[i][leftK][leftNum];
    let res = false;
    for (let j = i; j < n; j++) {
      res = res || dfs(j + 1, leftK - 1, leftNum - dp[i][j]);
    }
    cache[i][leftK][leftNum] = res;
    return res;
  };
  let left = 0;
  let right = half;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (dfs(0, k, mid)) {
      right = mid - 1;
    } else left = mid + 1;
  }
  return left;
};
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var palindromePartition = function (s, k) {
  // 二分查找
  const n = s.length;
  if (n === k) return 0;
  // dp计算dp[i][j]字符需要改变多少字符串才能使得s[i]...s[j]为回文串
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < n; j++) {
      if (i >= j) continue;
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1];
      } else {
        dp[i][j] = dp[i + 1][j - 1] + 1;
      }
    }
  }
  // 两次动态规划
  const f = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(n));
  // f[i][j]对于字符串s的前i个字符，将其分割成j个回文子字符串需要的最少修改字符数
  f[0][0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      if (j > i) break;
      if (j === 1) {
        // 一个子字符串
        f[i][j] = dp[0][i - 1];
      } else {
        for (let k = j - 1; k < i; k++) {
          // f[k][j - 1] 前k个字符，k至少要是j - 1才能被分成j - 1个子字符串
          f[i][j] = Math.min(f[i][j], f[k][j - 1] + dp[k][i - 1]);
        }
      }
    }
  }
  return f[n][k];
};
