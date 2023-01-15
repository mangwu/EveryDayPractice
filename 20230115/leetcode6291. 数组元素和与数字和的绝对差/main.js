/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-15 10:51:54                                                  *
 * @LastModifiedDate: 2023-01-15 10:56:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 6291. 数组元素和与数字和的绝对差 显示英文描述
// 通过的用户数3031
// 尝试过的用户数3054
// 用户总通过次数3044
// 用户总提交次数3200
// 题目难度Easy
// 给你一个正整数数组 nums 。

// 元素和 是 nums 中的所有元素相加求和。
// 数字和 是 nums 中每一个元素的每一数位（重复数位需多次求和）相加求和。
// 返回 元素和 与 数字和 的绝对差。

// 注意：两个整数 x 和 y 的绝对差定义为 |x - y| 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  return Math.abs(
    nums.reduce((a, b) => a + b, 0) -
      nums.reduce((a, b) => a + getBitSum(b), 0)
  );
};

var getBitSum = function (num) {
  let sum = 0;
  for (const ch of num.toString()) {
    sum += parseInt(ch);
  }
  return sum;
};
