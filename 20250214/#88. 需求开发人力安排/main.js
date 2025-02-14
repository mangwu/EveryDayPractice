/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-15 00:16:53                                                  *
 * @LastModifiedDate: 2025-02-15 01:21:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 部门在进行需求开发时需要进行人力安排。 当前部门需要完成 N 个需求，需求用 requirements 表述，requirements[i] 表示第 i 个需求的工作量大小，单位：人月。 这部分需求需要在 M 个月内完成开发，进行人力安排后每个月人力时固定的。 目前要求每个月最多有2个需求开发，并且每个月需要完成的需求不能超过部门人力。 请帮助部门评估在满足需求开发进度的情况下，每个月需要的最小人力是多少？

// 输入描述

// 输入为 M 和 requirements，M 表示需求开发时间要求，requirements 表示每个需求工作量大小，N 为 requirements长度，

// 1 ≤ N/2 ≤ M ≤ N ≤ 10000
// 1 ≤ requirements[i] ≤ 10^9
// 输出描述

// 对于每一组测试数据，输出部门需要人力需求，行末无多余的空格

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
  const m = parseInt(inputs[0]); // 时间要求
  const rq = inputs[1].split(" ").map((v) => parseInt(v)); // 每个需求的工作量
  const n = rq.length; // 需求个数
  if (m * 2 < n) {
    // 每个月最多完成两个需求，如果最多完成m * 2个需求
    console.log(-1);
    return;
  }
  rq.sort((a, b) => a - b);
  let left = 1;
  let right = 2 * Math.max.apply(null, rq);
  const check = (mid) => {
    // 检查每月人力是mid的情况下，能否完成所有需求
    let left = 0;
    let right = n - 1;
    let hour = 0;
    while (left < right) {
      if (rq[left] + rq[right] <= mid) {
        left++;
        right--;
        hour++;
      } else if (rq[right] <= mid) {
        right--;
        hour++;
      } else return false;
    }
    // 最后剩下一个单独的需求
    if (left === right && rq[left] <= mid) hour++;
    return hour <= m;
  };
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  console.log(left);
}
solution();
