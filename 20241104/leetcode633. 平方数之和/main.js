/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-11-04 08:53:14                                                  *
 * @LastModifiedDate: 2024-11-04 09:18:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a^2 + b^2 = c 。

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  // c必须是平分数
  const sqrtNum = Math.sqrt(c);
  for (let a = 0; a <= sqrtNum; a++) {
    const b = Math.sqrt(c - a * a);
    if (isInteger(b)) return true;
  }
  return false;
};
/**
 * @description 是否是整数
 * @param {number} num
 * @returns {boolean}
 */
var isInteger = function (num) {
  return num === Math.floor(num);
};
