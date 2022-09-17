/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-17 15:41:29                                                  *
 * @LastModifiedDate: 2022-09-17 15:44:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s，请你返回 两个相同字符之间的最长子字符串的长度 ，
// 计算长度时不含这两个字符。如果不存在这样的子字符串，返回 -1 。

// 子字符串 是字符串中的一个连续字符序列。

/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
  const hash = new Map();
  const n = s.length;
  let ans = -1;
  for (let i = 0; i < n; i++) {
    if (hash.has(s[i])) {
      ans = Math.max(ans, i - hash.get(s[i]) - 1);
    } else {
      hash.set(s[i], i);
    }
  }
  return ans;
};
