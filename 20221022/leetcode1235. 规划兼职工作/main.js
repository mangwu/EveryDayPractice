/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-22 16:58:29                                                  *
 * @LastModifiedDate: 2022-10-22 17:42:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你打算利用空闲时间来做兼职工作赚些零花钱。

// 这里有 n 份兼职工作，每份工作预计从 startTime[i] 开始到 endTime[i] 结束，报酬为 profit[i]。

// 给你一份兼职工作表，包含开始时间 startTime，结束时间 endTime 和预计报酬 profit 三个数组，请你计算并返回可以获得的最大报酬。

// 注意，时间上出现重叠的 2 份工作不能同时进行。

// 如果你选择的工作在时间 X 结束，那么你可以立刻进行在时间 X 开始的下一份工作。

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function (startTime, endTime, profit) {
  const n = startTime.length;
  const jobs = new Array(n)
    .fill(0)
    .map((_v, i) => [startTime[i], endTime[i], profit[i]]);
  jobs.sort((a, b) => a[1] - b[1]);
  const dp = new Array(n + 1).fill(0);
  // dp[0] = 0
  // dp[i] = Math.max(dp[i-1], dp[k] + profit[i-1])
  for (let i = 1; i <= n; i++) {
    // 找到结束时间小于等于第i份工作的开始时间的工作（就是索引为i-1的工作）
    let left = 0;
    let right = i - 1;
    let target = jobs[i - 1][0];
    while (left < right) {
      let mid = (left + right) >> 1;
      // 结束时间与target比较
      if (jobs[mid][1] > target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    dp[i] = Math.max(dp[i - 1], dp[left] + jobs[i - 1][2]);
  }
  return dp[n];
};
