/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-09 10:40:50                                                  *
 * @LastModifiedDate: 2023-07-09 10:54:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个下标从 0 开始的整数数组 nums1 和 nums2 ，长度均为 n 。

// 让我们定义另一个下标从 0 开始、长度为 n 的整数数组，nums3 。对于范围 [0, n - 1] 的每个下标 i ，你可以将 nums1[i] 或 nums2[i] 的值赋给 nums3[i] 。

// 你的任务是使用最优策略为 nums3 赋值，以最大化 nums3 中 最长非递减子数组 的长度。

// 以整数形式表示并返回 nums3 中 最长非递减 子数组的长度。

// 注意：子数组 是数组中的一个连续非空元素序列。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxNonDecreasingLength = function (nums1, nums2) {
  // 动态规划
  const n = nums1.length;
  // 以idx为最后一位，选择nums1或者nums2为结果的数组最长长度
  const dp = new Array(n).fill(0).map((v) => new Array(2).fill(1));
  let res = 1;
  for (let i = 1; i < n; i++) {
    // 选择nums1[i]
    if (nums1[i] >= nums2[i - 1]) {
      dp[i][0] = Math.max(dp[i][0], dp[i - 1][1] + 1);
    }
    if (nums1[i] >= nums1[i - 1]) {
      dp[i][0] = Math.max(dp[i][0], dp[i - 1][0] + 1);
    }
    // 选择nums2[i]
    if (nums2[i] >= nums2[i - 1]) {
      dp[i][1] = Math.max(dp[i][1], dp[i - 1][1] + 1);
    }
    if (nums2[i] >= nums1[i - 1]) {
      dp[i][1] = Math.max(dp[i][1], dp[i - 1][0] + 1);
    }
    res = Math.max(res, dp[i][0], dp[i][1]);
  }
  return res;
};
