/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-22 08:42:08                                                  *
 * @LastModifiedDate: 2023-08-22 09:04:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个数组 seats 表示一排座位，其中 seats[i] = 1 代表有人坐在第 i 个座位上，seats[i] = 0 代表座位 i 上是空的（下标从 0 开始）。

// 至少有一个空座位，且至少有一人已经坐在座位上。

// 亚历克斯希望坐在一个能够使他与离他最近的人之间的距离达到最大化的座位上。

// 返回他到离他最近的人的最大距离。

/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
  const n = seats.length;
  let start = seats.indexOf(1);
  let end = seats.lastIndexOf(1);
  let res = Math.max(start, n - end - 1);
  let pre = start;
  for (; start <= end; start++) {
    if (seats[start] === 1) {
      res = Math.max(res, Math.floor((start - pre) / 2));
      pre = start;
    }
  }
  return res;
};
