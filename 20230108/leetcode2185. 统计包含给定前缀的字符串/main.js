/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-08 16:13:30                                                  *
 * @LastModifiedDate: 2023-01-08 16:18:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串数组 words 和一个字符串 pref 。

// 返回 words 中以 pref 作为 前缀 的字符串的数目。

// 字符串 s 的 前缀 就是  s 的任一前导连续字符串。

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  let res = 0;
  for (const word of words) {
    if (word.startsWith(pref)) res++;
  }
  return res;
};

/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function (words, pref) {
  return words.reduce((pre, cur) => pre + Number(cur.startsWith(pref)), 0);
};
