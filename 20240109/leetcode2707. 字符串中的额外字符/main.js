/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-09 09:14:33                                                  *
 * @LastModifiedDate: 2024-01-09 10:50:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的字符串 s 和一个单词字典 dictionary 。你需要将 s 分割成若干个 互不重叠 的子字符串，每个子字符串都在 dictionary 中出现过。s 中可能会有一些 额外的字符 不在任何子字符串中。

// 请你采取最优策略分割 s ，使剩下的字符 最少 。

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
  // s中的子字符串可以重复匹配
  const set = new Set(dictionary);
  const n = s.length;
  const dp = new Array(n).fill(Infinity);
  const dfs = (start) => {
    if (start === n) return 0;
    if (dp[start] !== Infinity) return dp[start];
    let cur = "";
    for (let i = start; i < n; i++) {
      cur += s[i];
      if (set.has(cur)) {
        // 选取当前字符串
        dp[start] = Math.min(dp[start], dfs(i + 1));
      }
      // 不选取当前字符串
      dp[start] = Math.min(dp[start], i - start + dfs(i + 1) + 1);
    }
    return dp[start];
  };
  dfs(0);
  return dp[0];
};

/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
  // 动态规划
  const set = new Set(dictionary);
  const n = s.length;
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    let cur = "";
    for (let j = i - 1; j >= 0; j--) {
      cur = s[j] + cur;
      if (set.has(cur)) {
        dp[i] = Math.min(dp[i], dp[j]);
      }
      dp[i] = Math.min(dp[i], dp[j] + i - j);
    }
  }
  return dp[n];
};
