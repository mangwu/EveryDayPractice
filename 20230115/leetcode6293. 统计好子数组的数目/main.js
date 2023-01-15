/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-15 11:12:31                                                  *
 * @LastModifiedDate: 2023-01-15 11:38:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 和一个整数 k ，请你返回 nums 中 好 子数组的数目。

// 一个子数组 arr 如果有 至少 k 对下标 (i, j) 满足 i < j 且 arr[i] == arr[j] ，那么称它是一个 好 子数组。

// 子数组 是原数组中一段连续 非空 的元素序列。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countGood = function (nums, k) {
  // 滑动窗口
  let left = 0;
  let right = 0;
  const n = nums.length;
  let m = 0;
  let res = 0;
  const hash = new Map();
  while (left < n) {
    // right开始滑动
    while (m < k && right < n) {
      if (hash.has(nums[right])) {
        let cur = hash.get(nums[right]);
        m += cur;
        hash.set(nums[right], cur + 1);
      } else {
        hash.set(nums[right], 1);
      }
      right++;
    }
    if (m < k && right === n) {
      break;
    }
    // left开始滑动
    while (left < n && m >= k) {
      res += n - right + 1;
      let cur = hash.get(nums[left]);
      hash.set(nums[left], cur - 1);
      m -= cur - 1;
      left++;
    }
  }
  return res;
};
