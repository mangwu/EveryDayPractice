/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-09 10:30:46                                                  *
 * @LastModifiedDate: 2022-10-09 10:36:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
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
  let ans = n;
  let max = -Infinity;
  let pre = 0;
  for (const log of logs) {
    let cur = log[1] - pre;
    if (cur > max) {
      ans = log[0];
      max = cur;
    } else if (cur == max) {
      ans = Math.min(ans, log[0]);
    }
    pre = log[1];
  }
  return ans;
};
