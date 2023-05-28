/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-28 10:30:52                                                  *
 * @LastModifiedDate: 2023-05-28 10:34:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个用字符串表示的正整数 num ，请你以字符串形式返回不含尾随零的整数 num 。

/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
  const n = num.length;
  let idx = n - 1;
  for (; idx >= 0; idx--) {
    if (num[idx] !== "0") {
      break;
    }
  }
  return num.substring(0, idx + 1);
};
