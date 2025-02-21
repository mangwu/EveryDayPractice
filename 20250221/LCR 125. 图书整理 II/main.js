/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-21 18:23:10                                                  *
 * @LastModifiedDate: 2025-02-21 18:34:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 读者来到图书馆排队借还书，图书管理员使用两个书车来完成整理借还书的任务。书车中的书从下往上叠加存放，图书管理员每次只能拿取书车顶部的书。排队的读者会有两种操作：

// push(bookID)：把借阅的书籍还到图书馆。
// pop()：从图书馆中借出书籍。
// 为了保持图书的顺序，图书管理员每次取出供读者借阅的书籍是 最早 归还到图书馆的书籍。你需要返回 每次读者借出书的值 。

// 如果没有归还的书可以取出，返回 -1 。

var CQueue = function () {
  // 队列
  this.items = {};
  this.lowest = 0;
  this.highest = 1;
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.items[this.highest++] = value;
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  const size = this.highest - this.lowest - 1;
  if (size === 0) return -1;
  return this.items[++this.lowest];
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
