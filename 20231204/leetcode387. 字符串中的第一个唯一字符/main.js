/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-12-04 14:41:49                                                  *
 * @LastModifiedDate: 2023-12-04 14:48:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const hash = new Map();
  const n = s.length;
  for (let i = 0; i < n; i++) {
    hash.has(s[i]) ? hash.get(s[i])[0]++ : hash.set(s[i], [1, i]);
  }
  let ans = -1;
  for (const [_ch, [num, idx]] of hash) {
    if (num === 1) {
      ans !== -1 ? (ans = Math.min(ans, idx)) : (ans = idx);
    }
  }
  return ans;
};
