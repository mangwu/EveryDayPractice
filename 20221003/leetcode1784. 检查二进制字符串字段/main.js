/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-03 20:19:31                                                  *
 * @LastModifiedDate: 2022-10-03 20:23:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个二进制字符串 s ，该字符串 不含前导零 。

// 如果 s 包含 零个或一个由连续的 '1' 组成的字段 ，返回 true​​​ 。
// 否则，返回 false 。

// 如果 s 中 由连续若干个 '1' 组成的字段 数量不超过 1，返回 true​​​ 。
// 否则，返回 false 。

/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function (s) {
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "1") {
      num++;
      if (num > 1) {
        return false;
      }
      while (s[i] == "1") {
        i++;
      }
    }
  }
  return true;
};
