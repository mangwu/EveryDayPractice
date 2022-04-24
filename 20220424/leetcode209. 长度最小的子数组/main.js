/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-24 16:51:14                                                  *
 * @LastModifiedDate: 2022-04-24 17:13:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，
// 并返回其长度。如果不存在符合条件的子数组，返回 0 。

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let ans = Infinity;
  const len = nums.length;
  let left = 0;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
    if (sum >= target) {
      // 做个单个元素判断节省对于很长的数组，且有单个元素大于target时节省时间
      if (right - left == 0) {
        return 1;
      }
      while (sum >= target) {
        ans = Math.min(ans, i - left + 1);
        sum -= nums[left];
        left++;
      }
    }
  }
  return ans == Infinity ? 0 : ans;
};

// 前缀和加二分查找
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  const len = nums.length;
  if (len == 1) {
    if (target > nums[0]) {
      return 0;
    } else {
      return 1;
    }
  }
  const prefix = new Array(len + 1).fill(0);
  for (let i = 0; i < len; i++) {
    prefix[i + 1] = prefix[i] + nums[i];
  }
  let ans = Infinity;
  // 找到以每个元素为开头满足条件的最小索引
  for (let i = 0; i < len; i++) {
    let left = i + 1;
    let right = len + 1;
    // [i+1, len+1);
    while (left < right) {
      let mid = (left + right) >> 1;
      // 不符合条件
      if (prefix[mid] - prefix[i] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    // left可能是第一个大于target的元素，也可能是边界值
    if (prefix[left] - prefix[i] >= target) {
      ans = Math.min(left - i, ans);
      if (left - i == 1) {
        return 1;
      }
    }
  }
  return ans == Infinity ? 0 : ans;
};
