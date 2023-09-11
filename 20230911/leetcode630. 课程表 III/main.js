/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-11 08:57:23                                                  *
 * @LastModifiedDate: 2023-09-11 11:08:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 这里有 n 门不同的在线课程，按从 1 到 n 编号。给你一个数组 courses ，其中 courses[i] = [durationi, lastDayi] 表示第 i 门课将会 持续 上 durationi 天课，并且必须在不晚于 lastDayi 的时候完成。

// 你的学期从第 1 天开始。且不能同时修读两门及两门以上的课程。

// 返回你最多可以修读的课程数目。
class MinHeap {
  constructor(compareFn = (a, b) => a - b) {
    this.compare = compareFn;
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  getParentIdx(idx) {
    if (idx === 0) return -1;
    return Math.floor((idx - 1) / 2);
  }
  getLeftIdx(idx) {
    return idx * 2 + 1;
  }
  getRightIdx(idx) {
    return idx * 2 + 2;
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.heap[0];
  }
  insert(value) {
    if (value === null) return false;
    this.heap.push(value);
    this.shiftUp();
    return true;
  }
  shiftUp() {
    let idx = this.size() - 1;
    let parentIdx = this.getParentIdx(idx);
    while (idx > 0 && this.compare(this.heap[idx], this.heap[parentIdx]) < 0) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.getParentIdx(idx);
    }
  }
  poll() {
    if (this.isEmpty()) return undefined;
    const size = this.size();
    if (size === 1) return this.heap.pop();
    this.swap(0, size - 1);
    const removeValue = this.heap.pop();
    this.shiftDown();
    return removeValue;
  }
  shiftDown() {
    let idx = 0;
    const size = this.size();
    let temp = idx;
    while (idx < size) {
      const leftIdx = this.getLeftIdx(idx);
      const rightIdx = this.getRightIdx(idx);
      if (
        leftIdx < size &&
        this.compare(this.heap[idx], this.heap[leftIdx]) > 0
      ) {
        idx = leftIdx;
      }
      if (
        rightIdx < size &&
        this.compare(this.heap[idx], this.heap[rightIdx]) > 0
      ) {
        idx = rightIdx;
      }
      if (temp !== idx) {
        this.swap(temp, idx);
        temp = idx;
      } else break;
    }
  }
}
/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function (courses) {
  // 过滤掉不符合题意的课程并排序
  courses = courses.filter((v) => v[0] <= v[1]).sort((a, b) => a[1] - b[1]);
  // 对于两门课 (t1,d1)和 (t2,d2)，如果后者的关闭时间较晚，即
  // d1≤d2，那么我们先学习前者，再学习后者，总是最优的。
  const pq = new MinHeap((a, b) => b - a);
  let curTime = 0;
  for (const [time, last] of courses) {
    if (curTime + time <= last) {
      curTime += time;
      pq.insert(time);
    } else if (!pq.isEmpty() && pq.peek() > time) {
      // 保证替换的
      curTime += time - pq.poll();
      pq.insert(time);
    }
  }
  return pq.size();
};


