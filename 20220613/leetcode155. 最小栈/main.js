/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-13 10:50:10                                                  *
 * @LastModifiedDate: 2022-06-13 11:10:25                                      *
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

class PriorityQueue {
  constructor(compare = (a, b) => a < b, data = [], size = 0) {
    this.compare = compare;
    this.data = data;
    this.size = size;
  }
  // 返回队首
  header() {
    return this.size > 0 ? this.data[0] : -1;
  }
  // 返回队尾
  tail() {
    return this.size > 0 ? this.data[this.size - 1] : -1;
  }
  // 队首出队
  dequeue() {
    if (this.size > 0) {
      this.size--;
      return this.data.splice(0, 1)[0];
    }
    return -1;
  }
  // 队尾出队
  pop() {
    if (this.size > 0) {
      this.size--;
      return this.data.pop();
    }
    return -1;
  }
  // 入队
  enqueue(val) {
    this.size++;
    this.binaryInsert(val);
  }
  binaryInsert(val) {
    let left = 0;
    let right = this.size - 1;
    // [0, right)
    while (left < right) {
      let mid = (left + right) >> 1;
      // 找到第一个比目标值大的元素索引
      if (this.compare(this.data[mid], val)) {
        // mid比val小 在右边
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    this.data.splice(right, 0, val);
  }
  outAssignEle(val) {
    let idx = this.binarySearch(val);
    if (idx !== -1) {
      this.data.splice(idx, 1);
      this.size--;
      return true;
    }
    // 没有相关元素
    return false;
  }
  // 二分查找指定元素
  binarySearch(val) {
    let left = 0;
    let right = this.size;
    // [0, size)
    while (left < right) {
      let mid = (left + right) >> 1;
      if (this.data[mid] == val) {
        return mid;
      } else if (this.compare(this.data[mid], val)) {
        // mid比val小 在右边
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    // 没有结果
    return -1;
  }
}
var MinStack = function () {
  this.data = new PriorityQueue();
  this.primary = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.data.enqueue(val);
  this.primary.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let top = this.primary.pop();
  this.data.outAssignEle(top);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.primary[this.primary.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.data.header();
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var MinStack = function () {
  // 结合动态规划思想，每一轮都保存当前最小值
  this.data = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  if (this.data.length == 0) {
    this.data.push([val, val]);
  } else {
    this.data.push([val, Math.min(this.data[this.data.length - 1][1], val)]);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.data.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.data[this.data.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.data[this.data.length - 1][1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
