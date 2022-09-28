/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-28 09:05:10                                                  *
 * @LastModifiedDate: 2022-09-28 09:41:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有些数的素因子只有 3，5，7，请设计一个算法找出第 k 个数。注意，不是必须有这些素因子，
// 而是必须不包含其他的素因子。例如，前几个数按顺序应该是 1，3，5，7，9，15，21。

/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
  let ans = 1;
  let n1 = [];
  let n2 = [];
  let n3 = [];
  while (k > 1) {
    let k1 = ans * 3;
    let k2 = ans * 5;
    let k3 = ans * 7;
    n1.push(k1);
    n2.push(k2);
    n3.push(k3);
    let min = Math.min(n1[0], n2[0], n3[0]);
    ans = min;
    if (n1[0] == min) {
      n1.shift();
    }
    if (n2[0] == min) {
      n2.shift();
    }
    if (n3[0] == min) {
      n3.shift();
    }
    k--;
  }
  return ans;
};

// 1
// 3        5            7 => 3
// 9        5 15         7 21   => 5
// 9 15     15 25        7 21 35  => 7
// 9 15     15 25 35     21 35 49 => 9
// 15 27    15 25 35 45  21 35 49 63 => 15
// 27
// 最小堆
class MinHeap {
  constructor() {
    this.heap = [];
  }

  getParentIndex(i) {
    return (i - 1) >> 1;
  }

  getLeftIndex(i) {
    return i * 2 + 1;
  }

  getRightIndex(i) {
    return i * 2 + 2;
  }

  shiftUp(index) {
    if (index === 0) {
      return;
    }
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }

  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }

  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }

  pop() {
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
    return this.heap[0];
  }

  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
  let ans = [1];
  let n1 = 0;
  let n2 = 0;
  let n3 = 0;
  for (let i = 1; i < k; i++) {
    let num1 = ans[n1] * 3;
    let num2 = ans[n2] * 5;
    let num3 = ans[n3] * 7;
    ans[i] = Math.min(num1, num2, num3);
    if (num1 == ans[i]) {
      n1++;
    }
    if (num2 == ans[i]) {
      n2++;
    }
    if (num3 == ans[i]) {
      n3++;
    }
  }
  return ans[k - 1];
};
