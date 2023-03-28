/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-28 08:52:02                                                  *
 * @LastModifiedDate: 2023-03-28 09:10:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

// 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

// 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
// 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  // 动态规划
  const m = text1.length;
  const n = text2.length;
  const dp = new Array(m + 1).fill("").map((v) => new Array(n + 1).fill(""));
  // text.substring(0, 0)是空字符串，所以i，j从1开始遍历
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + text1[i - 1];
      } else {
        // 选择长度大的
        if (dp[i][j - 1].length > dp[i - 1][j].length) {
          dp[i][j] = dp[i][j - 1];
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      }
    }
  }
  return dp[m][n].length;
};
