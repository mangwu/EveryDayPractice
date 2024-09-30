/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-09-30 09:59:19                                                  *
 * @LastModifiedDate: 2024-09-30 11:21:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 请你设计一个管理 n 个座位预约的系统，座位编号从 1 到 n 。

// 请你实现 SeatManager 类：

// SeatManager(int n) 初始化一个 SeatManager 对象，它管理从 1 到 n 编号的 n 个座位。所有座位初始都是可预约的。
// int reserve() 返回可以预约座位的 最小编号 ，此座位变为不可预约。
// void unreserve(int seatNumber) 将给定编号 seatNumber 对应的座位变成可以预约。
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
  dequeueFront() {
    if (this.isEmpty()) return;
    const res = this.items[++this.lowest];
    delete this.items[this.lowest];
    return res;
  }
  dequeueBack() {
    if (this.isEmpty()) return;
    const res = this.items[--this.highest];
    delete this.items[this.highest];
    return res;
  }
  enqueueFront(value) {
    this.items[this.lowest--] = value;
  }
  enqueueBack(value) {
    this.items[this.highest++] = value;
  }
  peekFront() {
    if (this.isEmpty()) return;
    return this.items[this.lowest + 1];
  }
  peekBack() {
    if (this.isEmpty()) return;
    return this.items[this.highest - 1];
  }
}
/**
 * @param {number} n
 */
var SeatManager = function (n) {
  // 用两个队列维持大小顺序
  this.queue1 = new Dqueue();
  this.queue2 = new Dqueue();
  for (let i = 1; i <= n; i++) this.queue2.enqueueBack(i);
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
  if (!this.queue1.isEmpty()) return this.queue1.dequeueFront();
  if (!this.queue2.isEmpty()) return this.queue2.dequeueFront();
  return -1;
};

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
  if (!this.queue1.isEmpty()) {
    if (seatNumber < this.queue1.peekFront()) {
      this.queue1.enqueueFront(seatNumber);
      return;
    } else if (seatNumber < this.queue1.peekBack()) {
      while (!this.queue1.isEmpty() && seatNumber < this.queue1.peekBack()) {
        this.queue2.enqueueFront(this.queue1.dequeueBack());
      }
      this.queue1.enqueueBack(seatNumber);
      return;
    }
  }
  if (this.queue2.isEmpty()) this.queue2.enqueueFront(seatNumber);
  else {
    while (!this.queue2.isEmpty() && seatNumber > this.queue2.peekFront()) {
      this.queue1.enqueueBack(this.queue2.dequeueFront());
    }
    this.queue2.enqueueFront(seatNumber);
  }
};

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */

// 1 - 10
// 3 5 8 10

// 4 3 1

// 9 7 6
