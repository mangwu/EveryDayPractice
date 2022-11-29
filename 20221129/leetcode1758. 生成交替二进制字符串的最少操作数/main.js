/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-30 00:10:48                                                  *
 * @LastModifiedDate: 2022-11-30 00:14:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个仅由字符 '0' 和 '1' 组成的字符串 s 。一步操作中，你可以将任一 '0' 变成 '1' ，或者将 '1' 变成 '0' 。

// 交替字符串 定义为：如果字符串中不存在相邻两个字符相等的情况，那么该字符串就是交替字符串。例如，字符串 "010" 是交替字符串，而字符串 "0100" 不是。

// 返回使 s 变成 交替字符串 所需的 最少 操作数。

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  // 交替字符串要么变为010 要么变为101
  let res = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (s[i] == i % 2) {
      res++;
    }
  }
  return Math.min(res, n - res);
};
