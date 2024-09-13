/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-09-13 10:14:50                                                  *
 * @LastModifiedDate: 2024-09-13 18:10:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你有 n 个机器人，给你两个下标从 0 开始的整数数组 chargeTimes 和 runningCosts ，两者长度都为 n 。第 i 个机器人充电时间为 chargeTimes[i] 单位时间，花费 runningCosts[i] 单位时间运行。再给你一个整数 budget 。

// 运行 k 个机器人 总开销 是 max(chargeTimes) + k * sum(runningCosts) ，其中 max(chargeTimes) 是这 k 个机器人中最大充电时间，sum(runningCosts) 是这 k 个机器人的运行时间之和。

// 请你返回在 不超过 budget 的前提下，你 最多 可以 连续 运行的机器人数目为多少。

class Dqueue {
  constructor() {
    this.items = {};
    this.lowest = 0;
    this.highest = 1;
  }
  size() {
    return this.highest - this.lowest - 1;
  }
  isEmpty() {
    return this.size() === 0;
  }
  enqueueFront(value) {
    this.items[this.lowest--] = value;
  }
  enqueueBack(value) {
    this.items[this.highest++] = value;
  }
  peekFront() {
    if (this.isEmpty()) return;
    return this.items[this.lowest + 1];
  }
  peekBack() {
    if (this.isEmpty()) return;
    return this.items[this.highest - 1];
  }
  dequeueFront() {
    if (this.isEmpty()) return;
    const res = this.items[++this.lowest];
    delete this.items[this.lowest];
    return res;
  }
  dequeueBack() {
    if (this.isEmpty()) return;
    const res = this.items[--this.highest];
    delete this.items[this.highest];
    return res;
  }
}

/**
 * @param {number[]} chargeTimes
 * @param {number[]} runningCosts
 * @param {number} budget
 * @return {number}
 */
var maximumRobots = function (chargeTimes, runningCosts, budget) {
  // 单调递减队列，滑动窗口
  const dq = new Dqueue();
  let sum = 0;
  let res = 0;
  let left = 0;
  const n = chargeTimes.length;
  for (let i = 0; i < n; i++) {
    // 弹入当前元素
    sum += runningCosts[i];
    while (!dq.isEmpty() && chargeTimes[dq.peekBack()] < chargeTimes[i]) {
      dq.dequeueBack();
    }
    dq.enqueueBack(i);
    while (
      left < n &&
      !dq.isEmpty() &&
      sum + (i - left + 1) * chargeTimes[dq.peekFront()] > budget
    ) {
      sum -= runningCosts[left++];
      while (!dq.isEmpty() && dq.peekFront() < left) dq.dequeueFront();
    }
    if (!dq.isEmpty()) {
      res = Math.max(res, i - left + 1);
    }
  }
  return res;
};
