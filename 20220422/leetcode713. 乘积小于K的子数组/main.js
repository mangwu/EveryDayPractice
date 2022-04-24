/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-22 09:01:35                                                  *
 * @LastModifiedDate: 2022-04-24 16:49:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个正整数数组 nums和整数 k 。

// 请找出该数组内乘积小于 k 的连续的子数组的个数。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) {
    return 0;
  }
  // 滑动窗口题
  const len = nums.length;
  let left = 0;
  let right = 0;
  let mul = 1;
  let ans = 0;
  while (right < len) {
    while (right < len && mul < k) {
      mul *= nums[right];
      if (mul < k) {
        ans += right - left + 1;
      }
      right++;
    }
    let hasChange = false;
    while (mul >= k && left < right) {
      mul /= nums[left];
      hasChange = true;
      left++;
    }
    if (hasChange) {
      ans += right - left;
    }
  }
  return ans;
};

// 二分查找
// 2 4 8 16   64
// 1 2 3 4    6
// 0 1 3 6 10

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) {
    return 0;
  }
  const len = nums.length;
  // 前缀和
  const prefix = new Array(len + 1).fill(0);
  for (let i = 0; i < len; i++) {
    prefix[i + 1] = prefix[i] + Math.log(nums[i]);
  }
  let ans = 0;
  const logk = Math.log(k);
  for (let i = 0; i <= len; i++) {
    // 查找最大索引[i+1, len+1)
    let left = i + 1;
    let right = len + 1;
    while (left < right) {
      let mid = (left + right) >> 1;
      if (prefix[mid] - prefix[i] < logk - 1e-9) {
        // 可能不是最大的索引
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    // 此时left是最大索引j旁边的索引
    ans += left - i - 1;
  }
  return ans;
};

// [10,3,3,7,2,9,7,4,7,2,8,6,5,1,5]   15长度
// 30
// 0 2 1
// 1 4 2
// 2 5 2
// 3 6 2
// 4 7 2
// 5 7 1
// 6 9 2
// 7 10 2
// 8 11 2
// 9 12 2
// 10 12 1
// 11 15 3 => 1
// 12 16 3
// 13 16 2
// 14 16 1
// 15 16 0

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) {
    return 0;
  }
  const len = nums.length;
  let left = 0;
  let prod = 1;
  let ans = 0;
  for (let i = 0; i < len; i++) {
    prod = prod * nums[i];
    while (prod >= k) {
      prod = prod / nums[left];
      left++;
    }
    ans += i - left + 1;
  }
  return ans;
};
