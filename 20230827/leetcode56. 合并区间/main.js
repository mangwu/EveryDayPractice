/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-27 23:27:35                                                  *
 * @LastModifiedDate: 2023-08-27 23:35:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const n = intervals.length;
  intervals.sort((a, b) => a[0] - b[0]);
  const ans = [];
  for (let i = 0; i < n; i++) {
    let [start, end] = intervals[i];
    while (i + 1 < n && intervals[i + 1][0] <= end) {
      i++;
      end = Math.max(end, intervals[i][1]);
    }
    ans.push([start, end]);
  }
  return ans;
};
