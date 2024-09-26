/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-09-26 14:32:42                                                  *
 * @LastModifiedDate: 2024-09-26 15:51:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

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
  let sum = 0;
  let bSum = 0;
  for (const num of nums) {
    sum += num;
    bSum += bitSum(num);
  }
  return Math.abs(sum - bSum);
};
/**
 * @param {number} num
 * @return {number}
 */
function bitSum(num) {
  const str = num.toString();
  let sum = 0;
  for (const ch of str) sum += parseInt(ch);
  return sum;
}
