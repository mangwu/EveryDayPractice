/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-19 10:17:04                                                  *
 * @LastModifiedDate: 2022-04-19 10:24:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const a = new Array(26).fill(0);
  for (const ch of s) {
    a[ch.charCodeAt() - "a".charCodeAt()]++;
  }
  for (const ch of t) {
    a[ch.charCodeAt() - "a".charCodeAt()]--;
  }
  for (const v of a) {
    if (v !== 0) {
      return false;
    }
  }
  return true;
};
