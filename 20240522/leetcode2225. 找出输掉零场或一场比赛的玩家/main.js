/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-05-22 09:38:40                                                  *
 * @LastModifiedDate: 2024-05-22 09:51:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 matches 其中 matches[i] = [winneri, loseri] 表示在一场比赛中 winneri 击败了 loseri 。

// 返回一个长度为 2 的列表 answer ：

// answer[0] 是所有 没有 输掉任何比赛的玩家列表。
// answer[1] 是所有恰好输掉 一场 比赛的玩家列表。
// 两个列表中的值都应该按 递增 顺序返回。

// 注意：

// 只考虑那些参与 至少一场 比赛的玩家。
// 生成的测试用例保证 不存在 两场比赛结果 相同 。

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  const hash = new Map(); // hito: [winNum, loseNum]
  for (const [winner, loser] of matches) {
    hash.has(winner) ? hash.get(winner)[0]++ : hash.set(winner, [1, 0]);
    hash.has(loser) ? hash.get(loser)[1]++ : hash.set(loser, [0, 1]);
  }
  const ans = [[], []];
  for (const [person, [winNum, loseNum]] of hash) {
    if (loseNum === 0) ans[0].push(person);
    else if (loseNum === 1) ans[1].push(person);
  }
  ans[0].sort((a, b) => a - b);
  ans[1].sort((a, b) => a - b);
  return ans;
};

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  const hash = new Map(); // hito: [winNum, loseNum]
  for (const [winner, loser] of matches) {
    hash.set(loser, (hash.get(loser) | 0) + 1);
    !hash.has(winner) && hash.set(winner, 0);
  }
  const ans = [[], []];
  for (const [person, loseNum] of hash) {
    if (loseNum === 0) ans[0].push(person);
    else if (loseNum === 1) ans[1].push(person);
  }
  ans[0].sort((a, b) => a - b);
  ans[1].sort((a, b) => a - b);
  return ans;
};
