/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-05 16:54:10                                                  *
 * @LastModifiedDate: 2022-08-05 17:12:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 如何得到一个数据流中的中位数？如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。

// 例如，

// [2,3,4] 的中位数是 3

// [2,3] 的中位数是 (2 + 3) / 2 = 2.5

// 设计一个支持以下两种操作的数据结构：

// void addNum(int num) - 从数据流中添加一个整数到数据结构中。
// double findMedian() - 返回目前所有元素的中位数。

/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.data = [];
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  // 二分查找
  let left = 0;
  let right = this.data.length;
  // [0, len)
  while (left < right) {
    let mid = (left + right) >> 1;
    if (this.data[mid] > num) {
      // 中间值比num大，num在前面
      right = mid;
    } else {
      // 中间值比num小，num在后面
      left = mid + 1;
    }
  }
  // 插入元素
  this.data.splice(left, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  const len = this.data.length;
  if (len % 2 == 0) {
    // 偶数
    return (this.data[len / 2 - 1] + this.data[len / 2]) / 2;
  } else {
    return this.data[(len - 1) / 2];
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
