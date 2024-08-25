/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-08-25 20:17:44                                                  *
 * @LastModifiedDate: 2024-08-25 20:44:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个字符串 s 和 t，每个字符串中的字符都不重复，且 t 是 s 的一个排列。

// 排列差 定义为 s 和 t 中每个字符在两个字符串中位置的绝对差值之和。

// 返回 s 和 t 之间的 排列差 。

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function (s, t) {
  const n = s.length;
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    hash.set(s[i], i);
  }
  let res = 0;
  for (let i = 0; i < n; i++) {
    res += Math.abs(hash.get(t[i]) - i);
  }
  return res;
};
