/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-12 01:29:20                                                  *
 * @LastModifiedDate: 2022-09-12 02:14:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个非负整数数组 nums 。如果存在一个数 x ，
// 使得 nums 中恰好有 x 个元素 大于或者等于 x ，那么就称 nums 是一个 特殊数组 ，
// 而 x 是该数组的 特征值 。

// 注意： x 不必 是 nums 的中的元素。

// 如果数组 nums 是一个 特殊数组 ，请返回它的特征值 x 。否则，返回 -1 。
// 可以证明的是，如果 nums 是特殊数组，那么其特征值 x 是 唯一的 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  for (let i = 1; i < 100; i++) {
    let k = 0;
    for (const num of nums) {
      if (num >= i) {
        k++;
      }
    }
    if (k == i) {
      return k;
    }
  }
  return -1;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] == nums[i - 1]) {
      continue;
    }
    // 有n - i个元素大于等于nums[i]
    let pre = nums[i - 1] ? nums[i - 1] : 0;
    if (n - i <= nums[i] && n - i > pre) {
      return n - i;
    }
  }
  return -1;
};

// 0 0  1 1 2 3 3
