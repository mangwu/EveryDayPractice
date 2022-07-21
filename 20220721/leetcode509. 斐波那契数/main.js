/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-21 09:23:54                                                  *
 * @LastModifiedDate: 2022-07-21 09:28:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。
// 该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
};

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  // 动态规划
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  let first = 0;
  let second = 1;
  while (n > 1) {
    let temp = second;
    second = first + second;
    first = temp;
    n--;
  }
  return second;
};
