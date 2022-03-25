/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-25 13:43:47                                                  *
 * @LastModifiedDate: 2022-03-25 14:19:05                                      *
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
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  const len = nums.length;
  // 将左右边界看作无穷小
  nums[-1] = -Infinity;
  nums[len] = -Infinity;
  // 暴力解法
  for (let i = 0; i < len; i++) {
    if (nums[i] > nums[i + 1] && nums[i] > nums[i - 1]) {
      return i;
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  const len = nums.length;
  // 将左右边界看作无穷小
  nums[-1] = -Infinity;
  nums[len] = -Infinity;
  let left = 0;
  let right = len - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) {
      return mid;
    }
    // 如果右边值大，则可以在右区域查找
    if (nums[mid] < nums[mid + 1]) {
      // [mid + 1, right]
      left = mid + 1;
    } else {
      // 否则在左区域查找
      right = mid - 1;
    }
  }
};
