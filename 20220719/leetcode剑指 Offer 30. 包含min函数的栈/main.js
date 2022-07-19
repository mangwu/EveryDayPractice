/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-19 14:42:19                                                  *
 * @LastModifiedDate: 2022-07-19 14:52:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，
// 调用 min、push 及 pop 的时间复杂度都是 O(1)。
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x);
  if (this.minStack.length) {
    this.minStack.push(Math.min(x, this.minStack[this.minStack.length - 1]));
  } else {
    this.minStack.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.minStack.pop();
  return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length) {
    return this.stack[this.stack.length - 1];
  }
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  if (this.minStack.length) {
    return this.minStack[this.minStack.length - 1];
  }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
