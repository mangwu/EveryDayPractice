/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-26 21:16:32                                                  *
 * @LastModifiedDate: 2022-02-26 21:35:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。

// 二分简单模拟题目
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  //  [0, len)
  let left = 0;
  let right = nums.length;
  let mid;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      // 在区域左边 [left, mid)
      right = mid;
    } else {
      // 在区域右边 [mid+ 1, right]
      left = mid + 1;
    }
  }
  // 没有找到相同值，最后的left就是该插入的位置
  return left;
};
