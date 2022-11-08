/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-08 08:53:18                                                  *
 * @LastModifiedDate: 2022-11-08 08:56:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由不同字符组成的字符串 allowed 和一个字符串数组 words 。
// 如果一个字符串的每一个字符都在 allowed 中，就称这个字符串是 一致字符串 。

// 请你返回 words 数组中 一致字符串 的数目。

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  const set = new Set(allowed.split(""));
  let ans = 0;
  outer: for (const word of words) {
    for (const ch of word) {
      if (!set.has(ch)) {
        continue outer;
      }
    }
    ans++;
  }
  return ans;
};
