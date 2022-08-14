/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-14 21:53:44                                                  *
 * @LastModifiedDate: 2022-08-14 23:09:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
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
  const n = intervals.length;
  if (n == 0) {
    intervals.push(newInterval);
    return intervals;
  }
  // 二分查找头部，找到最后一个小于等于newInterval[0]的区间索引
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    let mid = (left + right) >> 1;
    if (intervals[mid][0] == newInterval[0]) {
      right = mid;
      break;
    } else if (intervals[mid][0] > newInterval[0]) {
      // 在左边
      right = mid - 1;
    } else {
      // 在右边
      left = mid + 1;
    }
  }
  // right等于-1表示新区间的第一个值小于区间中的所有值
  // right等于n表示新区间的第一个值大于区间中的所有值
  let res1 = right;
  // 二分查找尾部，找到第一个大于newInterval[1]的区间索引
  left = 0;
  right = n;
  while (left < right) {
    let mid = (left + right) >> 1;
    if (intervals[mid][0] == newInterval[1]) {
      right = mid + 1;
      break;
    }
    if (intervals[mid][0] > newInterval[1]) {
      // 在左边
      right = mid;
    } else {
      // 在右边
      left = mid + 1;
    }
  }
  // 如果right等于n，表示newInterval[1]的值大于所有区间的第一个值
  // 如果right等于0，表示newInterval[1]的值小于所有区间的第一个值
  let res2 = right;
  // 特殊情况
  if (res2 == 0) {
    intervals.unshift(newInterval);
    return intervals;
  }
  if (res1 == n) {
    if (newInterval[0] > intervals[intervals.length - 1][1]) {
      intervals.push(newInterval);
    } else {
      intervals[intervals.length - 1][1] = Math.max(
        intervals[intervals.length - 1][1],
        newInterval[1]
      );
    }
    return intervals;
  }
  if (res1 == -1) {
    newInterval[1] = Math.max(newInterval[1], intervals[res2 - 1][1]);
    intervals.splice(0, res2, newInterval);
    return intervals;
  }
  // 常规情况 intervals[res1] 为第一个小于等于intervals[0]的区间
  // intervals[res2]为第一个大于等于intervals[1]的区间
  if (intervals[res1][1] >= newInterval[0]) {
    intervals[res1][1] = Math.max(
      intervals[res1][1],
      newInterval[1],
      intervals[res2 - 1][1]
    );
    intervals.splice(res1 + 1, res2 - res1 - 1);
    return intervals;
  } else {
    // 插入
    newInterval[1] = Math.max(newInterval[1], intervals[res2 - 1][1]);
    intervals.splice(res1 + 1, res2 - res1 - 1, newInterval);
    return intervals;
  }
};
