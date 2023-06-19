/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-18 10:35:13                                                  *
 * @LastModifiedDate: 2023-06-18 10:37:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 正 整数数组 nums 。

// 将 nums 分成两个数组：nums1 和 nums2 ，并满足下述条件：

// 数组 nums 中的每个元素都属于数组 nums1 或数组 nums2 。
// 两个数组都 非空 。
// 分区值 最小 。
// 分区值的计算方法是 |max(nums1) - min(nums2)| 。

// 其中，max(nums1) 表示数组 nums1 中的最大元素，min(nums2) 表示数组 nums2 中的最小元素。

// 返回表示分区值的整数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let res = Infinity;
  for (let i = 1; i < n; i++) {
    res = Math.min(res, nums[i] - nums[i - 1]);
  }
  return res;
};
