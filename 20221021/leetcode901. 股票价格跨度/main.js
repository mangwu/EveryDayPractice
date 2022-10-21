/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-21 08:56:15                                                  *
 * @LastModifiedDate: 2022-10-21 09:42:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 编写一个 StockSpanner 类，它收集某些股票的每日报价，并返回该股票当日价格的跨度。

// 今天股票价格的跨度被定义为股票价格小于或等于今天价格的最大连续日数（从今天开始往回数，包括今天）。

// 例如，如果未来7天股票的价格是 [100, 80, 60, 70, 60, 75, 85]，那么股票跨度将是 [1, 1, 1, 2, 1, 4, 6]。
var StockSpanner = function () {
  this.data = new PQ();
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  return this.data.addVal(price);
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

class PQ {
  constructor(compare = (a, b) => a - b) {
    this.data = [];
    this.compare = compare;
  }
  binarySearch(val) {
    let left = 0;
    let right = this.data.length;
    while (left < right) {
      let mid = (left + right) >> 1;
      if (this.compare(this.data[mid], val) > 0) {
        // 左移 找到第一个严格大于val的值
        right = mid;
      } else {
        // 右移
        left = mid + 1;
      }
    }
    return right;
  }
  addVal(val) {
    const idx = this.binarySearch(val);
    this.data.splice(idx, 0, val);
    return idx + 1;
  }
}

var StockSpanner = function () {
  this.data = 0;
  this.ans = 0;
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  if (this.data === 0) {
    this.data = price;
    this.ans = 1;
    return 1;
  }
  if (this.data > price) {
    this.ans = 1;
    this.data = price;
    return this.ans;
  } else {
    this.ans++;
    this.data = price;
    return this.ans;
  }
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

var StockSpanner = function () {
  this.stack = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  // 单调栈解法
  let ans = 1;
  while (
    this.stack.length > 0 &&
    price >= this.stack[this.stack.length - 1][0]
  ) {
    ans += this.stack.pop()[1];
  }
  this.stack.push([price, ans]);
  return ans;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
