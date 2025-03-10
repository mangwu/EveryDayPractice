/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-03-10 14:59:30                                                  *
 * @LastModifiedDate: 2025-03-10 15:52:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个整数 a 和 b ，不使用 运算符 + 和 - ​​​​​​​，计算并返回两整数之和。

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  // 使用二进制的异或和与操作
  // 每位的二进制位相加结果不考虑进位，就是两个值的异或值
  // 每位有进位的情况就是两个值的与值，需要左移1位后再操作
  while (b !== 0) {
    let sum = a ^ b;
    let carry = (a & b) << 1;
    a = sum;
    b = carry;
  }
  return a;
};

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  return Math.round(Math.log2(Math.pow(2, a) * Math.pow(2, b)));
};
