/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-12 10:34:39                                                  *
 * @LastModifiedDate: 2023-02-12 11:27:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始、长度为 n 的整数数组 nums ，和两个整数 lower 和 upper ，返回 公平数对的数目 。

// 如果 (i, j) 数对满足以下情况，则认为它是一个 公平数对 ：

// 0 <= i < j < n，且
// lower <= nums[i] + nums[j] <= upper
/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let cur = 0;
  for (let i = 0; i < n; i++) {
    let start = lower - nums[i];
    let end = upper - nums[i];
    // [start, end];
    let startIdx = binarySearch(nums, start);
    let endIdx = binarySearch(nums, end, false);
    if (endIdx > startIdx) {
      cur += endIdx - startIdx;
      if (i >= startIdx && i < endIdx) {
        cur--;
      }
    }
  }
  return cur / 2;
};

const binarySearch = function (nums, target, type = true) {
  let left = 0;
  let right = nums.length;
  while (left <= right) {
    // 找到第一个大于等于start的
    // 找到第一个比end大的
    let mid = Math.floor((left + right) / 2);
    if (type && nums[mid] >= target) {
      right--;
    } else if (!type && nums[mid] > target) {
      right--;
    } else {
      left++;
    }
  }
  return left;
};

// nums[i] + x >= lower
// nums[i] + y <= upper

console.log(binarySearch([0, 1, 3, 3, 3, 3, 3, 4, 4], 2, true));
