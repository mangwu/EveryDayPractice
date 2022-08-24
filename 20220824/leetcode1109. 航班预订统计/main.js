/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-24 15:58:07                                                  *
 * @LastModifiedDate: 2022-08-24 16:02:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 这里有 n 个航班，它们分别从 1 到 n 进行编号。

// 有一份航班预订表 bookings ，表中第 i 条预订记录 bookings[i] = [firsti, lasti, seatsi]
//  意味着在从 firsti 到 lasti （包含 firsti 和 lasti ）的 每个航班 上预订了 seatsi 个座位。

// 请你返回一个长度为 n 的数组 answer，里面的元素是每个航班预定的座位总数。
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  const diff = new Array(n + 1).fill(0);
  for (const [first, second, seats] of bookings) {
    diff[first-1] += seats;
    diff[second] -= seats;
  }
  for (let i = 1; i < n; i++) {
    diff[i] += diff[i - 1];
  }
  diff.pop();
  return diff;
};
