/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-07 16:41:16                                                  *
 * @LastModifiedDate: 2022-08-07 19:49:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

//实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。不得使用库函数，同时不需要考虑大数问题。

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let isNegtive = false;
  if (n < 0) {
    n = -n;
    isNegtive = true;
  }
  if (n == 0) {
    return 1;
  }
  let ans = 1;
  for (let i = 0; i < n; i++) {
    ans *= x;
  }
  return isNegtive ? 1 / ans : ans;
};

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n < 0) {
    return 1 / myPow(x, -n);
  }
  if (n == 0) {
    return 1;
  }
  if (n == 1) {
    return x;
  }
  // 求 x^n 相当于求 x^(n / 2)^2
  if (n % 2 == 0) {
    let res = myPow(x, n / 2);
    return res * res;
  }
  if (n % 2 == 1) {
    let res = myPow(x, (n - 1) / 2);
    return res * res * x;
  }
};

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  // 快速幂的迭代写法
  let isNegtive = false;
  if (n < 0) {
    n = -n;
    isNegtive = true;
  }
  let x_contrubute = x;
  let ans = 1;
  while (n > 0) {
    if (n & 1) {
      ans *= x_contrubute;
    }
    x_contrubute *= x_contrubute;
    n >>= 1;
  }
  return isNegtive ? 1 / ans : ans;
};
