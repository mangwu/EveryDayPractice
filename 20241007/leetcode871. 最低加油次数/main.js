/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-10-07 23:08:12                                                  *
 * @LastModifiedDate: 2024-10-08 01:16:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 汽车从起点出发驶向目的地，该目的地位于出发位置东面 target 英里处。

// 沿途有加油站，用数组 stations 表示。其中 stations[i] = [positioni, fueli] 表示第 i 个加油站位于出发位置东面 positioni 英里处，并且有 fueli 升汽油。

// 假设汽车油箱的容量是无限的，其中最初有 startFuel 升燃料。它每行驶 1 英里就会用掉 1 升汽油。当汽车到达加油站时，它可能停下来加油，将所有汽油从加油站转移到汽车中。

// 为了到达目的地，汽车所必要的最低加油次数是多少？如果无法到达目的地，则返回 -1 。

// 注意：如果汽车到达加油站时剩余燃料为 0，它仍然可以在那里加油。如果汽车到达目的地时剩余燃料为 0，仍然认为它已经到达目的地。

/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function (target, startFuel, stations) {
  const n = stations.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = startFuel;
  // dp[i] 为加油i次能到达的最大距离
  // 遍历stations，前面加油j次能到达当前加油站，则更新j+1次的最大值
  for (let i = 0; i < n; i++) {
    const [pos, gas] = stations[i];
    for (let j = i; j >= 0; j--) {
      if (dp[j] >= pos) {
        dp[j + 1] = Math.max(dp[j + 1], dp[j] + gas);
      }
    }
  }
  for (let i = 0; i <= n; i++) {
    if (dp[i] >= target) return i;
  }
  return -1;
};
