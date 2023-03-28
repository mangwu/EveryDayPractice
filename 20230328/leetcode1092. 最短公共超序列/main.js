/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-28 08:36:26                                                  *
 * @LastModifiedDate: 2023-03-28 09:32:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给出两个字符串 str1 和 str2，返回同时以 str1 和 str2 作为子序列的最短字符串。
// 如果答案不止一个，则可以返回满足条件的任意一个答案。

// （如果从字符串 T 中删除一些字符（也可能不删除，并且选出的这些字符可以位于 T 中的 任意位置），
// 可以得到字符串 S，那么 S 就是 T 的子序列）

const {
  longestCommonSubsequence,
} = require("../../publicFunc/subsequence/subsequence");

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var shortestCommonSupersequence = function (str1, str2) {
  // 计算出最长公共子序列
  const m = str1.length;
  const n = str2.length;
  const commonSubsequence = longestCommonSubsequence(str1, str2);
  if (commonSubsequence === "") return str1 + str2;
  const strs = commonSubsequence
    .split("")
    .reduce((pre, cur) => pre.concat(cur, ""), [""]);
  const len = strs.length;
  let start1 = 0;
  let start2 = 0;
  for (let i = 1; i < len; i += 2) {
    // 找到第一个与strs[i]相等的字符
    while (start1 < m && str1[start1] !== strs[i]) {
      strs[i - 1] += str1[start1];
      start1++;
    }
    start1++;
    while (start2 < n && str2[start2] !== strs[i]) {
      strs[i - 1] += str2[start2];
      start2++;
    }
    start2++;
  }
  if (start1 !== m) strs[len - 1] += str1.substring(start1, m);
  if (start2 !== n) strs[len - 1] += str2.substring(start2, n);
  return strs.join("");
};

// abac  => ab  => abac
// cab   => ab  => cabac

// abbcda  => bbcd => abbcda
// bbcaad  => bbcd => abbcaada
