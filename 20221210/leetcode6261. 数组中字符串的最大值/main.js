/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-10 22:30:28                                                  *
 * @LastModifiedDate: 2022-12-10 22:33:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一个由字母和数字组成的字符串的 值 定义如下：

// 如果字符串 只 包含数字，那么值为该字符串在 10 进制下的所表示的数字。
// 否则，值为字符串的 长度 。
// 给你一个字符串数组 strs ，每个字符串都只由字母和数字组成，请你返回 strs 中字符串的 最大值 。

/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  let ans = 0;
  for (const str of strs) {
    ans = Math.max(ans, hasOther(str));
  }
  return ans;
};
const start = "0".charCodeAt();
const end = "9".charCodeAt();
var hasOther = function (str) {
  for (const ch of str) {
    if (ch.charCodeAt() < start || ch.charCodeAt() > end) {
      return str.length;
    }
  }
  return parseInt(str);
};
