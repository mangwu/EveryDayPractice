/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-06 08:43:44                                                  *
 * @LastModifiedDate: 2022-06-06 09:55:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 当 k 个日程安排有一些时间上的交叉时（例如 k 个日程安排都在同一时间内），就会产生 k 次预订。

// 给你一些日程安排 [start, end) ，请你在每个日程安排添加后，返回一个整数 k ，
//   表示所有先前日程安排会产生的最大 k 次预订。

// 实现一个 MyCalendarThree 类来存放你的日程安排，你可以一直添加新的日程安排。

// MyCalendarThree() 初始化对象。
// int book(int start, int end) 返回一个整数 k ，表示日历中存在的 k 次预订的最大值。
var MyCalendarThree = function () {
  this.calendar = [];
  this.maxBooks = 0;
};

/**
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
MyCalendarThree.prototype.book = function (start, end) {
  console.log("---一次预定----");
  let ans = 1;
  let newObj = {};
  let arr = [start, end]
  newObj[arr] = [];
  // for (const obj of this.calendar) {
  //   const newKey = Object.keys(obj)[0]
  //     .split(",")
  //     .map((v) => Number(v));
  //   console.log(newKey);
  //   if (!(newKey[0] >= end || newKey[1] <= start)) {
  //     // 相交
  //     newObj[[start, end]].push(newKey);
  //     let self = 2;
  //     console.log(obj[newKey]);
  //     for (const v of obj[newKey]) {
  //       // 判断与key相交的各个区间的相交个数
  //       if (!(v[0] >= end || v[1] <= start)) {
  //         self++;
  //       }
  //     }
  //     obj[newKey].push([start, end]);
  //     ans = Math.max(ans, self);
  //   }
  // }
  console.log(newObj);
  this.calendar.push(newObj);
  console.log(this.calendar, ans);
  this.maxBooks = Math.max(ans, this.maxBooks);
  return this.maxBooks;
};

/**
 * Your MyCalendarThree object will be instantiated and called as such:
 * var obj = new MyCalendarThree()
 * var param_1 = obj.book(start,end)
 */

const myc = new MyCalendarThree();
myc.book([10, 20]);
myc.book([50, 60]);
myc.book([10, 40]);
myc.book([5, 15]);
myc.book([5, 10]);
myc.book([25, 55]);
myc.book([0, 20]);
myc.book([15, 60]);
myc.book([25, 80]);
myc.book([70, 80]);
myc.book([90, 100]);
let a = {};
let b = 1;
let c = 2;
a[[b, c]] = 3;
console.log(a);
console.log(
  Object.keys(a)[0]
    .split(",")
    .map((v) => Number(v))
);
