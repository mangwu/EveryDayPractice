/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-22 10:23:44                                                  *
 * @LastModifiedDate: 2022-07-22 14:18:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // 二分查找
  // 找到第一个不符合nums[i] == i的元素
  let left = 0;
  let right = nums.length;
  // [left, right];
  while (left < right) {
    let mid = (left + right) >> 1;
    if (nums[mid] == mid) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[right] !== undefined ? nums[right] - 1 : nums[right - 1] + 1;
};

// const n = nums.length

// [0, n] n+ 1个数字中，只有一个数字不在数组中
