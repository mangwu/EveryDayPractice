/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-30 09:04:14                                                  *
 * @LastModifiedDate: 2022-12-30 22:51:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在考场里，一排有 N 个座位，分别编号为 0, 1, 2, ..., N-1 。

// 当学生进入考场后，他必须坐在能够使他与离他最近的人之间的距离达到最大化的座位上。如果有多个这样的座位，他会坐在编号最小的座位上。(另外，如果考场里没有人，那么学生就坐在 0 号座位上。)

// 返回 ExamRoom(int N) 类，它有两个公开的函数：其中，函数 ExamRoom.seat() 会返回一个 int （整型数据），代表学生坐的位置；函数 ExamRoom.leave(int p) 代表坐在座位 p 上的学生现在离开了考场。每次调用 ExamRoom.leave(p) 时都保证有学生坐在座位 p 上。

/**
 * @param {number} n
 */
var ExamRoom = function (n) {};

class Q {
  constructor(compare = (a, b) => a - b) {
    
  }
}

/**
 * @return {number}
 */
ExamRoom.prototype.seat = function () {};

/**
 * @param {number} p
 * @return {void}
 */
ExamRoom.prototype.leave = function (p) {};

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = new ExamRoom(n)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */

// 0  1 2 3 4 6 8 10

// 每次选择差值最大的取中间值

// 0 n   n / 2   n / 4   3n / 4

// 10    0  9
//  8  -> 4
// 3 4 -> 2
//1 2  ->
