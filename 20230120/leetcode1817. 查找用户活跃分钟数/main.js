/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-20 20:00:28                                                  *
 * @LastModifiedDate: 2023-01-20 22:21:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你用户在 LeetCode 的操作日志，和一个整数 k 。日志用一个二维整数数组 logs 表示，其中每个 logs[i] = [IDi, timei] 表示 ID 为 IDi 的用户在 timei 分钟时执行了某个操作。

// 多个用户 可以同时执行操作，单个用户可以在同一分钟内执行 多个操作 。

// 指定用户的 用户活跃分钟数（user active minutes，UAM） 定义为用户对 LeetCode 执行操作的 唯一分钟数 。 即使一分钟内执行多个操作，也只能按一分钟计数。

// 请你统计用户活跃分钟数的分布情况，统计结果是一个长度为 k 且 下标从 1 开始计数 的数组 answer ，对于每个 j（1 <= j <= k），answer[j] 表示 用户活跃分钟数 等于 j 的用户数。

// 返回上面描述的答案数组 answer 。

/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  const ans = new Array(k).fill(0);
  const hash = new Map();
  for (const log of logs) {
    hash.has(log[0])
      ? hash.get(log[0]).add(log[1])
      : hash.set(log[0], new Set([log[1]]));
  }
  for (const [_key, value] of hash) {
    ans[value.size - 1]++;
  }
  return ans;
};

/**
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  const ans = new Array(k).fill(0);
  logs.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  let pre0 = logs[0][0];
  let pre1 = null;
  let cur = 0;
  for (const log of logs) {
    if (log[0] !== pre0) {
      ans[cur - 1]++;
      pre0 = log[0];
      pre1 = log[1];
      cur = 1;
    } else if (log[1] !== pre1) {
      cur++;
      pre1 = log[1];
    }
  }
  ans[cur - 1]++;
  return ans;
};
