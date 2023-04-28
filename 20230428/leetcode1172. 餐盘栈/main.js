/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-28 08:54:20                                                  *
 * @LastModifiedDate: 2023-04-28 09:19:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 我们把无限数量 ∞ 的栈排成一行，按从左到右的次序从 0 开始编号。每个栈的的最大容量 capacity 都相同。

// 实现一个叫「餐盘」的类 DinnerPlates：

// DinnerPlates(int capacity) - 给出栈的最大容量 capacity。
// void push(int val) - 将给出的正整数 val 推入 从左往右第一个 没有满的栈。
// int pop() - 返回 从右往左第一个 非空栈顶部的值，并将其从栈中删除；如果所有的栈都是空的，请返回 -1。
// int popAtStack(int index) - 返回编号 index 的栈顶部的值，并将其从栈中删除；如果编号 index 的栈是空的，请返回 -1。
// 。

/**
 * @param {number} capacity
 */
var DinnerPlates = function (capacity) {
  this.stack = [];
  this.capacity = capacity;
};

/**
 * @param {number} val
 * @return {void}
 */
DinnerPlates.prototype.push = function (val) {
  // push第一个没有满的栈
  let index = 0;
  while (index < this.stack.length && this.stack[index].length === this.capacity) {
    index++;
  }
  if (this.stack[index]) {
    this.stack[index].push(val);
  } else {
    this.stack[index] = [val];
  }
};

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function () {
  while (this.stack.length && this.stack[this.stack.length - 1].length === 0) {
    this.stack.pop();
  }
  if (this.stack.length > 0) {
    const arr = this.stack[this.stack.length - 1];
    if (arr.length === 1) {
      this.stack.pop();
    }
    return arr.pop();
  }
  return -1;
};

/**
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function (index) {
  if (index >= this.stack.length) return -1;
  const arr = this.stack[index];
  if (arr.length === 0) return -1;
  return arr.pop();
};

/**
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */
