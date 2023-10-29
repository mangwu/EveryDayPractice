/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-10-28 22:30:41                                                  *
 * @LastModifiedDate: 2023-10-28 22:34:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 。

// 定义 nums 一个子数组的 不同计数 值如下：

// 令 nums[i..j] 表示 nums 中所有下标在 i 到 j 范围内的元素构成的子数组（满足 0 <= i <= j < nums.length ），那么我们称子数组 nums[i..j] 中不同值的数目为 nums[i..j] 的不同计数。
// 请你返回 nums 中所有子数组的 不同计数 的 平方 和。

// 由于答案可能会很大，请你将它对 109 + 7 取余 后返回。

// 子数组指的是一个数组里面一段连续 非空 的元素序列。
const MOD = 10 ** 9 + 7;
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function (nums) {
  let ans = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const set = new Set();
    for (let j = i; j < n; j++) {
      set.add(nums[j]);
      ans += Math.pow(set.size, 2);
      ans %= MOD;
    }
  }
  return ans;
};
