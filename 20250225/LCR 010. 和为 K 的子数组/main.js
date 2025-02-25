/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-25 16:48:46                                                  *
 * @LastModifiedDate: 2025-02-25 17:07:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个整数数组和一个整数 k ，请找到该数组中和为 k 的连续子数组的个数。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let res = 0;
  // 暴力解法
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum += nums[j];
      if (sum === k) res++;
    }
  }
  return res;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  // pre[i] - pre[j] = k的个数
  // pre[i] - k = pre[j]
  // 我们记录在i之前每个相同前缀和的数量，那么在以i结尾的子数组中，满足条件的就是前缀和为pre[i] - k的数量
  // 前缀和+hash表
  let pre = 0;
  let count = 0;
  const hash = new Map();
  hash.set(0, 1); // 前缀和初始值为0，即以i结尾的，包括前面所有元素的子数组的情况
  for (const num of nums) {
    pre += num;
    if (hash.has(pre - k)) {
      count += hash.get(pre - k);
    }
    hash.set(pre, (hash.get(pre) || 0) + 1);
  }
  return count;
};
