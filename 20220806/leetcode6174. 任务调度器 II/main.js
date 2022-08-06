/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-06 22:41:35                                                  *
 * @LastModifiedDate: 2022-08-06 23:36:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的正整数数组 tasks ，表示需要 按顺序 完成的任务，其中 tasks[i] 表示第 i 件任务的 类型 。

// 同时给你一个正整数 space ，表示一个任务完成 后 ，另一个 相同 类型任务完成前需要间隔的 最少 天数。

// 在所有任务完成前的每一天，你都必须进行以下两种操作中的一种：

// 完成 tasks 中的下一个任务
// 休息一天
// 请你返回完成所有任务所需的 最少 天数。

/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */
var taskSchedulerII = function (tasks, space) {
  const queue = new Array(space).fill(0); // 表示完成的任务，需要持续space天才能再次完成
  const set = new Set(); // 当时不能进行的任务
  const n = tasks.length;
  // const dp = new Map(n).fill()
  let idx = 0;
  let ans = 0;
  while (idx < n) {
    ans++;
    if (set.has(tasks[idx])) {
      // 今天休息
      // 休息完毕，queue中任务减去一天
      let task = queue.shift();
      set.delete(task);
      queue.push(0);
    } else {
      // 今天工作
      set.add(tasks[idx]);
      queue.push(tasks[idx]);
      idx++;
      let task = queue.shift();
      set.delete(task);
    }
  }
  return ans;
};

/**
 * @param {number[]} tasks
 * @param {number} space
 * @return {number}
 */
var taskSchedulerII = function (tasks, space) {
  const hash = new Map(); // 当时不能进行的任务
  const n = tasks.length;
  let idx = 0;
  let ans = 0;
  while (idx < n) {
    if (hash.has(tasks[idx])) {
      // 今天休息
      // 获取休息天数
      const days = hash.get(tasks[idx]);
      ans += days + 1;
      hash.delete(tasks[idx]);
      // 遍历tasks，修改天数
      for (const [key, val] of [...hash]) {
        if (val <= days + 1) {
          hash.delete(key);
        } else {
          hash.set(key, val - days - 1);
        }
      }
      hash.set(tasks[idx], space);
    } else {
      // 今天工作
      ans++;
      // 遍历tasks，修改天数
      for (const [key, val] of [...hash]) {
        if (val <= 1) {
          hash.delete(key);
        } else {
          hash.set(key, val - 1);
        }
      }
      hash.set(tasks[idx], space);
    }
    idx++;
  }
  return ans;
};
