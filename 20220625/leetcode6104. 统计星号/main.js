/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-25 22:30:25                                                  *
 * @LastModifiedDate: 2022-06-25 22:34:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s ，每 两个 连续竖线 '|' 为 一对 。
// 换言之，第一个和第二个 '|' 为一对，第三个和第四个 '|' 为一对，以此类推。

// 请你返回 不在 竖线对之间，s 中 '*' 的数目。

// 注意，每个竖线 '|' 都会 恰好 属于一个对。

/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function (s) {
  let verticalNum = 0;
  let ans = 0;
  for (const ch of s) {
    if (ch == "|") {
      verticalNum++;
      continue;
    }
    if (verticalNum % 2 == 0) {
      // 可以判断星号
      if (ch == "*") {
        ans++;
      }
    }
  }
  return ans;
};
