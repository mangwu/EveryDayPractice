/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-18 09:09:41                                                  *
 * @LastModifiedDate: 2023-01-18 10:53:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个整数 m 和 k ，以及数据流形式的若干整数。你需要实现一个数据结构，计算这个数据流的 MK 平均值 。

// MK 平均值 按照如下步骤计算：

// 如果数据流中的整数少于 m 个，MK 平均值 为 -1 ，否则将数据流中最后 m 个元素拷贝到一个独立的容器中。
// 从这个容器中删除最小的 k 个数和最大的 k 个数。
// 计算剩余元素的平均值，并 向下取整到最近的整数 。
// 请你实现 MKAverage 类：

// MKAverage(int m, int k) 用一个空的数据流和两个整数 m 和 k 初始化 MKAverage 对象。
// void addElement(int num) 往数据流中插入一个新的元素 num 。
// int calculateMKAverage() 对当前的数据流计算并返回 MK 平均数 ，结果需 向下取整到最近的整数 。

class Q {
  constructor(compare = (a, b) => a - b) {
    this.compare = compare;
    this.data = [];
  }
  binarySearch(val) {
    let left = 0;
    let right = this.data.length - 1;
    while (left <= right) {
      // 找到一个大于等于val的元素索引
      let mid = (left + right) >> 1;
      if (this.compare(this.data[mid], val) > 0) {
        // mid比val大，val在前面
        right = mid - 1;
      } else if (this.compare(this.data[mid], val) === 0) {
        return mid;
      } else {
        // mid比val小，val在后面
        left = mid + 1;
      }
    }
    return left;
  }
  addVal(val) {
    let idx = this.binarySearch(val);
    this.data.splice(idx, 0, val);
  }
  deleteVal(val) {
    let idx = this.binarySearch(val);
    this.data.splice(idx, 1);
  }
}

/**
 * @param {number} m
 * @param {number} k
 */
var MKAverage = function (m, k) {
  // 滑动窗口
  this.data = [];
  this.sum = 0;
  this.m = m;
  this.k = k;
};

/**
 * @param {number} num
 * @return {void}
 */
MKAverage.prototype.addElement = function (num) {
  this.data.push(num);
  if (this.data.length > this.k && this.data.length <= this.m - this.k) {
    this.sum += num;
  }
  if (this.data.length > this.m) {
    this.sum += this.data[this.data.length - this.k - 1];
    this.sum -= this.data[this.data.length + this.k - this.m - 1];
  }
};

// k n k   2  3  2
// m = 2k + n  7
// 1 2 3 4 5 6 7
//     | | |
/**
 * @return {number}
 */
MKAverage.prototype.calculateMKAverage = function () {
  if (this.data.length < this.m) return -1;
  return Math.ceil(this.sum / (this.m - this.k * 2));
};

/**
 * Your MKAverage object will be instantiated and called as such:
 * var obj = new MKAverage(m, k)
 * obj.addElement(num)
 * var param_2 = obj.calculateMKAverage()
 */

/**
 * @param {number} m
 * @param {number} k
 */
var MKAverage = function (m, k) {
  // 滑动窗口
  this.data = new Q((a, b) => a - b);
  this.sum = 0;
  this.m = m;
  this.k = k;
};

/**
 * @param {number} num
 * @return {void}
 */
MKAverage.prototype.addElement = function (num) {
  this.data.addVal(num);
  if (this.data.length > this.k && this.data.length <= this.m - this.k) {
    this.sum += num;
  }
  if (this.data.length > this.m) {
    this.sum += this.data[this.data.length - this.k - 1];
    this.sum -= this.data[this.data.length + this.k - this.m - 1];
  }
};

// k n k   2  3  2
// m = 2k + n  7
// 1 2 3 4 5 6 7
//     | | |
/**
 * @return {number}
 */
MKAverage.prototype.calculateMKAverage = function () {
  if (this.data.length < this.m) return -1;
  return Math.ceil(this.sum / (this.m - this.k * 2));
};

/**
 * Your MKAverage object will be instantiated and called as such:
 * var obj = new MKAverage(m, k)
 * obj.addElement(num)
 * var param_2 = obj.calculateMKAverage()
 */
