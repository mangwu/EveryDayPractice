/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-27 08:56:45                                                  *
 * @LastModifiedDate: 2022-09-27 09:02:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  return s1.split("").sort().join("") === s2.split("").sort().join("");
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  const hash = new Map();
  for (const ch of s1) {
    hash.has(ch) ? hash.set(ch, hash.get(ch) + 1) : hash.set(ch, 1);
  }
  for (const ch of s2) {
    if (hash.has(ch)) {
      let k = hash.get(ch) - 1;
      if (k == 0) {
        hash.delete(ch);
      } else {
        hash.set(ch, k);
      }
    } else {
      return false;
    }
  }
  return true;
};
