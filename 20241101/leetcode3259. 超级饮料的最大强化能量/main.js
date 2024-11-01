/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-11-01 09:27:36                                                  *
 * @LastModifiedDate: 2024-11-01 09:45:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 来自未来的体育科学家给你两个整数数组 energyDrinkA 和 energyDrinkB，数组长度都等于 n。这两个数组分别代表 A、B 两种不同能量饮料每小时所能提供的强化能量。

// 你需要每小时饮用一种能量饮料来 最大化 你的总强化能量。然而，如果从一种能量饮料切换到另一种，你需要等待一小时来梳理身体的能量体系（在那个小时里你将不会获得任何强化能量）。

// 返回在接下来的 n 小时内你能获得的 最大 总强化能量。

// 注意 你可以选择从饮用任意一种能量饮料开始。

/**
 * @param {number[]} energyDrinkA
 * @param {number[]} energyDrinkB
 * @return {number}
 */
var maxEnergyBoost = function (energyDrinkA, energyDrinkB) {
  const n = energyDrinkA.length;
  const dp = new Array(n).fill(0).map((v) => new Array(2).fill(0));
  // [a,b]
  dp[0][0] = energyDrinkA[0];
  dp[0][1] = energyDrinkB[0];
  dp[1][0] = energyDrinkA[0] + energyDrinkA[1];
  dp[1][1] = energyDrinkB[0] + energyDrinkB[1];
  let res = Math.max(dp[1][0], dp[1][1]);
  for (let i = 2; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 2][1]) + energyDrinkA[i];
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 2][0]) + energyDrinkB[i];
    res = Math.max(res, dp[i][0], dp[i][1]);
  }
  return res;
};

/**
 * @param {number[]} energyDrinkA
 * @param {number[]} energyDrinkB
 * @return {number}
 */
var maxEnergyBoost = function (energyDrinkA, energyDrinkB) {
  const n = energyDrinkA.length;
  // [a,b]
  let a0 = energyDrinkA[0];
  let b0 = energyDrinkB[0];
  let a1 = energyDrinkA[0] + energyDrinkA[1];
  let b1 = energyDrinkB[0] + energyDrinkB[1];
  let res = Math.max(a1, b1);
  for (let i = 2; i < n; i++) {
    const curA = Math.max(a1, b0) + energyDrinkA[i];
    const curB = Math.max(b1, a0) + energyDrinkB[i];
    (a0 = a1), (b0 = b1), (a1 = curA), (b1 = curB);
    res = Math.max(res, curA, curB);
  }
  return res;
};
