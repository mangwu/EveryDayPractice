/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-01-11 23:03:14                                                  *
 * @LastModifiedDate: 2025-01-11 23:27:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你三个 正 整数 num1 ，num2 和 num3 。

// 数字 num1 ，num2 和 num3 的数字答案 key 是一个四位数，定义如下：

// 一开始，如果有数字 少于 四位数，给它补 前导 0 。
// 答案 key 的第 i 个数位（1 <= i <= 4）为 num1 ，num2 和 num3 第 i 个数位中的 最小 值。
// 请你返回三个数字 没有 前导 0 的数字答案。

/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function (num1, num2, num3) {
  num1 = num1.toString().padStart(4, "0");
  num2 = num2.toString().padStart(4, "0");
  num3 = num3.toString().padStart(4, "0");
  const res = [];
  for (let i = 0; i < 4; i++) {
    res.push(Math.min(num1[i], num2[i], num3[i]));
  }
  return parseInt(res.join(""));
};
