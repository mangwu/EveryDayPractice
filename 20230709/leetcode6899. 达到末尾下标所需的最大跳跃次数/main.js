/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-09 10:31:54                                                  *
 * @LastModifiedDate: 2023-07-09 10:40:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始、由 n 个整数组成的数组 nums 和一个整数 target 。

// 你的初始位置在下标 0 。在一步操作中，你可以从下标 i 跳跃到任意满足下述条件的下标 j ：

// 0 <= i < j < n
// -target <= nums[j] - nums[i] <= target
// 返回到达下标 n - 1 处所需的 最大跳跃次数 。

// 如果无法到达下标 n - 1 ，返回 -1 。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function (nums, target) {
  const n = nums.length;
  const dp = new Array(n).fill(-1);
  dp[0] = 0;
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      const sub = nums[i] - nums[j];
      if (dp[j] !== -1 && sub <= target && sub >= -target) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return dp[n - 1];
};
