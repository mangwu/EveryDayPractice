/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-25 11:26:28                                                  *
 * @LastModifiedDate: 2023-08-25 13:42:13                                      *
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
  this.preffixProduct = [1];
  this.lastZero = -1;
};

/**
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function (num) {
  if (num === 0) {
    this.lastZero = this.preffixProduct.length;
    this.preffixProduct.push(1);
    return;
  }
  this.preffixProduct.push(
    this.preffixProduct[this.preffixProduct.length - 1] * num
  );
};

/**
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
  const len = this.preffixProduct.length;
  if (len - k - 1 <= this.lastZero) return 0;
  return (
    this.preffixProduct[len - 1] /
    this.preffixProduct[len - k - 1]
  );
};

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
