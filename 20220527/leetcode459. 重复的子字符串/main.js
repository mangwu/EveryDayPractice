/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-27 10:29:26                                                  *
 * @LastModifiedDate: 2022-05-27 11:27:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个非空的字符串 s ，检查是否可以通过由它的一个子串重复多次构成。
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const n = s.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    let substr = s.substring(0, i + 1);
    if (substr.repeat(Math.floor(n / (i + 1))) == s) {
      return true;
    }
  }
  return false;
};
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const n = s.length;
  let idx = 2;
  while (idx <= n) {
    if (n % idx == 0) {
      let len = n / idx;
      console.log(s.substring(0, len).repeat(idx), idx);
      if (s == s.substring(0, len).repeat(idx)) {
        return true;
      }
    }
    idx++;
  }
  return false;
};
