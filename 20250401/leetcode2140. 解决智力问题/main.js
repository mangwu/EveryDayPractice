/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-04-01 09:12:39                                                  *
 * @LastModifiedDate: 2025-04-01 10:02:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的二维整数数组 questions ，其中 questions[i] = [pointsi, brainpoweri] 。

// 这个数组表示一场考试里的一系列题目，你需要 按顺序 （也就是从问题 0 开始依次解决），针对每个问题选择 解决 或者 跳过 操作。解决问题 i 将让你 获得  pointsi 的分数，但是你将 无法 解决接下来的 brainpoweri 个问题（即只能跳过接下来的 brainpoweri 个问题）。如果你跳过问题 i ，你可以对下一个问题决定使用哪种操作。

// 比方说，给你 questions = [[3, 2], [4, 3], [4, 4], [2, 5]] ：
// 如果问题 0 被解决了， 那么你可以获得 3 分，但你不能解决问题 1 和 2 。
// 如果你跳过问题 0 ，且解决问题 1 ，你将获得 4 分但是不能解决问题 2 和 3 。
// 请你返回这场考试里你能获得的 最高 分数。

/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
  const n = questions.length;
  // 动态规划
  // pre是上次的选择
  const cache = new Array(n).fill(0).map(() => new Map());
  const dfs = (i, pre) => {
    if (i === n) return 0;
    if (cache[i].has(pre)) return cache[i].get(pre);
    // 不选择当前i
    let res = dfs(i + 1, pre);
    // 检查能否选择当前元素
    if (pre === -1 || pre + questions[pre][1] < i) {
      res = Math.max(res, dfs(i + 1, i) + questions[i][0]);
    }
    cache[i].set(pre, res);
    return res;
  };
  return dfs(0, -1);
};

const random = require("../../publicFunc/random/random");

/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
  const n = questions.length;
  // 倒叙动态规划，dp[i]表示解决从i开始的后续所有题目组成的问题能获得的分数
  const dp = new Array(n + 1).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    // 不解决当前问题：dp[i+1]
    // 解决当前问题：dp[i+ q[i][1] + 1] + q[i][0]
    dp[i] = Math.max(
      dp[i + 1],
      dp[Math.min(n, i + questions[i][1] + 1)] + questions[i][0]
    );
  }
  return dp[0];
};

console.log(
  mostPoints(
    random.randomArr(10, 1, 3).map(() => random.randomArr(2, 1, 2))
  )
);
