/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-15 03:33:26                                                  *
 * @LastModifiedDate: 2025-02-15 03:33:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


// 小明和朋友们一起玩跳格子游戏， 每个格子上有特定的分数 score = [1, -1, -6, 7, -17, 7]， 从起点score[0]开始，每次最大的步长为k，请你返回小明跳到终点 score[n-1] 时，能得到的最大得分。

// 输入描述

// 第一行输入总的格子数量 n 第二行输入每个格子的分数 score[i] 第三行输入最大跳的步长 k

// 输出描述

// 输出最大得分

// 备注

// 格子的总长度 n 和步长 k 的区间在 [1, 100000] 每个格子的分数 score[i] 在 [-10000, 10000] 区间中

const rl = require("readline").createInterface({
  input: process.stdin,
});
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const n = parseInt(inputs[0]);
  const score = inputs[1].split(" ").map((v) => parseInt(v));
  const k = parseInt(inputs[2]);
  const dp = new Array(n).fill(-Infinity);
  dp[0] = score[0];
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= Math.max(0, i - k); j--) {
      dp[i] = Math.max(dp[i], dp[j] + score[i]);
    }
  }
  console.log(dp[n - 1]);
}

solution();