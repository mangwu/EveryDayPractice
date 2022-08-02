/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-02 10:56:09                                                  *
 * @LastModifiedDate: 2022-08-02 15:44:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 设计你的循环队列实现。 循环队列是一种线性数据结构，
// 其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。

// 循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，
// 我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。

// 你的实现应该支持如下操作：

// MyCircularQueue(k): 构造器，设置队列长度为 k 。
// Front: 从队首获取元素。如果队列为空，返回 -1 。
// Rear: 获取队尾元素。如果队列为空，返回 -1 。
// enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
// deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
// isEmpty(): 检查循环队列是否为空。
// isFull(): 检查循环队列是否已满。

/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.data = new Array(k).fill(0);
  this.head = 0;
  this.tail = 0;
  this.cur = 0;
  this.size = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  // 入队，先判断是否已满
  if (this.isFull()) {
    return false;
  }
  this.data[this.tail] = value;
  this.tail++;
  this.tail = this.tail % this.size;
  this.cur++;
  return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  // 出队，先判断是否已空
  if (this.isEmpty()) {
    return false;
  }
  this.head++;
  this.head = this.head % this.size;
  this.cur--;
  // 出队返回布尔值
  return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  // 队首元素
  if (this.isEmpty()) {
    return -1;
  }
  return this.data[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  // 队尾元素
  if (this.isEmpty()) {
    return -1;
  }
  return this.data[(this.tail - 1 + this.size) % this.size];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.cur == 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.cur == this.size;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
