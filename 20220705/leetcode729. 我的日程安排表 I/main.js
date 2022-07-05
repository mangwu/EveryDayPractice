/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-05 10:40:43                                                  *
 * @LastModifiedDate: 2022-07-05 11:08:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 实现一个 MyCalendar 类来存放你的日程安排。如果要添加的日程安排不会造成 重复预订 ，则可以存储这个新的日程安排。

// 当两个日程安排有一些时间上的交叉时（例如两个日程安排都在同一时间内），就会产生 重复预订 。

// 日程可以用一对整数 start 和 end 表示，这里的时间是半开区间，即 [start, end),
//    实数 x 的范围为，  start <= x < end 。

// 实现 MyCalendar 类：

// MyCalendar() 初始化日历对象。
// boolean book(int start, int end) 如果可以将日程安排成功添加到日历中而不会导致重复预订，返回 true 。
// 否则，返回 false 并且不要将该日程安排添加到日历中。
var MyCalendar = function () {
  this.data = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  if (this.data.length == 0) {
    this.data.push([start, end]);
    return true;
  }
  // 二分查找
  let left = 0;
  let right = this.data.length;
  while (left < right) {
    let mid = (left + right) >> 1;
    if (start == this.data[mid][0]) {
      return false;
    } else if (start > this.data[mid][0]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  // left和right是第一个this.data[left][0] > start的索引
  if (left == this.data.length) {
    // 最后一个
    if (this.data[this.data.length - 1][1] <= start) {
      this.data.push([start, end]);
      return true;
    } else {
      return false;
    }
  }
  if (left == 0) {
    // 第一个
    if (this.data[0][0] >= end) {
      this.data.splice(0, 0, [start, end]);
      return true;
    } else {
      return false;
    }
  }
  // 一般情况
  if (this.data[left][0] >= end && this.data[left - 1][1] <= start) {
    this.data.splice(left, 0, [start, end]);
    return true;
  }
  return false;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

// [
//   [10, 20],
//   [20, 30],
//   [30, 40],
//   [45, 55],
//   [60, 70],
//   [80, 120],
// ];

const mc = new MyCalendar();
console.log(mc.book(70, 80));
