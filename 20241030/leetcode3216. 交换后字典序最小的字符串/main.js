/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-10-30 09:25:59                                                  *
 * @LastModifiedDate: 2024-10-30 09:40:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个仅由数字组成的字符串 s，在最多交换一次 相邻 且具有相同 奇偶性 的数字后，返回可以得到的
// 字典序最小的字符串
// 。

// 如果两个数字都是奇数或都是偶数，则它们具有相同的奇偶性。例如，5 和 9、2 和 4 奇偶性相同，而 6 和 9 奇偶性不同。

/**
 * @param {string} s
 * @return {string}
 */
var getSmallestString = function (s) {
  const strArr = s.split("").map((v) => parseInt(v));
  const n = strArr.length;
  for (let i = 1; i < n; i++) {
    if (
      Math.abs(strArr[i] - strArr[i - 1]) % 2 === 0 &&
      strArr[i - 1] > strArr[i]
    ) {
      [strArr[i - 1], strArr[i]] = [strArr[i], strArr[i - 1]];
      break;
    }
  }
  return strArr.join("");
};
