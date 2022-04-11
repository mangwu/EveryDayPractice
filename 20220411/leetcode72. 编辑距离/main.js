/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-11 21:54:48                                                  *
 * @LastModifiedDate: 2022-04-11 23:05:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你两个单词 word1 和 word2， 请返回将 word1 转换成 word2 所使用的最少操作数  。

// 你可以对一个单词进行如下三种操作：

// 插入一个字符
// 删除一个字符
// 替换一个字符

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // 在公共最长子序列和通过最少操作数（删除）得到相同字符这两道题中
  // 通过计算动态规划计算最长的子序列即可得出结果
  // 同样，这一题的操作在于，可以插入，删除，替换字符,而不单单是删除
  // 得出最长公共子序列x后，需要修改的字符个数就是其中一个的长度largerLen - x
  // 这些字符个数最终要变为另一个字符减去最长公共子序列的个数 sameLen - x;
  //
};
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const len1 = word1.length;
  const len2 = word2.length;
  if (len1 == 0 || len2 == 0) {
    return len1 + len2;
  }
  if (word1 == word2) {
    return 0;
  }
  // 状态数组
  const dp = new Array(len1 + 1)
    .fill(0)
    .map((_v) => new Array(len2 + 1).fill(0));
  // 边界状态
  for (let i = 0; i < len1 + 1; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j < len2 + 1; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i < len1 + 1; i++) {
    for (let j = 1; j < len2 + 1; j++) {
      let left = dp[i][j - 1];
      let down = dp[i - 1][j];
      let left_down = dp[i - 1][j - 1];
      // 如果当前字符相同
      if (word1[i - 1] == word2[j - 1]) {
        // 即words1的减少一个字符的情况 + 1
        // words2减少一个字符的情况 + 1
        // 二者同时减少一个字符的情况
        dp[i][j] = Math.min.apply(null, [left + 1, down + 1, left_down]);
      } else {
        dp[i][j] = Math.min.apply(null, [left, down, left_down]) + 1;
      }
    }
  }
  return dp[len1][len2];
};
