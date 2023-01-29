/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-29 09:30:12                                                  *
 * @LastModifiedDate: 2023-01-29 09:33:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s ，每 两个 连续竖线 '|' 为 一对 。换言之，第一个和第二个 '|' 为一对，第三个和第四个 '|' 为一对，以此类推。

// 请你返回 不在 竖线对之间，s 中 '*' 的数目。

// 注意，每个竖线 '|' 都会 恰好 属于一个对。
/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let flag = true;
  let res = 0;
  for (const ch of s) {
    if (ch === "|") flag = !flag;
    if (flag && ch === "*") {
      res++;
    }
  }
  return res;
};
