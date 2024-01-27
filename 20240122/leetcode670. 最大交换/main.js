/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-22 08:58:10                                                  *
 * @LastModifiedDate: 2024-01-22 09:09:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给定一个非负整数，你至多可以交换一次数字中的任意两位。返回你能得到的最大值。

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  const numStr = num
    .toString()
    .split("")
    .map((v) => parseInt(v));
  const sorted = numStr.slice().sort((a, b) => b - a);
  const n = numStr.length;
  for (let i = 0; i < n; i++) {
    if (numStr[i] !== sorted[i]) {
      // 交换
      const last = numStr.lastIndexOf(sorted[i]);
      [numStr[i], numStr[last]] = [numStr[last], numStr[i]];
      return numStr.join("");
    }
  }
  return numStr.join("");
};
