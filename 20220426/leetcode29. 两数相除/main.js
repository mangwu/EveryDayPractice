/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-26 17:20:31                                                  *
 * @LastModifiedDate: 2022-04-26 17:44:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

// 返回被除数 dividend 除以除数 divisor 得到的商。

// 整数除法的结果应当截去（truncate）其小数部分，例如：truncate(8.345) = 8 以及 truncate(-2.7335) = -2

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let isNegative = false;
  // 先判断符号
  if (dividend < 0) {
    dividend = -dividend;
    isNegative = !isNegative;
  } else if (dividend == 0) {
    return 0;
  }
  if (divisor < 0) {
    divisor = -divisor;
    isNegative = !isNegative;
  }
  // 使用右移
  // 循环次数
  let idx = 0;
  // 右移时遗漏的1的个数
  let add = 0;
  while (dividend > divisor) {
    if (dividend & (1 == 1)) {
      add++;
    }
    dividend = dividend >> 1;
    idx++;
  }
  dividend += add;
  let extra = 0;
  while (dividend > divisor) {
    dividend = dividend - divisor;
    extra++;
  }
  if (idx == 0) {
    return 0;
  }
  let ans = Math.pow(2, idx) + extra;
  return isNegative ? -ans : ans;
};
