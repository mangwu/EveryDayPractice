/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-12-23 22:43:41                                                  *
 * @LastModifiedDate: 2023-12-23 23:57:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的 正 整数数组 nums 。

// 如果 nums 的一个子数组满足：移除这个子数组后剩余元素 严格递增 ，那么我们称这个子数组为 移除递增 子数组。比方说，[5, 3, 4, 6, 7] 中的 [3, 4] 是一个移除递增子数组，因为移除该子数组后，[5, 3, 4, 6, 7] 变为 [5, 6, 7] ，是严格递增的。

// 请你返回 nums 中 移除递增 子数组的总数目。

// 注意 ，剩余元素为空的数组也视为是递增的。

// 子数组 指的是一个数组中一段连续的元素序列。

/**
 * @param {number[]} nums
 * @return {number}
 */
var incremovableSubarrayCount = function (nums) {
  const n = nums.length;
  const set = new Set();
  const dfs = (start, end, left, right) => {
    if (left < right) {
      const cur = start + "-" + end;
      if (set.has(cur)) return;
      set.add(cur);
    } else return;
    if (start >= end) return;
    // 移除左边
    if (nums[start] > left) {
      dfs(start + 1, end, nums[start], right);
    }
    // 移除右边
    if (nums[end] < right) {
      dfs(start, end - 1, left, nums[end]);
    }
  };
  dfs(0, n - 1, 0, Infinity);
  return set.size;
};
const random = require("../../publicFunc/random/random.js");
const arr = new Array(1000).fill(0).map((v, i) => i + 1);
arr[500] = 9999;
console.log(incremovableSubarrayCount(arr));
