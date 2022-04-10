/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-11 00:04:08                                                  *
 * @LastModifiedDate: 2022-04-11 00:32:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个单词 word1 和 word2 ，返回使得 word1 和  word2 相同所需的最小步数。

// 每步 可以删除任意一个字符串中的一个字符。

var minDistance = function (word1, word2) {
  // 实际上这一题和最长公共子序列是一样的题目
  // 因为每一次操作都是删除其中的任意一个字符
  // 那么最终的结果就是二者都被删除成为最长公共子序列（可以为空字符串）
  // 所以求出最长公共子序列的长度，用二者的长度相减即是最小步数
  const len1 = word1.length;
  const len2 = word2.length;
  const dp = new Array(len1 + 1)
    .fill(0)
    .map((_v) => new Array(len2 + 1).fill(0));
  for (let i = 1; i <= len1; i++) {
    const ch1 = word1[i - 1];
    for (let j = 1; j <= len2; j++) {
      const ch2 = word2[j - 1];
      if (ch1 == ch2) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return len1 + len2 - dp[len1][len2] * 2;
};
