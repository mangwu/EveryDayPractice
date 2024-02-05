// 读者来到图书馆排队借还书，图书管理员使用两个书车来完成整理借还书的任务。书车中的书从下往上叠加存放，图书管理员每次只能拿取书车顶部的书。排队的读者会有两种操作：

// push(bookID)：把借阅的书籍还到图书馆。
// pop()：从图书馆中借出书籍。
// 为了保持图书的顺序，图书管理员每次取出供读者借阅的书籍是 最早 归还到图书馆的书籍。你需要返回 每次读者借出书的值 。

// 如果没有归还的书可以取出，返回 -1 。

var CQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.stack2.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.stack1.length) return this.stack1.pop();
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop());
  }
  if (this.stack1.length) return this.stack1.pop();
  return -1;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

// 6 4
// 7 5 9 1
