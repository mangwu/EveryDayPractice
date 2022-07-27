/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-27 15:15:52                                                  *
 * @LastModifiedDate: 2022-07-27 15:18:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  const hash = new Map();
  for (const ch of s) {
    if (hash.has(ch)) {
      hash.set(ch, hash.get(ch) + 1);
    } else {
      hash.set(ch, 1);
    }
  }
  for (const [key, val] of hash) {
    if (val == 1) {
      return key;
    }
  }
  return "";
};
