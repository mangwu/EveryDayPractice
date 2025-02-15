/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-15 19:17:00                                                  *
 * @LastModifiedDate: 2025-02-15 19:43:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 在某个项目中有多个任务（用task数组表示）需要你进行处理，其中：

// task[i] = [si, ei]
// 你可以在 si ≤ day ≤ ei 中的任意一天处理该任务，请返回你可以处理的最大任务数。

// 输入描述

// 第一行为任务数量 n

// 1 ≤ n ≤ 100000
// 后面 n 行表示各个任务的开始时间和终止时间，使用 si，ei 表示

// 1 ≤ si ≤ ei ≤ 100000
// 输出描述

// 输出为一个整数，表示可以处理的最大任务数。

const rl = require("readline").createInterface({
  input: process.stdin,
});
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;
class PQ {
  constructor(compareFn = (a, b) => a - b) {
    this.items = [];
    this.compareFn = compareFn;
  }
  size() {
    return this.items.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  getLeftIdx(idx) {
    return idx * 2 + 1;
  }
  getRightIdx(idx) {
    return idx * 2 + 2;
  }
  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }
  swap(a, b) {
    [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
  }
  compare(a, b) {
    return this.compareFn(this.items[a], this.items[b]);
  }
  peek() {
    return this.items[0];
  }
  poll() {
    if (this.isEmpty()) return;
    const size = this.size();
    if (size === 1) return this.items.pop();
    this.swap(0, size - 1);
    const res = this.items.pop();
    this.shiftDown();
    return res;
  }
  shiftDown() {
    let idx = 0;
    let temp = 0;
    const size = this.size();
    while (idx < size) {
      const leftIdx = this.getLeftIdx(idx);
      const rightIdx = this.getRightIdx(idx);
      if (leftIdx < size && this.compare(idx, leftIdx) > 0) idx = leftIdx;
      if (rightIdx < size && this.compare(idx, rightIdx) > 0) idx = rightIdx;
      if (idx !== temp) {
        this.swap(idx, temp);
        temp = idx;
      } else break;
    }
  }
  insert(value) {
    this.items.push(value);
    this.shiftUp();
  }
  shiftUp() {
    let idx = this.size() - 1;
    let parentIdx = this.getParentIdx(idx);
    while (parentIdx >= 0 && this.compare(idx, parentIdx) < 0) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.getParentIdx(idx);
    }
  }
}
async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  // 结束时间最早的优先解决，如果结束时间相同，那么开始时间早的优先解决
  const n = parseInt(inputs[0]); // 任务数量
  const hash = new Map();
  let minStartTime = Infinity;
  let maxEndTime = -Infinity;
  for (let i = 1; i <= n; i++) {
    const [start, end] = inputs[i].split(" ").map((v) => parseInt(v));
    const arr = hash.get(start) || [];
    arr.push(end);
    hash.set(start, arr);
    minStartTime = Math.min(minStartTime, start);
    maxEndTime = Math.max(maxEndTime, end);
  }
  let curTime = minStartTime; // 开始时间
  const pq = new PQ((a, b) => a[1] - b[1]); // 结束时间最早的先出栈
  let res = 0;
  while (curTime <= maxEndTime) {
    // 将不满足条件的出队列
    while (!pq.isEmpty() && pq.peek()[1] < curTime) pq.poll();
    // 加入当前结束时间的任务
    for (const endTime of hash.get(curTime) || []) {
      pq.insert([curTime, endTime]);
    }
    // 检查是否有可执行任务
    if (!pq.isEmpty()) {
      res++;
      pq.poll();
    }
    curTime++;
  }
  console.log(res);
}
solution();
