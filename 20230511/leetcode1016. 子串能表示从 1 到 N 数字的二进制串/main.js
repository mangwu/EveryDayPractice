/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-11 09:07:01                                                  *
 * @LastModifiedDate: 2023-05-11 09:16:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个二进制字符串 s 和一个正整数 n，如果对于 [1, n]
// 范围内的每个整数，其二进制表示都是 s 的 子字符串 ，就返回 true，否则返回 false 。

// 子字符串 是字符串中连续的字符序列。

/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function (s, n) {
  // 可以得出s的所有子字符串
  const len = s.length;
  const set = new Set();
  for (let i = 0; i < len; i++) {
    let cur = parseInt(s[i]);
    set.add(cur);
    for (let j = i + 1; j < len; j++) {
      cur = cur * 2 + parseInt(s[j]);
      if (cur > n) break;
      set.add(cur);
    }
  }
  set.delete(0);
  return set.size === n;
};
