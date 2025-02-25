/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-25 22:11:20                                                  *
 * @LastModifiedDate: 2025-02-25 22:26:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  // 个位数: 9 * 1 = 9
  // 十位数: 90 * 2 = 180
  // 百位数: 900 * 3 = 2700
  // k位数: 9 * 10 ^ (k - 1) * k
  let cur = 1; // 位数
  let base = 9; // 基数，就是 9 * 10 ^ (k - 1)的部分，每次乘10
  while (n > cur * base) {
    n -= cur * base; // 减去k位数，最终结果位cur位的第n位
    cur++;
    base *= 10;
  }
  const m = Math.floor((n - 1) / cur); // 第n位在cur位的第m个数字上，以0开始计数所以需要减去1
  const start = Math.pow(10, cur - 1); // cur位数的第一个数字
  const num = start + m; // 第n位在数字num上
  const idx = (n - 1) % cur; // num数字中的idx位
  const digitStr = num.toString()[idx];
  return parseInt(digitStr);
};
