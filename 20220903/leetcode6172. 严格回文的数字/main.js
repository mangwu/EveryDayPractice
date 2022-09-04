/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-03 22:35:14                                                  *
 * @LastModifiedDate: 2022-09-03 22:41:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 如果一个整数 n 在 b 进制下（b 为 2 到 n - 2 之间的所有整数）对应的字符串 全部 都是 回文的 ，
// 那么我们称这个数 n 是 严格回文 的。

// 给你一个整数 n ，如果 n 是 严格回文 的，请返回 true ，否则返回 false 。

// 如果一个字符串从前往后读和从后往前读完全相同，那么这个字符串是 回文的 。

/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
  for (let i = 2; i <= n - 2; i++) {
    if (!isPalindromic(n.toString(i))) {
      return false;
    }
  }
  return true;
};

var isPalindromic = function (str) {
  const n = str.length;
  const half = Math.floor(n / 2);
  for (let i = 0; i < half; i++) {
    if (str[i] !== str[n - i - 1]) {
      return false;
    }
  }
  return true;
};
