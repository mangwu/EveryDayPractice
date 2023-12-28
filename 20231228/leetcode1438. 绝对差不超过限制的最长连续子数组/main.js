/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-12-28 13:46:17                                                  *
 * @LastModifiedDate: 2023-12-28 15:40:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，和一个表示限制的整数 limit，请你返回最长连续子数组的长度，该子数组中的任意两个元素之间的绝对差必须小于或者等于 limit 。

// 如果不存在满足条件的子数组，则返回 0 。
class Q {
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
    if (value == null) return false;
    this.items[this.lowest--] = value;
    return true;
  }
  enqueueBack(value) {
    if (value == null) return false;
    this.items[this.highest++] = value;
    return true;
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
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  // 单调队列
  const queue = new Q();
  let res = 1;
  queue.enqueueBack([nums[0], 0]);
  let curRes = 1;
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    let curMax = queue.peekFront();
    // 出队比nums[i小的]
    while (!queue.isEmpty() && queue.peekBack()[0] < nums[i]) {
      queue.dequeueBack();
    }
    if (queue.isEmpty()) {
      // 说明nums[i] 比 curMax大，判断是否需要重置curRes
      if (nums[i] - curMax[0] <= limit) {
        curRes++; // 不需要
        res = Math.max(res, curRes);
      } else curRes = 1;
    } else {
      // nums[i]比较小，判断是否要进行出队操作
      if (curMax[0] - nums[i] <= limit) {
        curRes++; // 不需要
        res = Math.max(res, curRes);
      } else {
        // 进行出队操作
        while (!queue.isEmpty() && queue.peekFront()[0] - nums[i] > limit) {
          curMax = queue.dequeueFront();
        }
        // 重新计算curRes
        curRes = i - curMax[1];
        res = Math.max(res, curRes);
      }
    }
    // 最后都需要进行入队操作
    queue.enqueueBack([nums[i], i]);
  }
  return res;
};

/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  // 计算每个以nums[i]为底部元素的最长子数组的长度
  const incrementalQ = new Q(); // 递增队列
  const decreasingQ = new Q(); // 递减队列
  incrementalQ.enqueueBack(0);
  decreasingQ.enqueueBack(0);
  let res = 1;
  const n = nums.length;
  let pre = 1; // 记录上一个元素的最长子数组长度
  for (let i = 1; i < n; i++) {
    // 加入到两个队列中
    while (!incrementalQ.isEmpty() && nums[incrementalQ.peekBack()] > nums[i]) {
      incrementalQ.dequeueBack();
    }
    while (!decreasingQ.isEmpty() && nums[decreasingQ.peekBack()] < nums[i]) {
      decreasingQ.dequeueBack();
    }
    incrementalQ.enqueueBack(i);
    decreasingQ.enqueueBack(i);
    const curMin = nums[incrementalQ.peekFront()];
    const curMax = nums[decreasingQ.peekFront()];
    if (curMax - curMin <= limit) {
      pre++;
      res = Math.max(res, pre);
    } else {
      // 超出limit，需要进行出队操作
      if (curMin === nums[i]) {
        // nums[i] 过小导致的结果，需要出队decreasingQ
        while (
          !decreasingQ.isEmpty() &&
          nums[decreasingQ.peekFront()] - curMin > limit
        ) {
          pre = i - decreasingQ.dequeueFront();
        }
      } else if (curMax === nums[i]) {
        // nums[i] 过大导致的结果，需要出队incrementalQ
        while (
          !incrementalQ.isEmpty() &&
          curMax - nums[incrementalQ.peekFront()] > limit
        ) {
          pre = i - incrementalQ.dequeueFront();
        }
      }
      res = Math.max(res, pre);
    }
  }
  return res;
};
