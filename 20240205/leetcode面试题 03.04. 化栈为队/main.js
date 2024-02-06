// 实现一个MyQueue类，该类用两个栈来实现一个队列。

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack2.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (this.stack1.length) return this.stack1.pop();
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop());
  }
  if (this.stack1.length) return this.stack1.pop();
  return -1;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.stack1.length) return this.stack1[this.stack1.length - 1];
  while (this.stack2.length) {
    this.stack1.push(this.stack2.pop());
  }
  if (this.stack1.length) return this.stack1[this.stack1.length - 1];
  return -1;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0 && this.stack2.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
