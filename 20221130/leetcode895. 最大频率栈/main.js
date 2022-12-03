/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-30 22:22:17                                                  *
 * @LastModifiedDate: 2022-11-30 23:44:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 设计一个类似堆栈的数据结构，将元素推入堆栈，并从堆栈中弹出出现频率最高的元素。

// 实现 FreqStack 类:

// FreqStack() 构造一个空的堆栈。
// void push(int val) 将一个整数 val 压入栈顶。
// int pop() 删除并返回堆栈中出现频率最高的元素。
// 如果出现频率最高的元素不只一个，则移除并返回最接近栈顶的元素。

var FreqStack = function () {
  this.num2data = [];
  this.val2num = new Map();
  this.val2idx = new Map();
};
FreqStack.prototype.binarySearch = function (val) {
  let left = 0;
  let right = this.num2data.length;
  while (left < right) {
    let mid = (left + right) >> 1;
    if (this.num2data[mid][0] == val) {
      return mid;
    } else if (this.num2data[mid][0] < val) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  if (this.val2num.has(val)) {
    // 修改val2num
    let num = this.val2num.get(val);
    this.val2num.set(val, num + 1);
    // 修改num2data
    let idx = this.binarySearch(num);
    console.log(idx, this.num2data, val);
    this.num2data[idx].splice(this.val2idx.get(val), 1);
    // 修改num2idx
    if (this.num2data[idx + 1] && this.num2data[idx + 1][0] === num + 1) {
      this.val2idx.set(val, this.num2data[idx + 1].length);
      this.num2data[idx + 1].push(val);
    } else {
      const newData = [num + 1, val];
      this.num2data.splice(idx + 1, 0, newData);
      this.val2idx.set(val, 1);
    }
    if (this.num2data[idx].length === 1) {
      // 删掉
      this.num2data.splice(idx, 1);
    }
  } else {
    // 没有对应的值
    if (this.num2data[0] && this.num2data[0][0] === 1) {
      this.val2idx.set(val, this.num2data[0].length);
      this.num2data[0].push(val);
    } else {
      this.num2data.splice(0, 0, [1, val]);
      this.val2idx.set(val, 1);
    }
    this.val2num.set(val, 1);
    console.log(this.num2data, val);
  }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  const last = this.num2data[this.num2data.length - 1];
  console.log(this.num2data);
  let ans = last.pop();
  // 修改num2data
  if (last.length === 1) {
    this.num2data.pop();
  }
  // 修改val2num
  this.val2num.delete(ans);
  // 修改num2idx
  this.val2idx.delete(ans);
  return ans;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
