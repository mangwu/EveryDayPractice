/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-09 10:54:58                                                  *
 * @LastModifiedDate: 2023-07-09 11:05:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 和一个正整数 k 。

// 你可以对数组执行下述操作 任意次 ：

// 从数组中选出长度为 k 的 任一 子数组，并将子数组中每个元素都 减去 1 。
// 如果你可以使数组中的所有元素都等于 0 ，返回  true ；否则，返回 false 。

// 子数组 是数组中的一个非空连续元素序列。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkArray = function (nums, k) {
  // 从nums[0]开始进行减法
  const n = nums.length;
  for (let i = 0; i < n - k + 1; i++) {
    let start = i;
    let sub = nums[start];
    let cur = 0;
    let nxt = k;
    while (cur < k) {
      nums[start] -= sub;
      console.log(start);
      if (nums[start] < 0) return false;
      if (nums[start] > 0 && nxt === k) nxt = cur;
      start++;
      cur++;
    }
    i = i + nxt - 1;
    console.log(nums, i, nxt);
  }
  for (let i = n - k; i < n; i++) {
    if (nums[i] !== 0) return false;
  }
  return true;
};
