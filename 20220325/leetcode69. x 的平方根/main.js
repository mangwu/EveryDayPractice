/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-25 15:39:31                                                  *
 * @LastModifiedDate: 2022-03-25 17:14:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

// 由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

// 注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // 不允许使用内置函数
  // 可以从1开始相乘（平方），第一个比x大的数就是结果
  // 但是 x最大值为2^31 - 1 所以不能依次遍历，时间复杂度过大
  // 必须写出一个log(n)的算法
  // [1, len]
  let left = 1;
  let right = x;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let mutil = mid * mid;
    if (mutil == x) {
      return mid;
    } else if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left - 1;
};
// 为了避免溢出，可以不使用mid * mid > x作为判断条件，而是使用mid > x / mid
// 使用exp和log

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x == 0) {
    return 0;
  }
  let ans = Math.floor(Math.exp(0.5 * Math.log(x)));
  return (ans + 1) * (ans + 1) <= x ? ans + 1 : ans;
};
