/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-15 08:57:54                                                  *
 * @LastModifiedDate: 2022-08-15 10:05:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 设计实现双端队列。

// 实现 MyCircularDeque 类:

// MyCircularDeque(int k) ：构造函数,双端队列最大为 k 。
// boolean insertFront()：将一个元素添加到双端队列头部。 如果操作成功返回 true ，否则返回 false 。
// boolean insertLast() ：将一个元素添加到双端队列尾部。如果操作成功返回 true ，否则返回 false 。
// boolean deleteFront() ：从双端队列头部删除一个元素。 如果操作成功返回 true ，否则返回 false 。
// boolean deleteLast() ：从双端队列尾部删除一个元素。如果操作成功返回 true ，否则返回 false 。
// int getFront() )：从双端队列头部获得一个元素。如果双端队列为空，返回 -1 。
// int getRear() ：获得双端队列的最后一个元素。 如果双端队列为空，返回 -1 。
// boolean isEmpty() ：若双端队列为空，则返回 true ，否则返回 false  。
// boolean isFull() ：若双端队列满了，则返回 true ，否则返回 false 。

/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.size = k;
  this.data = [];
  this.cur = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) {
    return false;
  }
  this.data.unshift(value);
  this.cur++;
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) {
    return false;
  }
  this.data.push(value);
  this.cur++;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) {
    return false;
  }
  this.data.shift();
  this.cur--;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) {
    return false;
  }
  this.data.pop();
  this.cur--;
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.data[0];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.data[this.cur - 1];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.cur == 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.cur == this.size;
};

/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */

/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.size = k;
  this.data = new Array(k).fill(-1);
  this.cur = 0;
  // 记录头尾的索引
  this.header = 0;
  this.tailer = 1;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) {
    return false;
  }
  // 头部插入
  this.data[this.header] = value;
  this.header--;
  this.header = (this.header + this.size) % this.size;
  this.cur++;
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) {
    return false;
  }
  // 头尾部
  this.tailer = this.tailer % this.size;
  this.data[this.tailer] = value;
  this.tailer++;
  this.tailer = (this.tailer + this.size) % this.size;
  this.cur++;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) {
    return false;
  }
  // 删除头节点
  this.header++;
  this.header = (this.header + this.size) % this.size;
  this.data[this.header] = -1;
  this.cur--;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) {
    return false;
  }
  // 删除尾节点
  this.tailer--;
  this.tailer = (this.tailer + this.size) % this.size;
  this.data[this.tailer] = -1;
  this.cur--;
  return true;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.data[(this.header + this.size + 1) % this.size];
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.data[(this.tailer + this.size - 1) % this.size];
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.cur == 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.cur == this.size;
};

// 1 2 3
// w w w
// t
//     h
