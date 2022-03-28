/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-28 17:29:21                                                  *
 * @LastModifiedDate: 2022-03-28 20:47:29                                      *
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
  if (target == 1) {
    return 1;
  }
  const len = nums.length;
  let win = [];
  let sum = 0;
  let ans = Infinity;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
    win.push(nums[i]);
    if (sum >= target) {
      if (win.length == 1) {
        return 1;
      }
      ans = Math.min(ans, win.length);
      let idx = 0;
      while (sum >= target) {
        sum -= win[idx];
        ans = Math.min(ans, win.length - idx);
        idx++;
      }
      win = win.slice(idx);
    }
  }
  return ans == Infinity ? 0 : ans;
};
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  if (target == 1) {
    return 1;
  }
  // 改用双指针
  let left = 0;
  let right = 0;
  let ans = Infinity;
  let sum = 0;
  const len = nums.length;
  while (right < len) {
    sum += nums[right];
    if (sum >= target) {
      if (right - left == 0) {
        return 1;
      }
      ans = Math.max(ans, right - left + 1);
      // 左移left
      while (sum >= target) {
        sum -= nums[left];
        ans = Math.max(ans, right - left + 1);
        left++;
      }
    }
    right++;
  }
  return ans == Infinity ? 0 : ans;
};
