/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-28 09:03:49                                                  *
 * @LastModifiedDate: 2023-08-28 09:55:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 无重叠的 ，按照区间起始端点排序的区间列表。

// 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  // 当前区间和新区间是否相交
  const n = intervals.length;
  if (n === 0) return [newInterval];
  for (let i = 0; i < n; i++) {
    const interval = intervals[i];
    if (!(interval[1] < newInterval[0] || interval[0] > newInterval[1])) {
      // 相交
      interval[1] = Math.max(interval[1], newInterval[1]);
      interval[0] = Math.min(interval[0], newInterval[0]);
      let end = interval[1];
      let j = i;
      while (j + 1 < n && intervals[j + 1][0] <= end) {
        end = Math.max(intervals[++j][1], end);
      }
      interval[1] = end;
      intervals.splice(i + 1, j - i);
      return intervals;
    }
  }
  // 不相交
  if (intervals[0][0] > newInterval[1]) {
    intervals.unshift(newInterval);
    return intervals;
  }
  if (intervals[n - 1][1] < newInterval[0]) {
    intervals.push(newInterval);
    return intervals;
  }
  for (let i = 1; i < n; i++) {
    let pre = intervals[i - 1];
    let cur = intervals[i];
    if (newInterval[0] > pre[1] && newInterval[1] < cur[0]) {
      intervals.splice(i, 0, newInterval);
      return intervals;
    }
  }
};
