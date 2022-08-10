/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-10 11:21:47                                                  *
 * @LastModifiedDate: 2022-08-10 14:05:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const half = nums.length / 2;
  const hash = new Map();
  for (const num of nums) {
    if (hash.has(num)) {
      const k = hash.get(num);
      if (k + 1 > half) {
        return num;
      }
      hash.set(num, k + 1);
    } else {
      hash.set(num, 1);
    }
  }
  return nums[0];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // 博弈
  let candidate = null;
  let count = 0;
  for (const num of nums) {
    if (count === 0) {
      candidate = num;
      count++;
    } else {
      if (candidate === num) {
        count++;
      } else {
        count--;
      }
    } 
  }
  return candidate;
};
