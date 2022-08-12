/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-12 16:04:37                                                  *
 * @LastModifiedDate: 2022-08-12 16:14:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// 实现 MinStack 类:

// MinStack() 初始化堆栈对象。
// void push(int val) 将元素val推入堆栈。
// void pop() 删除堆栈顶部的元素。
// int top() 获取堆栈顶部的元素。
// int getMin() 获取堆栈中的最小元素。

var MinStack = function () {
  // 不使用辅助栈
  this.stack = [];
  this.min = -1;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.stack.length == 0) {
    // 保存最小值与当前值的差值
    this.stack.push(0);
    // 保存最小值
    this.min = val;
  } else {
    let sub = val - this.min;
    if (sub < 0) {
      this.min = val;
    }
    this.stack.push(sub);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let sub = this.stack.pop();
  if (sub < 0) {
    this.min = this.min - sub;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  let sub = this.stack[this.stack.length - 1];
  if (sub < 0) {
    return this.min;
  } else {
    return this.min + sub;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
