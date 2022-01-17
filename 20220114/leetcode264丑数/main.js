/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-01-15 16:38:28                                                  *
 * @LastModifiedDate: 2022-01-17 10:21:16                                      *
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

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber2 = function (n) {
  // 多路归并
  // 声明丑数序列
  let ans = [];
  // 0作为哨兵，1为丑数起始
  ans[1] = 1;
  // 声明当前三个质因数的arr索引
  let idx1 = 1,
    idx2 = 1,
    idx3 = 1;
  // 遍历n次，得到长度为n的丑数序列
  for (let idx = 2; idx <=n; idx++) {
    // 生成三个序列当前的各自索引对应的丑数
    const num1 = ans[idx1] * 2;
    const num2 = ans[idx2] * 3;
    const num3 = ans[idx3] * 5;
    // 每次取最小的丑数进入不重复丑数序列
    const min = Math.min(num1, Math.min(num2, num3));
    ans.push(min); 
    // 如果当前的最小丑数和各自索引对应的丑数相等，那么就需要获取该序列的下一个丑数了
    // 不使用else if，这样可以排除掉三个序列中的相同丑数
    if (num1 === min) idx1++;
    if (num2 === min) idx2++;
    if (num3 === min) idx3++;
  }
  return ans[n];
};

console.log(nthUglyNumber2(1690));

