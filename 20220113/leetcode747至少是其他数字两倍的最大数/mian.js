/*
 * @Author: mangwu                                                             *
 * @File: mian.js                                                              *
 * @Date: 2022-01-13 16:08:36                                                  *
 * @LastModifiedDate: 2022-01-13 16:49:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  const len = nums.length;
  let max = 0;
  let ans = -1;
  let hasMax = false;
  for (let i = 0; i < len; i++) {
    // num 大于等于max
    if (nums[i] >= max) {
      // 用num 除max
      let dividor = nums[i] / max;
      // 记录最大值
      ans = i;
      max = nums[i];
      // 除以0的情况和大于2的情况均置为有大于其它数两倍的数
      if (dividor === Infinity || dividor === NaN || dividor >= 2) {
        hasMax = true;
      } else {
        hasMax = false;
      }
    }
    // 比最大值小
    if (nums[i] < max) {
      if (max / nums[i] < 2) {
        hasMax = false;
      }
    }
  }
  return hasMax ? ans : -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex2 = function (nums) {
  // 可以记录两个值，最大值后次大值
  // 如果最大值是次大值的两倍，那么可以返回最大值索引，否则返回-1

  // 记录最大值和次大值
  let m1 = -1,
    m2 = -1;
  // 最大值索引
  let ans = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= m1) {
      m2 = m1;
      m1 = nums[i];
      ans = i;
    } else if (nums[i] > m2) {
      m2 = nums[i];
    }
  }
  return m1 >= m2 * 2 ? ans : -1;
};
