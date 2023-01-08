/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-07 22:46:39                                                  *
 * @LastModifiedDate: 2023-01-07 22:50:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数据流，请你实现一个数据结构，检查数据流中最后 k 个整数是否 等于 给定值 value 。

// 请你实现 DataStream 类：

// DataStream(int value, int k) 用两个整数 value 和 k 初始化一个空的整数数据流。
// boolean consec(int num) 将 num 添加到整数数据流。如果后 k 个整数都等于 value ，返回 true ，否则返回 false 。如果少于 k 个整数，条件不满足，所以也返回 false 。

/**
 * @param {number} value
 * @param {number} k
 */
var DataStream = function (value, k) {
  this.value = value;
  this.k = k;
  this.same = 0;
};

/**
 * @param {number} num
 * @return {boolean}
 */
DataStream.prototype.consec = function (num) {
  if (num === this.value) {
    this.same++;
  } else {
    this.same = 0;
  }
  return this.same >= this.k;
};

/**
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */
