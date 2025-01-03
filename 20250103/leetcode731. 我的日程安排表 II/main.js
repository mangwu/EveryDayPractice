/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-01-03 13:42:57                                                  *
 * @LastModifiedDate: 2025-01-03 14:03:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 实现一个程序来存放你的日程安排。如果要添加的时间内不会导致三重预订时，则可以存储这个新的日程安排。

// 当三个日程安排有一些时间上的交叉时（例如三个日程安排都在同一时间内），就会产生 三重预订。

// 事件能够用一对整数 startTime 和 endTime 表示，在一个半开区间的时间 [startTime, endTime) 上预定。实数 x 的范围为  startTime <= x < endTime。

// 实现 MyCalendarTwo 类：

// MyCalendarTwo() 初始化日历对象。
// boolean book(int startTime, int endTime) 如果可以将日程安排成功添加到日历中而不会导致三重预订，返回 true。否则，返回 false 并且不要将该日程安排添加到日历中。

var MyCalendarTwo = function () {
  this.books = [];
  this.overlaps = [];
};

/**
 * @param {number} startTime
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (startTime, endTime) {
  // 检查三重叠
  for (const [left, right] of this.overlaps) {
    if (left < endTime && right > startTime) return false; // 有重叠
  }
  // 没有三重叠，可以增加二重叠
  for (const [left, right] of this.books) {
    if (left < endTime && right > startTime) {
      this.overlaps.push([Math.max(left, startTime), Math.min(right, endTime)]);
    }
  }
  this.books.push([startTime, endTime]);
  return true;
};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(startTime,endTime)
 */
