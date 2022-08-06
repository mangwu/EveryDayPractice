/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-06 15:49:56                                                  *
 * @LastModifiedDate: 2022-08-06 19:58:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 求 1+2+...+n ，
// 要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
  // 用了if
  if (n == 1) {
    return 1;
  }
  return n + sumNums(n - 1);
};

/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
  // 不要if的递归 n等于0时直接返回，不在执行&&后续
  n && (n += sumNums(n - 1));
  return n;
};

/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
  // 计算公式 n * (n+1) / 2
  // 除以2可以使用右移实现
  // 两个数相乘可以将数视为二进制，使用位和与左右移实现
  // A ,B 从B的最低位开始
  // 因为不能使用循环，由于n小于10000，所以，二进制有14位，进行14次计算即可
  let a = n + 1,
    b = n;
  let ans = 0;
  // 判断b末尾是否为1,是1就加上a
  b & 1 && (ans += a);
  a <<= 1;
  b >>= 1;
  b & 1 && (ans += a);
  a <<= 1;
  b >>= 1;
  b & 1 && (ans += a);
  a <<= 1;
  b >>= 1;
  b & 1 && (ans += a);
  a <<= 1;
  b >>= 1;
  b & 1 && (ans += a);
  a <<= 1;
  b >>= 1;
  b & 1 && (ans += a);
  a <<= 1;
  b >>= 1;
  b & 1 && (ans += a);
  a <<= 1;
  b >>= 1;
  b & 1 && (ans += a);
  a <<= 1;
  b >>= 1;
  b & 1 && (ans += a);
  a <<= 1;
  b >>= 1;
  b & 1 && (ans += a);
  a <<= 1;
  b >>= 1;
  b & 1 && (ans += a);
  a <<= 1;
  b >>= 1;
  b & 1 && (ans += a);
  a <<= 1;
  b >>= 1;
  b & 1 && (ans += a);
  a <<= 1;
  b >>= 1;
  b & 1 && (ans += a);
  a <<= 1;
  b >>= 1;
  return ans >> 1;
};

var quickMulit = (a, b) => {
  let ans = 0;
  for (; b; b >>= 1) {
    if (b & 1) {
      ans += a;
    }
    // 左移a
    a <<= 1;
  }
  return ans;
};
