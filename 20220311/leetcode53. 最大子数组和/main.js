/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-11 16:55:01                                                  *
 * @LastModifiedDate: 2022-03-11 17:29:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组 是数组中的一个连续部分。
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  // 可以使用暴力法求解
  for (let i = 0; i < nums.length; i++) {
    let sum = nums[i];
    if (sum > max) {
      max = sum;
    }
    for (let j = i + 1; j < nums.length; j++) {
      sum += nums[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 当数组过大时，就不能使用暴力解法了

  // 连续相加，当加数小于0时进行替换
  let sum = 0;
  let max = nums[0];
  for (const num of nums) {
    if (sum > 0) {
      sum += num;
    } else {
      sum = num;
    }
    max = Math.max(max, sum);
  }
  return max;
};
