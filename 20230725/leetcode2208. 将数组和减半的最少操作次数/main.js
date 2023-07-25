/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-25 08:49:44                                                  *
 * @LastModifiedDate: 2023-07-25 09:07:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数数组 nums 。每一次操作中，你可以从 nums 中选择 任意 一个数并将它减小到 恰好 一半。（注意，在后续操作中你可以对减半过的数继续执行操作）

// 请你返回将 nums 数组和 至少 减少一半的 最少 操作数。
class MinHeap {
  constructor(compareFunc = (a, b) => a < b) {
    this.compare = compareFunc;
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  add(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  poll() {
    if (this.size === 0) {
      return null;
    }
    if (this.size === 1) {
      return this.heap.pop();
    }
    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return max;
  }

  heapifyUp() {
    let currentIndex = this.size - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (this.compare(this.heap[currentIndex], this.heap[parentIndex])) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
  }

  heapifyDown() {
    let currentIndex = 0;
    while (currentIndex < this.size) {
      let largestIndex = currentIndex;
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;
      if (
        leftChildIndex < this.size &&
        this.compare(this.heap[leftChildIndex], this.heap[largestIndex])
      ) {
        largestIndex = leftChildIndex;
      }
      if (
        rightChildIndex < this.size &&
        this.compare(this.heap[rightChildIndex], this.heap[largestIndex])
      ) {
        largestIndex = rightChildIndex;
      }
      if (largestIndex !== currentIndex) {
        [this.heap[currentIndex], this.heap[largestIndex]] = [
          this.heap[largestIndex],
          this.heap[currentIndex],
        ];
        currentIndex = largestIndex;
      } else {
        break;
      }
    }
  }
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var halveArray = function (nums) {
  // 每次选取最大值进行减少
  let sum = 0;
  const heap = new MinHeap((a, b) => a > b);
  for (const num of nums) {
    sum += num;
    heap.add(num);
  }
  let cur = sum;
  let res = 0;
  while (cur > sum / 2) {
    const nxt = heap.poll();
    cur -= nxt / 2;
    heap.add(nxt / 2);
    res++;
  }
  return res;
};
