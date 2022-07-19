/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-19 10:26:32                                                  *
 * @LastModifiedDate: 2022-07-19 11:06:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 实现一个 MyCalendar 类来存放你的日程安排。如果要添加的时间内不会导致三重预订时，则可以存储这个新的日程安排。

// MyCalendar 有一个 book(int start, int end)方法。
// 它意味着在 start 到 end 时间内增加一个日程安排，注意，这里的时间是半开区间，即 [start, end), 实数 x 的范围为，
//     start <= x < end。

// 当三个日程安排有一些时间上的交叉时（例如三个日程安排都在同一时间内），就会产生三重预订。

// 每次调用 MyCalendar.book方法时，如果可以将日程安排成功添加到日历中而不会导致三重预订，返回 true。
// 否则，返回 false 并且不要将该日程安排添加到日历中。

// 请按照以下步骤调用MyCalendar 类: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)

var MyCalendarTwo = function () {
  this.data = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
  if (this.data.length == 0) {
    this.data.push([start, end]);
    console.log(this.data);
    return true;
  } else {
    const n = this.data.length;
    // 考虑头和尾部的情况
    if (this.data[0][0] >= end) {
      // 直接放在头部
      this.data.splice(0, 0, [start, end]);
      console.log(this.data);

      return true;
    }
    if (this.data[n - 1][1] <= start) {
      // 直接放在尾部
      this.data.splice(n, 0, [start, end]);
      console.log(this.data);

      return true;
    }
    // 遍历data, 中间插入情况
    for (let i = 0; i < n; i++) {
      // start在一个区间之中
      if (start >= this.data[i][0] && start < this.data[i][1]) {
        console.log(this.data);
        return false;
      }
      // end在一个区间之中
      if (end > this.data[i][0] && end <= this.data[i][1]) {
        console.log(this.data);
        return false;
      }
      // 查找符合条件的区间
      if (start >= this.data[i][1]) {
        continue;
      }
      if (end <= this.data[i][0]) {
        this.data.splice(i, 0, [start, end]);
        console.log(this.data);
        return true;
      }
    }
  }
};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */

var MyCalendarTwo = function () {
  // 记录所有预定的日程表安排
  this.data = [];
  // 记录所有双重预定的时间
  this.overlaps = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
  // 遍历双重预定时间，查找是否有重叠关系
  for (const [l, r] of this.overlaps) {
    // 没有重叠的条件是 start >= r 或 end <= l 所以取反就是重叠的条件
    if (l < end && r > start) {
      return false;
    }
  }
  // 如果上述遍历通过，说明不会发生三重预定
  // 遍历data，找出二重预定区间
  for (const [l, r] of this.data) {
    // 有重叠
    if (l < end && r > start) {
      this.overlaps.push([Math.max(start, l), Math.min(end, r)]);
    }
  }
  this.data.push([start, end]);
  return true;
};
