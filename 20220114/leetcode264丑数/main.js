/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-01-15 16:38:28                                                  *
 * @LastModifiedDate: 2022-01-15 18:04:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 inspur                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n ，请你找出并返回第 n 个 丑数 。

// 丑数 就是只包含质因数 2、3 和/或 5 的正整数。

/**
 * @class PriorityQueue 优先队列
 */
class PriorityQueue {
  // 默认小根堆
  constructor(compare = (a, b) => a - b < 0) {
    this.data = [];
    this.size = 0;
    this.compare = compare;
  }
  // 返回队尾元素
  tail() {
    return this.size > 0 ? this.data[this.size - 1] : null;
  }
  // 返回队首元素
  head() {
    return this.size > 0 ? this.data[0] : null;
  }
  // 出队
  pop() {
    if (this.size > 0) {
      this.size--;
      return this.data.shift();
    }
  }
  // 入队
  push(val) {
    // 二分插入
    this.binaryInsert(this.size++, val);
  }
  binaryInsert(idx, val) {
    // 查找范围 [0, size)
    let left = 0;
    let right = idx;
    // 循环查找
    while (left < right) {
      // 中间索引
      let mid = Math.floor((left + right) / 2);

      if (this.compare(this.data[mid], val)) {
        // mid 比 val小 取右边 [mid + 1, right)
        left = mid + 1;
      } else {
        // mid 比 val 大 取左边 [left, mid)
        right = mid;
      }
      // 直到left === right ;
    }
    // 插入到left前
    this.data.splice(left, 0, val);
  }
}

// const pq = new PriorityQueue();
// 入队

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  // 创建丑数的优先队列
  const pq = new PriorityQueue();
  // 丑数的质因数
  const primeFactor = [2, 3, 5];
  // 记录以及入队的丑数
  const primes = new Set();
  // 入队第一个丑数
  pq.push(1);
  primes.add(1);
  // 当出队n次后结束
  while (pq.size > 0) {

    const ugnum = pq.pop();
    n--;
    if (n === 0) {
      return ugnum;
    }
    // 入队
    for (let prime of primeFactor) {
      const newPrime = prime * ugnum;
      // 不包含丑数
      if (!primes.has(newPrime)) {
        pq.push(newPrime);
        primes.add(newPrime);
      }
    }
  }
};

console.log(nthUglyNumber(1690));
