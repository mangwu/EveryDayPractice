/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-19 23:04:15                                                  *
 * @LastModifiedDate: 2022-04-20 00:01:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 峰值元素是指其值严格大于左右相邻值的元素。

// 给你一个整数数组 nums，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 任何一个峰值 所在位置即可。

// 你可以假设 nums[-1] = nums[n] = -∞ 。

// 你必须实现时间复杂度为 O(log n) 的算法来解决此问题。
// 对于所有有效的 i 都有 nums[i] != nums[i + 1]
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  // 二分查找
  const len = nums.length;
  if (len == 1) {
    return 0;
  }
  let left = 0;
  let right = len - 1;
  while (left <= right) {
    const mid = (left + right) >> 1;
    let l = mid > 0 ? nums[mid - 1] : -Infinity;
    let r = mid < len - 1 ? nums[mid + 1] : -Infinity;
    if (nums[mid] > l && nums[mid] > r) {
      return mid;
    }
    if (nums[mid] < r) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
};
