/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-02-05 14:56:46                                                  *
 * @LastModifiedDate: 2024-02-05 15:33:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 科技馆内有一台虚拟观景望远镜，它可以用来观测特定纬度地区的地形情况。该纬度的海拔数据记于数组 heights ，其中 heights[i] 表示对应位置的海拔高度。请找出并返回望远镜视野范围 limit 内，可以观测到的最高海拔值。

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
  peekFront() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowest + 1];
  }
  peekBack() {
    if (this.isEmpty()) return undefined;
    return this.items[this.highest - 1];
  }
  enqueueFront(value) {
    this.items[this.lowest--] = value;
  }
  enqueueBack(value) {
    this.items[this.highest++] = value;
  }
  dequeueFront() {
    if (this.isEmpty()) return undefined;
    const res = this.items[++this.lowest];
    delete this.items[this.lowest];
    return res;
  }
  dequeueBack() {
    if (this.isEmpty()) return undefined;
    const res = this.items[--this.highest];
    delete this.items[this.highest];
    return res;
  }
}

/**
 * @param {number[]} heights
 * @param {number} limit
 * @return {number[]}
 */
var maxAltitude = function (heights, limit) {
  if (!heights.length) return [];
  // 单调队列
  const dq = new Dqueue();
  const n = heights.length;
  for (let i = 0; i < limit; i++) {
    while (!dq.isEmpty() && heights[dq.peekBack()] <= heights[i]) {
      dq.dequeueBack();
    }
    dq.enqueueBack(i);
  }
  const ans = [heights[dq.peekFront()]];
  for (let i = limit; i < n; i++) {
    while (!dq.isEmpty() && dq.peekFront() <= i - limit) {
      dq.dequeueFront();
    }
    while (!dq.isEmpty() && heights[dq.peekBack()] <= heights[i]) {
      dq.dequeueBack();
    }
    dq.enqueueBack(i);
    ans.push(heights[dq.peekFront()]);
  }
  return ans;
};
