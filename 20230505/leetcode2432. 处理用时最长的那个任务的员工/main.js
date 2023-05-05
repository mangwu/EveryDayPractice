/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-05 08:56:07                                                  *
 * @LastModifiedDate: 2023-05-05 09:01:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 共有 n 位员工，每位员工都有一个从 0 到 n - 1 的唯一 id 。

// 给你一个二维整数数组 logs ，其中 logs[i] = [idi, leaveTimei] ：

// idi 是处理第 i 个任务的员工的 id ，且
// leaveTimei 是员工完成第 i 个任务的时刻。所有 leaveTimei 的值都是 唯一 的。
// 注意，第 i 个任务在第 (i - 1) 个任务结束后立即开始，且第 0 个任务从时刻 0 开始。

// 返回处理用时最长的那个任务的员工的 id 。如果存在两个或多个员工同时满足，则返回几人中 最小 的 id 。

/**
 * @param {number} n
 * @param {number[][]} logs
 * @return {number}
 */
var hardestWorker = function (n, logs) {
  let maxTime = 0;
  let pre = 0;
  let res = n - 1;
  for (const log of logs) {
    const time = log[1] - pre;
    pre = log[1];
    if (time > maxTime) {
      res = log[0];
      maxTime = time;
    } else if (time === maxTime) {
      res = Math.min(res, log[0]);
    }
  }
  return res;
};
