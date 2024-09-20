/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-09-19 09:07:04                                                  *
 * @LastModifiedDate: 2024-09-19 09:17:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 字母序连续字符串 是由字母表中连续字母组成的字符串。换句话说，字符串 "abcdefghijklmnopqrstuvwxyz" 的任意子字符串都是 字母序连续字符串 。

// 例如，"abc" 是一个字母序连续字符串，而 "acb" 和 "za" 不是。
// 给你一个仅由小写英文字母组成的字符串 s ，返回其 最长 的 字母序连续子字符串 的长度。

/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function (s) {
  let res = 1;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    let num = 1;
    while (i + 1 < n && s[i + 1].charCodeAt() === s[i].charCodeAt() + 1) {
      i++;
      num++;
    }
    res = Math.max(res, num);
  }
  return res;
};
