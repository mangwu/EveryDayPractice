/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-22 09:07:36                                                  *
 * @LastModifiedDate: 2022-07-22 09:12:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一个整数区间 [a, b]  ( a < b ) 代表着从 a 到 b 的所有连续整数，包括 a 和 b。

// 给你一组整数区间intervals，请找到一个最小的集合 S，
// 使得 S 里的元素与区间intervals中的每一个整数区间都至少有2个元素相交。

// 输出这个最小集合S的大小。
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function (intervals) {
  // 排序intervals
  intervals.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    } else if (a[0] == b[0]) {
      return a[1] - b[1];
    } else {
      return 1;
    }
  });
};
