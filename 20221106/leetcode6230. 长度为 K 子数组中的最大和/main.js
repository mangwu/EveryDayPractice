/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-06 18:58:46                                                  *
 * @LastModifiedDate: 2022-11-06 19:15:16                                      *
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
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  // 滑动窗口
  // 记录子数组中的和
  const hash = new Map();

  // 子数组和
  let sum = 0;
  const n = nums.length;
  for (let i = 0; i < k; i++) {
    if (hash.has(nums[i])) {
      hash.set(nums[i], hash.get(nums[i]) + 1);
    } else {
      hash.set(nums[i], 1);
    }
    sum += nums[i];
  }
  // 默认为0
  let ans = 0;
  if (hash.size == k) {
    // 没有重复
    ans = sum;
  }
  for (let i = k; i < n; i++) {
    // 减去首位数字
    sum -= nums[i - k];
    let num = hash.get(nums[i - k]);
    if (num > 1) {
      hash.set(nums[i - k], num - 1);
    } else {
      hash.delete(nums[i - k]);
    }
    // 增加当前数字
    sum += nums[i];
    if (hash.has(nums[i])) {
      hash.set(nums[i], hash.get(nums[i]) + 1);
    } else {
      hash.set(nums[i], 1);
    }
    if (hash.size === k) {
      ans = Math.max(sum, ans);
    }
  }
  return ans;
};
