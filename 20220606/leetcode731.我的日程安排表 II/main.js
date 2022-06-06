/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-06 20:38:59                                                  *
 * @LastModifiedDate: 2022-06-06 20:57:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 实现一个 MyCalendar 类来存放你的日程安排。
// 如果要添加的时间内不会导致三重预订时，则可以存储这个新的日程安排。

// MyCalendar 有一个 book(int start, int end)方法。
// 它意味着在 start 到 end 时间内增加一个日程安排，注意，这里的时间是半开区间，即 [start, end),
//    实数 x 的范围为，  start <= x < end。

// 当三个日程安排有一些时间上的交叉时（例如三个日程安排都在同一时间内），就会产生三重预订。

// 每次调用 MyCalendar.book方法时，如果可以将日程安排成功添加到日历中而不会导致三重预订，
// 返回 true。否则，返回 false 并且不要将该日程安排添加到日历中。

// 请按照以下步骤调用MyCalendar 类: MyCalendar cal = new MyCalendar(); MyCalendar.book(start, end)

var MyCalendarTwo = function () {};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {};

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */


// [10, 20] 2 
// [50,60] 1
// [10, 40]  2
// [5,15] 3 => false
// [5,10]  1 
// [25, 55] 2 => true