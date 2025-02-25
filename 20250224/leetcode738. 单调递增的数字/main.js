/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-24 23:32:14                                                  *
 * @LastModifiedDate: 2025-02-24 23:45:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 当且仅当每个相邻位数上的数字 x 和 y 满足 x <= y 时，我们称这个整数是单调递增的。

// 给定一个整数 n ，返回 小于或等于 n 的最大数字，且数字呈 单调递增 。

/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  const strArr = n
    .toString()
    .split("")
    .map((v) => parseInt(v));
  const len = strArr.length;
  for (let i = 1; i < len; i++) {
    if (strArr[i] < strArr[i - 1]) {
      // 将前面的数字减1，后面的全部变成9
      let j = i - 1;
      while (j - 1 >= 0 && strArr[j] === strArr[j - 1]) j--;
      strArr[j++]--;
      while (j < len) strArr[j++] = 9;
      break;
    }
  }
  return parseInt(strArr.join(""));
};
