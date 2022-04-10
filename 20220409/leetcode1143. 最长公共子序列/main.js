/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-09 23:00:17                                                  *
 * @LastModifiedDate: 2022-04-11 00:02:21                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。
// 如果不存在 公共子序列 ，返回 0 。

// 一个字符串的 子序列 是指这样一个新的字符串：
// 它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

// 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
// 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const len1 = text1.length;
  const len2 = text2.length;
  // 二维动态规划动态规划
  const dp = new Array(len1 + 1)
    .fill(0)
    .map((_v) => new Array(len2 + 1).fill(0));
  // dp[i][j]表示text1.substring(0,i)和text2.substring(0,j)的最长公共子序列长度
  // 边界情况, i或者j为0，时，有一个字符为空字符串，公共子序列必为空字符串，长度为0
  // 然后考虑状态转义方程
  // i > 0 且 j > 0
  // 1. 如果text1[i] == text2[j],那么i，j分别所在的两个字符就是一个公共字符
  //    考虑到text1[0:i-1]和text2[0:j-1]的最长公共子序列，再增加一个公共字符，得到
  //    dp[i][j] = dp[i-1][j-1] + 1
  // 2. 当text1[i] !== text2[j]，考虑到以下两项
  //    ①text1.substring(0,i)和text2.substring(0,j-1)的公共子序列的最大长度
  //    ②text2.substring(0, i - 1)和text2.substring(0,j)的公共子序列的最大长度
  //    当前的dp[i][j]应该取上面两个的大者,所以dp[i][j] = max(dp[i][j-1],dp[i-1][j])
  for (let i = 1; i <= len1; i++) {
    const ch1 = text1[i - 1];
    for (let j = 1; j <= len2; j++) {
      if (ch1 == text2[j - 1]) {
        // 相等
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  return dp[len1][len2];
};
