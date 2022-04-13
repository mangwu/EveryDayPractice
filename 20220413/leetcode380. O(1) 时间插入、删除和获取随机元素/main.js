/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-13 09:03:02                                                  *
 * @LastModifiedDate: 2022-04-13 09:35:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

var RandomizedSet = function () {
  this.hash = new Set();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.hash.has(val)) {
    return false;
  } else {
    this.hash.add(val);
    return true;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.hash.has(val)) {
    this.hash.delete(val);
    return true;
  } else {
    return false;
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const random = Math.floor(Math.random() * this.hash.size);
  return [...this.hash][random];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// 使用一个hash，一个数组，hash保存元素和索引
// 删除时获取删除元素索引，将起替换为最后一个元素位置，然后数组pop，hash设置最后一个元素
var RandomizedSet = function () {
  this.hash = new Map();
  this.nums = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.hash.has(val)) {
    return false;
  } else {
    this.hash.set(val, this.nums.length);
    this.nums.push(val);
    return true;
  }
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.hash.has(val)) {
    const idx = this.hash.get(val);
    const last = this.nums[this.nums.length - 1]
    this.nums[idx] = last;
    // 注意，pop要在nums修改之后做，避免正好弹出最后一个值时，又重新赋值
    this.nums.pop();
    this.hash.set(last, idx);
    this.hash.delete(val);
    return true;
  } else {
    return false;
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const random = Math.floor(Math.random() * this.nums.length);
  return this.nums[random];
};
