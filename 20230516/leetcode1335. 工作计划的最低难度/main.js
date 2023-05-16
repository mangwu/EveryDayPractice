/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-16 21:52:11                                                  *
 * @LastModifiedDate: 2023-05-16 22:41:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你需要制定一份 d 天的工作计划表。工作之间存在依赖，
// 要想执行第 i 项工作，你必须完成全部 j 项工作（ 0 <= j < i）。

// 你每天 至少 需要完成一项任务。工作计划的总难度是这 d 天每一天的难度之和，
// 而一天的工作难度是当天应该完成工作的最大难度。

// 给你一个整数数组 jobDifficulty 和一个整数 d，分别代表工作难度和需要计划的天数。
// 第 i 项工作的难度是 jobDifficulty[i]。

// 返回整个工作计划的 最小难度 。如果无法制定工作计划，则返回 -1 。

/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function (jobDifficulty, d) {
  const n = jobDifficulty.length;
  if (d > n) return -1;
  const dp = new Array(n + 1).fill(0).map(() => new Array(d + 1).fill(0));
  // dp[i][j] 前 i 项任务在 j 天完成的最小难度 i >= j
  let cur = jobDifficulty[0];
  for (let i = 1; i <= n; i++) {
    cur = Math.max(cur, jobDifficulty[i - 1]);
    dp[i][1] = cur;
  }
  for (let j = 2; j <= d; j++) {
    // j 天内完成 i 项任务
    for (let i = j; i <= n; i++) {
      // 第 j 天任务可以选择完成 1 项，也可以选择完成 i - j + 1 项
      let cur = jobDifficulty[i - 1] + dp[i - 1][j - 1];
      let maxDiff = jobDifficulty[i - 1];
      for (let k = i; k >= j; k--) {
        // 3 => 4  => k = 4 , k = 3
        maxDiff = Math.max(maxDiff, jobDifficulty[k - 1]);
        cur = Math.min(cur, maxDiff + dp[k - 1][j - 1]);
      }
      dp[i][j] = cur;
    }
  }
  console.log(dp);
  return dp[n][d];
};
