/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-22 09:42:15                                                  *
 * @LastModifiedDate: 2022-07-22 09:43:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 找出数组中重复的数字。

// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
// 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
// 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  // [0, n - 1];
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      return num;
    } else {
      set.add(num);
    }
  }
};
