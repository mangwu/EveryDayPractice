/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-03 23:44:02                                                  *
 * @LastModifiedDate: 2022-09-03 23:47:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你有 n 个机器人，给你两个下标从 0 开始的整数数组 chargeTimes 和 runningCosts ，两者长度都为 n 。
// 第 i 个机器人充电时间为 chargeTimes[i] 单位时间，花费 runningCosts[i] 单位时间运行。
// 再给你一个整数 budget 。

// 运行 k 个机器人 总开销 是 max(chargeTimes) + k * sum(runningCosts) ，其中 max(chargeTimes)
// 是这 k 个机器人中最大充电时间，sum(runningCosts) 是这 k 个机器人的运行时间之和。

// 请你返回在 不超过 budget 的前提下，你 最多 可以 连续 运行的机器人数目为多少。

/**
 * @param {number[]} chargeTimes
 * @param {number[]} runningCosts
 * @param {number} budget
 * @return {number}
 */
var maximumRobots = function (chargeTimes, runningCosts, budget) {
  let sum = 0;
  const n = chargeTimes.length;
  let max = 0;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, chargeTimes[i]);
    sum += runningCosts[i];
  }
  
};
