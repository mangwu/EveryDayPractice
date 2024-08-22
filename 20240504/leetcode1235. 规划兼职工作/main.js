/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-05-04 23:25:43                                                  *
 * @LastModifiedDate: 2024-05-05 02:00:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你打算利用空闲时间来做兼职工作赚些零花钱。

// 这里有 n 份兼职工作，每份工作预计从 startTime[i] 开始到 endTime[i] 结束，报酬为 profit[i]。

// 给你一份兼职工作表，包含开始时间 startTime，结束时间 endTime 和预计报酬 profit 三个数组，请你计算并返回可以获得的最大报酬。

// 注意，时间上出现重叠的 2 份工作不能同时进行。

// 如果你选择的工作在时间 X 结束，那么你可以立刻进行在时间 X 开始的下一份工作。

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  const n = startTime.length;
  // 按照endTime排序
  const jobs = new Array(n)
    .fill(0)
    .map((v, i) => [startTime[i], endTime[i], profit[i]])
    .sort((a, b) => a[1] - b[1]);
  // dp[i]前i个工作的最大利润
  const dp = new Array(n + 1).fill(0);
  // 动态规划：dp[i] = max(dp[i-1], dp[k] + profit[i])
  // 计算前i个工作的最大利润：要么不选择第i个工作，
  // 要么选择第i个工作，但是要找到第k个工作，它的结束时间小于等于第i份工作的开始时间
  for (let i = 1; i <= n; i++) {
    let left = 0;
    let right = i - 1;
    let target = jobs[i - 1][0];
    while (left <= right) {
      let mid = (left + right) >> 1;
      if (jobs[mid][1] <= target) {
        right = mid + 1;
      } else {
        left = mid - 1;
      }
    }
    dp[i] = Math.max(dp[i - 1], dp[right] + jobs[i - 1][2]);
  }
  return dp[n];
};
