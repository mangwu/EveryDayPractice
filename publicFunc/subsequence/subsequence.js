/*
 * @Author: mangwu                                                             *
 * @File: subsequence.js                                                       *
 * @Date: 2023-03-28 09:13:32                                                  *
 * @LastModifiedDate: 2023-03-28 09:20:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 子序列
const subsequence = {
  /**
   * @description 返回字符串s1和字符串s2的最长公共子序列，时间复杂度为O(s1.length * s2.length)
   * @param {string} s1 字符串1
   * @param {string} s2 字符串2
   * @returns {string}
   */
  longestCommonSubsequence(s1, s2) {
    const m = s1.length;
    const n = s2.length;
    const dp = new Array(m + 1).fill("").map(() => new Array(n + 1).fill(""));
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (s1[i - 1] === s2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + s1[i - 1];
        } else {
          if (dp[i - 1][j].length > dp[i][j - 1].length) {
            dp[i][j] = dp[i - 1][j];
          } else {
            dp[i][j] = dp[i][j - 1];
          }
        }
      }
    }
    return dp[m][n];
  },
};

module.exports = subsequence;
