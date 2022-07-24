/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-23 22:47:07                                                  *
 * @LastModifiedDate: 2022-07-23 23:17:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 设计一个数字容器系统，可以实现以下功能：

// 在系统中给定下标处 插入 或者 替换 一个数字。
// 返回 系统中给定数字的最小下标。
// 请你实现一个 NumberContainers 类：

// NumberContainers() 初始化数字容器系统。
// void change(int index, int number) 在下标 index 处填入 number 。
// 如果该下标 index 处已经有数字了，那么用 number 替换该数字。
// int find(int number) 返回给定数字 number 在系统中的最小下标。如果系统中没有 number ，那么返回 -1 。

var NumberContainers = function () {
  this.idx2Num = new Map();
  this.num2Idx = new Map();
};

/**
 * @param {number} index
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function (index, number) {
  if (this.idx2Num.has(index)) {
    // 已经有的index
    // 原始数字的索引集合
    let pq = this.num2Idx.get(this.idx2Num.get(index));
    pq.deleteNum(index);
    this.idx2Num.set(index, number);
    if (this.num2Idx.has(number)) {
      // 有number
      let pq2 = this.num2Idx.get(number);
      pq2.addNum(index);
    } else {
      const pq2 = new PriorityQueue();
      pq2.addNum(index);
      this.num2Idx.set(number, pq2);
    }
  } else {
    // 新index
    this.idx2Num.set(index, number);
    // 是否是新数字
    if (this.num2Idx.has(number)) {
      // 不是新数字
      let pq2 = this.num2Idx.get(number);
      pq2.addNum(index);
    } else {
      const pq2 = new PriorityQueue();
      pq2.addNum(index);
      this.num2Idx.set(number, pq2);
    }
  }
};

/**
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function (number) {
  const pq = this.num2Idx.get(number);
  if (pq && pq.size > 0) {
    return pq.header();
  }
  return -1;
};

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */

class PriorityQueue {
  constructor(compare = (a, b) => a - b) {
    this.compare = compare;
    this.data = [];
    this.size = 0;
  }
  header() {
    if (this.size > 0) {
      return this.data[0];
    }
    return undefined;
  }
  tailer() {
    if (this.size > 0) {
      return this.data[this.size - 1];
    }
  }
  deleteNum(target) {
    // 删除指定数字
    let idx = this.binarySearch(target);
    this.data.splice(idx, 1);
    this.size--;
  }
  // 添加新元素
  addNum(target) {
    // 查找位置
    let idx = this.binarySearch(target);
    this.data.splice(idx, 0, target);
    this.size++;
  }
  binarySearch(val) {
    let left = 0;
    let right = this.size;
    while (left < right) {
      let mid = (left + right) >> 1;
      if (val == this.data[mid]) {
        return mid;
      } else if (this.compare(val, this.data[mid]) > 0) {
        // 找到第一个比val大的值
        // val在mid之后
        left = mid + 1;
      } else {
        // val在mid之前
        right = mid;
      }
    }
    return right;
  }
}
