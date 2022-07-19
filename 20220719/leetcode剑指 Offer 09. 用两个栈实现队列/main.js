/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-19 14:16:24                                                  *
 * @LastModifiedDate: 2022-07-19 14:30:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
// 分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

var CQueue = function () {
  this.stack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  // 在队列尾部添加元素
  this.stack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.stack.length > 0) {
    return this.stack.shift();
  }
  return -1;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

// +1 +2 +3 - - +4 - -+5
// 1 2 3

var CQueue = function () {
  this.push_stack = [];
  this.out_stack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  // 在队列尾部添加元素
  this.push_stack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (!this.out_stack.length) {
    // 两个栈都没有元素
    if (!this.push_stack.length) {
      return -1;
    }
    // 入栈有元素，出栈没有元素，只需要将入栈中的元素出栈到出栈
    while (this.push_stack.length) {
      this.out_stack.push(this.push_stack.pop());
    }
  }
  return this.out_stack.pop();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
