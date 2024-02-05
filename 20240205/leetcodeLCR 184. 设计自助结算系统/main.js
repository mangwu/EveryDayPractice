/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-02-05 15:44:49                                                  *
 * @LastModifiedDate: 2024-02-05 16:01:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 请设计一个自助结账系统，该系统需要通过一个队列来模拟顾客通过购物车的结算过程，需要实现的功能有：

// get_max()：获取结算商品中的最高价格，如果队列为空，则返回 -1
// add(value)：将价格为 value 的商品加入待结算商品队列的尾部
// remove()：移除第一个待结算的商品价格，如果队列为空，则返回 -1
// 注意，为保证该系统运转高效性，以上函数的均摊时间复杂度均为 O(1)

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

var Checkout = function () {
  this.dq = new Dqueue();
  this.data = [];
  this.left = 0;
};

/**
 * @return {number}
 */
Checkout.prototype.get_max = function () {
  if (!this.dq.isEmpty()) return this.data[this.dq.peekFront()];
  return -1;
};

/**
 * @param {number} value
 * @return {void}
 */
Checkout.prototype.add = function (value) {
  while (!this.dq.isEmpty() && this.data[this.dq.peekBack()] < value) {
    this.dq.dequeueBack();
  }
  this.dq.enqueueBack(this.data.length);
  this.data.push(value);
};

/**
 * @return {number}
 */
Checkout.prototype.remove = function () {
  if (this.left >= this.data.length) return -1;
  this.left++; // 窗口最小值为this.left
  while (!this.dq.isEmpty() && this.dq.peekFront() < this.left) {
    this.dq.dequeueFront();
  }
  return this.data[this.left - 1];
};

/**
 * Your Checkout object will be instantiated and called as such:
 * var obj = new Checkout()
 * var param_1 = obj.get_max()
 * obj.add(value)
 * var param_3 = obj.remove()
 */
