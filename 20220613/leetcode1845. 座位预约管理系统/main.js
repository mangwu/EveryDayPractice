/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-13 09:35:12                                                  *
 * @LastModifiedDate: 2022-06-13 10:34:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 请你设计一个管理 n 个座位预约的系统，座位编号从 1 到 n 。

// 请你实现 SeatManager 类：

// SeatManager(int n) 初始化一个 SeatManager 对象，
// 它管理从 1 到 n 编号的 n 个座位。所有座位初始都是可预约的。
// int reserve() 返回可以预约座位的 最小编号 ，此座位变为不可预约。
// void unreserve(int seatNumber) 将给定编号 seatNumber 对应的座位变成可以预约。

// 优先队列

class PriorityQueue {
  constructor(compare = (a, b) => a < b, data = [], size = 0) {
    this.compare = compare;
    this.data = data;
    this.size = size;
  }
  // 返回队首
  header() {
    return this.size > 0 ? this.data[0] : -1;
  }
  // 返回队尾
  tail() {
    return this.size > 0 ? this.data[this.size - 1] : -1;
  }
  // 队首出队
  dequeue() {
    if (this.size > 0) {
      this.size--;
      return this.data.splice(0, 1)[0];
    }
    return -1;
  }
  // 队尾出队
  pop() {
    if (this.size > 0) {
      this.size--;
      return this.data.pop();
    }
    return -1;
  }
  // 入队
  enqueue(val) {
    this.size++;
    this.binaryInsert(val);
  }
  binaryInsert(val) {
    let left = 0;
    let right = this.size - 1;
    // [0, right)
    while (left < right) {
      let mid = (left + right) >> 1;
      // 找到第一个比目标值大的元素索引
      if (this.compare(this.data[mid], val)) {
        // mid比val小 在右边
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    this.data.splice(right, 0, val);
  }
  outAssignEle(val) {
    let idx = this.binarySearch(val);
    if (idx !== -1) {
      this.data.splice(idx, 1);
      this.size--;
      return true;
    }
    // 没有相关元素
    return false;
  }
  // 二分查找指定元素
  binarySearch(val) {
    let left = 0;
    let right = this.size;
    // [0, size)
    while (left < right) {
      let mid = (left + right) >> 1;
      if (this.data[mid] == val) {
        return mid;
      } else if (this.compare(this.data[mid], val)) {
        // mid比val小 在右边
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    // 没有结果
    return -1;
  }
}
/**
 * @class PriorityQueue 优先队列
 */
class PriorityQueue2 {
  // 默认小根堆
  constructor(compare = (a, b) => a - b < 0, size = 0, data = []) {
    this.data = data;
    this.size = size;
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

/**
 * @param {number} n
 */
var SeatManager = function (n) {
  // 构建两个优先队列，一个保存可预约的，一个保存已预约的
  const arr = new Array(n).fill(0).map((_v, i) => i + 1);
  this.availableSeats = new PriorityQueue2((a, b) => a - b < 0, n, arr);
  // this.usedSeats = new PriorityQueue();
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
  //  返回最小的可预约座位，并让其可预约
  let min = this.availableSeats.pop();
  // this.usedSeats.enqueue(min);
  return min;
};

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
  // 将不可预约的变为可以预约的
  // this.usedSeats.outAssignEle(seatNumber);
  this.availableSeats.push(seatNumber);
};

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */

/**
 * @param {number} n
 */
var SeatManager = function (n) {
  // 所有作为均可预约
  this.data = new Array(n).fill(true);
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
  // 找到第一个可预约作为
  for (let i = 0; i < this.data.length; i++) {
    if (this.data[i]) {
      this.data[i] = false;
      return i + 1;
    }
  }
};

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
  // 将指定作为设置为可预约
  this.data[seatNumber - 1] = true;
};

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
