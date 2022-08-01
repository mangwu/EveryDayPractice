/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-01 15:01:07                                                  *
 * @LastModifiedDate: 2022-08-01 15:07:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n，请你返回一个含 n 个字符的字符串，其中每种字符在该字符串中都恰好出现 奇数次 。

// 返回的字符串必须只含小写英文字母。如果存在多个满足题目要求的字符串，则返回其中任意一个即可。

// 。

/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
  if (n % 2 == 1) {
    return "a".repeat(n);
  } else {
    return "a".repeat(n - 1) + "b";
  }
};
