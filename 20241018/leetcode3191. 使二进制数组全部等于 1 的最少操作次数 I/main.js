/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-10-18 09:08:46                                                  *
 * @LastModifiedDate: 2024-10-18 09:54:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个二进制数组 nums 。

// 你可以对数组执行以下操作 任意 次（也可以 0 次）：

// 选择数组中 任意连续 3 个元素，并将它们 全部反转 。
// 反转 一个元素指的是将它的值从 0 变 1 ，或者从 1 变 0 。

// 请你返回将 nums 中所有元素变为 1 的 最少 操作次数。如果无法全部变成 1 ，返回 -1 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const n = nums.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] === 0) {
      if (i < n - 2) {
        res++;
        nums[i] = 1;
        nums[i + 1] = 1 - nums[i + 1];
        nums[i + 2] = 1 - nums[i + 2];
      } else {
        return -1;
      }
    }
  }
  return res;
};
