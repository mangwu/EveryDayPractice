/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-23 23:14:21                                                  *
 * @LastModifiedDate: 2023-06-23 23:22:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


// 一个由字母和数字组成的字符串的 值 定义如下：

// 如果字符串 只 包含数字，那么值为该字符串在 10 进制下的所表示的数字。
// 否则，值为字符串的 长度 。
// 给你一个字符串数组 strs ，每个字符串都只由字母和数字组成，请你返回 strs 中字符串的 最大值 。
/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function (strs) {
  let res = 0;
  for (const str of strs) {
    if (isAllNums(str)) res = Math.max(res, parseInt(str));
    else res = Math.max(res, str.length)
  }
  return res;
};

var isAllNums = function (str) {
  for (const ch of str) {
    if (ch.charCodeAt() < "0".charCodeAt() || ch.charCodeAt() > "9".charCodeAt()) {
      return false
    }
  }
  return true;
}