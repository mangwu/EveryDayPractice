/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-18 10:35:45                                                  *
 * @LastModifiedDate: 2022-09-18 10:40:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 字母序连续字符串 是由字母表中连续字母组成的字符串。换句话说，
// 字符串 "abcdefghijklmnopqrstuvwxyz" 的任意子字符串都是 字母序连续字符串 。

// 例如，"abc" 是一个字母序连续字符串，而 "acb" 和 "za" 不是。
// 给你一个仅由小写英文字母组成的字符串 s ，返回其 最长 的 字母序连续子字符串
// 的长度。

/**
 * @param {string} s
 * @return {number}
 */
var longestContinuousSubstring = function (s) {
  let pre = s[0].charCodeAt();
  let ans = 1;
  const n = s.length;
  let cur = 1;
  for (let i = 1; i < n; i++) {
    if (s[i].charCodeAt() === pre + 1) {
      cur++;
      ans = Math.max(ans, cur);
      pre++;
    } else {
      cur = 1;
      pre = s[i].charCodeAt();
    }
  }
  return ans;
};
