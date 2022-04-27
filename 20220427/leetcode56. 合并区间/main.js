/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-27 14:05:36                                                  *
 * @LastModifiedDate: 2022-04-27 14:17:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 排序后合并
  if (intervals.length == 1) {
    return intervals;
  }
  intervals.sort((a, b) => a[0] - b[0]);

  let i = 0;
  let j = 1;
  while (i < intervals.length && j < intervals.length) {
    if (intervals[i][1] < intervals[j][0]) {
      i++;
      j++;
    } else {
      // 和为一个
      intervals[j][0] = intervals[i][0];
      intervals[j][1] = Math.max(intervals[i][1], intervals[j][1]);
      intervals.splice(i, 1);
    }
  }
  return intervals;
};
