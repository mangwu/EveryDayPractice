/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-04-16 22:57:22                                                  *
 * @LastModifiedDate: 2025-04-16 23:10:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
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
  const n = nums.length;
  let sum = 0;
  let res = 0;
  let j = 0;
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    while (j < n && sum < k) {
      if (hash.has(nums[j])) {
        sum += hash.get(nums[j]);
        hash.set(nums[j], hash.get(nums[j]) + 1);
      } else {
        hash.set(nums[j], 1);
      }
      j++;
    }
    console.log(sum,[i, j], hash);
    if (sum >= k) {
      res += n - j + 1;
    }
    const num = hash.get(nums[i]);
    if (num === 1) {
      hash.delete(nums[i]);
    } else {
      sum -= num - 1;
      hash.set(nums[i], num - 1);
    }
  }
  return res;
};

// 2 => 1
// 3 => 1 + 2 = 3
// 4 => 1 + 2 + 3 = 6
