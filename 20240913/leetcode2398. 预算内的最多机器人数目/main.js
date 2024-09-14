/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-09-13 10:14:50                                                  *
 * @LastModifiedDate: 2024-09-14 10:04:31                                      *
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
      sum * (i - left + 1) + chargeTimes[dq.peekFront()] > budget
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

// [3,6,1,3,4,8,5,2,4,2,6,9]
// [2,1,3,4,5,2,5,8,9,6,4,1]
// 0 0
// 2 Dqueue { items: { '1': 0 }, lowest: 0, highest: 2 }
// 0 1
// 3 Dqueue { items: { '1': 1 }, lowest: 0, highest: 2 }
// 0 2
// 6 Dqueue { items: { '1': 1, '2': 2 }, lowest: 0, highest: 3 }
// 0 3
// 10 Dqueue { items: { '1': 1, '2': 3 }, lowest: 0, highest: 3 }
// 0 4
// 15 Dqueue { items: { '1': 1, '2': 4 }, lowest: 0, highest: 3 }
// peekFront 5 1
// peekFront 5 2
// 2 5
// 14 Dqueue { items: { '1': 5 }, lowest: 0, highest: 2 }
// peekFront 5 3
// 3 6
// 16 Dqueue { items: { '1': 5, '2': 6 }, lowest: 0, highest: 3 }
// peekFront 5 4
// peekFront 5 5
// 5 7
// 15 Dqueue { items: { '1': 5, '2': 6, '3': 7 }, lowest: 0, highest: 4 }
// peekFront 5 6
// 6 8
// 22 Dqueue { items: { '2': 6, '3': 8 }, lowest: 1, highest: 4 }
// 6 9
// 28 Dqueue { items: { '2': 6, '3': 8, '4': 9 }, lowest: 1, highest: 5 }
// peekFront 10 7
// peekFront 10 8
// 8 10
// 19 Dqueue { items: { '2': 10 }, lowest: 1, highest: 3 }
// peekFront 11 9
// 9 11
// 11 Dqueue { items: { '2': 11 }, lowest: 1, highest: 3 }
