/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-26 16:12:13                                                  *
 * @LastModifiedDate: 2024-12-26 16:31:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s ，请你判断字符串 s 是否存在一个长度为 2 的子字符串，在其反转后的字符串中也出现。

// 如果存在这样的子字符串，返回 true；如果不存在，返回 false 。

/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function (s) {
  const n = s.length;
  const set = new Set();
  for (let i = 1; i < n; i++) {
    set.add(s[i - 1] + s[i]);
    if (set.has(s[i] + s[i - 1])) return true;
  }
  return false;
};
