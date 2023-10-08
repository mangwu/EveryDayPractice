/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-10-08 10:32:15                                                  *
 * @LastModifiedDate: 2023-10-08 10:34:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个正整数 n 和 m 。

// 现定义两个整数 num1 和 num2 ，如下所示：

// num1：范围 [1, n] 内所有 无法被 m 整除 的整数之和。
// num2：范围 [1, n] 内所有 能够被 m 整除 的整数之和。
// 返回整数 num1 - num2 。

/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function (n, m) {
  let num1 = 0;
  let num2 = 0;
  for (let i = 1; i <= n; i++) {
    if (i % m === 0) num2 += i;
    else num1 += i;
  }
  return num1 - num2;
};

