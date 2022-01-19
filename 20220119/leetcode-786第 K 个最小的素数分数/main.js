/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-01-19 17:17:36                                                  *
 * @LastModifiedDate: 2022-01-19 19:22:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个按递增顺序排序的数组 arr 和一个整数 k 。数组 arr 由 1 和若干 素数  组成，且其中所有整数互不相同。

// 对于每对满足 0 <= i < j < arr.length 的 i 和 j ，可以得到分数 arr[i] / arr[j] 。

// 那么第 k 个最小的分数是多少呢?  以长度为 2 的整数数组返回你的答案, 这里 answer[0] == arr[i] 且 answer[1] == arr[j] 。

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
  // 此题和leetcode373查找最小的数对一样
  // 有了限制条件，i , j
  // 第一个索引和最后一个索引组成的索引明显是最小的
  // 设arr长度为n
  // [0, n-1] [0, n-2] ... [0, 1] 第一条序列
  // [1, n-1] [1, n-2] ... [1, 2] 第二条序列
  // [n-2, n-1] 第n-1条序列
  // 使用多路归并

  // 数组长度
  const len = arr.length;
  // 声明优先队列
  const pq = new PriorityQueue(
    (a, b) => arr[a[0]] / arr[a[1]] - arr[b[0]] / arr[b[1]] < 0
  );
  // n-1个序列首位入队
  for (let i = 0; i < len - 1; i++) {
    pq.offer([i, len - 1]);
  }
  // 出队，并且递减k
  while (pq.size > 0) {
    // 出队
    const idx = pq.poll();
    k--;
    if (k === 0) {
      // 返回结果
      return [arr[idx[0]], arr[idx[1]]];
    }
    // 入队
    if (idx[1] - 1 > idx[0]) pq.offer([idx[0], idx[1] - 1]);
  }
};

class PriorityQueue {
  constructor(compare = (a, b) => a - b < 0) {
    this.data = [];
    this.size = 0;
    this.compare = compare;
  }
  // 队首元素
  head() {
    return this.size > 0 ? this.data[0] : null;
  }
  // 队尾元素
  tail() {
    return this.size > 0 ? this.data[this.size - 1] : null;
  }
  // 出队
  poll() {
    if (this.size > 0) {
      this.size--;
      return this.data.shift();
    }
    return null;
  }
  // 入队
  offer(val) {
    this.binaryInsert(this.size++, val);
  }
  binaryInsert(idx, val) {
    // 声明搜索区域 [0, idx)
    let left = 0;
    let right = idx;
    while (left < right) {
      // 中间索引
      const mid = Math.floor((left + right) / 2);
      // 比较
      if (this.compare(this.data[mid], val)) {
        // val比mid大，选取右边区域 [mid + 1, right)
        left = mid + 1;
      } else {
        // 左边区域 [left, right)
        right = mid;
      }
    }
    // 插入
    this.data.splice(left, 0, val);
  }
}

console.log(kthSmallestPrimeFraction([1, 2, 3, 5, 7, 11, 17], 5));