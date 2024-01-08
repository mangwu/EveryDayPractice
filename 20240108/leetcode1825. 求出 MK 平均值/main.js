/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-08 14:49:45                                                  *
 * @LastModifiedDate: 2024-01-08 17:34:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个整数 m 和 k ，以及数据流形式的若干整数。你需要实现一个数据结构，计算这个数据流的 MK 平均值 。

// MK 平均值 按照如下步骤计算：

// 如果数据流中的整数少于 m 个，MK 平均值 为 -1 ，否则将数据流中最后 m 个元素拷贝到一个独立的容器中。
// 从这个容器中删除最小的 k 个数和最大的 k 个数。
// 计算剩余元素的平均值，并 向下取整到最近的整数 。
// 请你实现 MKAverage 类：

// MKAverage(int m, int k) 用一个空的数据流和两个整数 m 和 k 初始化 MKAverage 对象。
// void addElement(int num) 往数据流中插入一个新的元素 num 。
// int calculateMKAverage() 对当前的数据流计算并返回 MK 平均数 ，结果需 向下取整到最近的整数 。

// 优点队列，延迟删除
class PQ {
  constructor(compareFn = (a, b) => a - b) {
    this.compareFn = compareFn;
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  compare(a, b) {
    return this.compareFn(this.heap[a], this.heap[b]);
  }
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
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
  peek() {
    if (this.isEmpty()) return undefined;
    return this.heap[0];
  }
  insert(value) {
    if (value == null) return false;
    this.heap.push(value);
    this.shiftUp();
    return true;
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
  poll() {
    if (this.isEmpty()) return undefined;
    const size = this.size();
    if (size === 1) return this.heap.pop();
    this.swap(0, size - 1);
    const res = this.heap.pop();
    this.shiftDown();
    return res;
  }
  shiftDown() {
    let idx = 0;
    const size = this.size();
    let temp = idx;
    while (idx < size) {
      const leftIdx = this.getLeftIdx(idx);
      const rightIdx = this.getRightIdx(idx);
      if (leftIdx < size && this.compare(idx, leftIdx) > 0) {
        idx = leftIdx;
      }
      if (rightIdx < size && this.compare(idx, rightIdx) > 0) {
        idx = rightIdx;
      }
      if (idx !== temp) {
        this.swap(idx, temp);
        temp = idx;
      } else break;
    }
  }
}

/**
 * @param {number} m
 * @param {number} k
 */
var MKAverage = function (m, k) {
  this.data = [];
  this.incrementalPQ = new PQ((a, b) => this.data[a] - this.data[b]);
  this.decrementalPQ = new PQ((a, b) => this.data[b] - this.data[a]);
  this.windowSize = m;
  this.deleteNum = k;
  this.totalSum = 0;
};

/**
 * @param {number} num
 * @return {void}
 */
MKAverage.prototype.addElement = function (num) {
  if (this.data.length < this.windowSize) {
    this.data.push(num);
    this.totalSum += num;
    this.incrementalPQ.insert(this.data.length - 1);
    this.decrementalPQ.insert(this.data.length - 1);
  } else if (this.data.length === this.windowSize) {
    // 相等，计算
  } else {

  }
};

/**
 * @return {number}
 */
MKAverage.prototype.calculateMKAverage = function () {};

/**
 * Your MKAverage object will be instantiated and called as such:
 * var obj = new MKAverage(m, k)
 * obj.addElement(num)
 * var param_2 = obj.calculateMKAverage()
 */
