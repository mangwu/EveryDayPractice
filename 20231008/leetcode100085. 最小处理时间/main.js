/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-10-08 10:34:48                                                  *
 * @LastModifiedDate: 2023-10-08 10:45:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你有 n 颗处理器，每颗处理器都有 4 个核心。现有 n * 4 个待执行任务，每个核心只执行 一个 任务。

// 给你一个下标从 0 开始的整数数组 processorTime ，表示每颗处理器最早空闲时间。另给你一个下标从 0 开始的整数数组 tasks ，表示执行每个任务所需的时间。返回所有任务都执行完毕需要的 最小时间 。

// 注意：每个核心独立执行任务。

/**
 * @param {number[]} processorTime
 * @param {number[]} tasks
 * @return {number}
 */
var minProcessingTime = function (processorTime, tasks) {
  tasks.sort((a, b) => a - b);
  // task的最大任务一定给processor中较小的哪一个
  // 另一个较大的processor应该处理较小的时间的任务
  processorTime.sort((a, b) => b - a);
  const n = processorTime.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    ans = Math.max(ans, processorTime[i] + tasks[4 * i + 3]);
  }
  return ans;
};

[56, 45, 36, 31, 26, 22, 15, 8],
  [5, 6, 7, 8, 9, 11, 12, 15, 16, 18, 19, 22, 24, 36, 38, 39, 42,45,46,48,51,52,53,55,56,58,62,68,69,70,72,73];
