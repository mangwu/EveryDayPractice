/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-10-25 14:24:17                                                  *
 * @LastModifiedDate: 2024-10-25 17:28:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 rewardValues，长度为 n，代表奖励的值。

// 最初，你的总奖励 x 为 0，所有下标都是 未标记 的。你可以执行以下操作 任意次 ：

// 从区间 [0, n - 1] 中选择一个 未标记 的下标 i。
// 如果 rewardValues[i] 大于 你当前的总奖励 x，则将 rewardValues[i] 加到 x 上（即 x = x + rewardValues[i]），并 标记 下标 i。
// 以整数形式返回执行最优操作能够获得的 最大 总奖励。

/**
 * @param {number[]} rewardValues
 * @return {number}
 */
var maxTotalReward = function (rewardValues) {
  const n = rewardValues.length;
  rewardValues.sort((a, b) => a - b);
  const dp = new Array(n + 1).fill(0);
  // dp[i] 表示前i个奖励的最大奖励
  for (let i = 0; i < n; i++) {
    // 二分查找
    dp[i + 1] = dp[i]; // 不选当前的dp[i]时的最大奖励
    let left = 0;
    let right = i;
    const target = rewardValues[i];
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      // 找到第一个小于target的索引
      if (dp[mid] >= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    dp[i + 1] = Math.max(dp[i + 1], rewardValues[i] + dp[right]);
  }
  return dp[n];
};

// [1,6,4,3,2]

// [1,2,3,4,6]
// 0 1 3 5 7 11

/**
 * @param {number[]} rewardValues
 * @return {number}
 */
var maxTotalReward = function (rewardValues) {
  const n = rewardValues.length;
  rewardValues.sort((a, b) => a - b);
  const dp = new Array(n + 1).fill(0);
  // dp[i] 表示前i个奖励的最大奖励
  let pre1 = 0;
  let pre2 = 0;
  for (let i = 0; i < n; i++) {
    // 二分查找
    dp[i + 1] = dp[i]; // 不选当前的dp[i]时的最大奖励
    dp[i + 1] = Math.max(dp[i + 1], pre1 + rewardValues[i]);
    if (rewardValues[i] > pre2) {
      dp[i + 1] = Math.max(dp[i + 1], pre2 + rewardValues[i]);
      pre1 = pre2;
      pre2 = rewardValues[i];
    }
    let left = 0;
    let right = i;
    const target = rewardValues[i];
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      // 找到第一个小于target的索引
      if (dp[mid] >= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    dp[i + 1] = Math.max(dp[i + 1], rewardValues[i] + dp[right]);
  }
  return dp[n];
};

/**
 * @param {number[]} rewardValues
 * @return {number}
 */
var maxTotalReward = function (rewardValues) {
  const n = rewardValues.length;
  rewardValues.sort((a, b) => a - b);
  const dp = new Array(n).fill(0);
  // dp[i] 表示保护rv[i]奖励的最大奖励
  let res = 0;
  dp[0] = rewardValues[0];
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (rewardValues[i] > rewardValues[j]) {
        dp[i] = Math.max(dp[i], rewardValues[i] + rewardValues[j]);
      }
      if (rewardValues[i] > dp[j]) {
        dp[i] = Math.max(dp[i], dp[j] + rewardValues[i]);
      }
    }
    res = Math.max(res, dp[i]);
  }
  console.log(dp);
  return res;
};

// [2,14,15,18]
// 2 16 29

// [1,2,3,4,6]
// 1 3 5

// [1,1,3,5]
// 1 1
