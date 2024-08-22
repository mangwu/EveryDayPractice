/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-06-28 11:08:54                                                  *
 * @LastModifiedDate: 2024-06-28 17:44:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个长度为 n 下标从 0 开始的整数数组 cost 和 time ，分别表示给 n 堵不同的墙刷油漆需要的开销和时间。你有两名油漆匠：

// 一位需要 付费 的油漆匠，刷第 i 堵墙需要花费 time[i] 单位的时间，开销为 cost[i] 单位的钱。
// 一位 免费 的油漆匠，刷 任意 一堵墙的时间为 1 单位，开销为 0 。但是必须在付费油漆匠 工作 时，免费油漆匠才会工作。
// 请你返回刷完 n 堵墙最少开销为多少。

/**
 * @param {number[]} cost
 * @param {number[]} time
 * @return {number}
 */
var paintWalls = function (cost, time) {
  // 动态规划
  // dp[i][j] 前i位（0 ， i - 1）工匠，在免费工作的次数为j时的最小开销
  // 第 i + 1 位是付费工作，那么会得到time[i+1]免费工作的机会
  //  => dp[i+1][j + time[i+1]] = dp[i][j] +cost[i]
  // 第 i + 1 位是免费工作，那么应该减少一次免费工作的机会，但是不会增加花费
  // => dp[i+1][j-1] = dp[i][j]

  // 初始状态dp[0][0] 为0，即没有工匠，且没有免费工作机会的情况，初始花费为0
  // 其它状态应该都是Infinity，最终答案为j>=0的所有dp[i][j]的最小值
  let ans = Infinity;
  const n = cost.length;
  // j的下限为-n，上限为n
  const dp = new Array(n + 1)
    .fill(0)
    .map(() => new Array(2 * n + 1).fill(Infinity));
  dp[0][n] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= n * 2; j++) {
      // 付费
      dp[i][Math.min(n * 2, time[i - 1] + j)] = Math.min(
        dp[i][Math.min(n * 2, time[i - 1] + j)],
        dp[i - 1][j] + cost[i - 1]
      );
      ans = Math.min(ans, dp[i][Math.min(n * 2, time[i - 1] + j)]);
      // 免费
      if (j > 0) {
        dp[i][j - 1] = Math.min(dp[i][j - 1], dp[i - 1][j]);
        ans = Math.min(ans, dp[i][j - 1]);
      }
    }
  }
  return ans;
};
