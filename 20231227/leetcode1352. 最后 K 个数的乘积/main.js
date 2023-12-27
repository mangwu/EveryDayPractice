/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-12-27 13:41:19                                                  *
 * @LastModifiedDate: 2023-12-27 14:13:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 请你实现一个「数字乘积类」ProductOfNumbers，要求支持下述两种方法：

// 1. add(int num)

// 将数字 num 添加到当前数字列表的最后面。
// 2. getProduct(int k)

// 返回当前数字列表中，最后 k 个数字的乘积。
// 你可以假设当前列表中始终 至少 包含 k 个数字。
// 题目数据保证：任何时候，任一连续数字序列的乘积都在 32-bit 整数范围内，不会溢出。

var ProductOfNumbers = function () {
  // 前缀积
  this.items = [1];
  this.lastZero = -1;
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
  const len = this.items.length;
  if (num === 0) {
    // 对于0要特殊处理
    this.lastZero = len;
    this.items.push(0);
  } else if (this.items[len - 1] === 0) {
    // 前一个数字是0
    this.items.push(num);
  } else {
    this.items.push(this.items[this.items.length - 1] * num);
  }
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
  const len = this.items.length;
  // 判断[len-k ,k]有没有0
  if (this.lastZero >= len - k) {
    return 0;
  } else return this.items[len - 1] / (this.items[len - k - 1] || 1);
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
