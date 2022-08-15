/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-15 19:20:25                                                  *
 * @LastModifiedDate: 2022-08-15 19:53:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 请定义一个队列并实现函数 max_value 得到队列里的最大值，要求函数max_value、push_back 和 pop_front
// 的均摊时间复杂度都是O(1)。

// 若队列为空，pop_front 和 max_value 需要返回 -1

var MaxQueue = function () {
  this.data = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  if (this.data.length == 0) {
    return -1;
  }
  return Math.max.apply(null, this.data);
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  this.data.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if (this.data.length == 0) {
    return -1;
  }
  return this.data.shift();
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */

var MaxQueue = function () {
  this.queue = [];
  // 保持单调递减
  this.monotonousQueue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
  if (this.queue.length == 0) {
    return -1;
  }
  return this.monotonousQueue[0];
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
  while (
    this.monotonousQueue.length > 0 &&
    this.monotonousQueue[this.monotonousQueue.length - 1] < value
  ) {
    this.monotonousQueue.pop();
  }
  this.queue.push(value);
  this.monotonousQueue.push(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
  if (this.queue.length == 0) {
    return -1;
  }
  const value = this.queue.shift();
  if (value == this.monotonousQueue[0]) {
    this.monotonousQueue.shift();
  }
  return value;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
