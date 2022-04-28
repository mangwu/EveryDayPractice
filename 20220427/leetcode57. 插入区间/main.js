/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-27 18:35:34                                                  *
 * @LastModifiedDate: 2022-04-28 15:09:11                                      *
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
  // 二分查找
  const len = intervals.length;
  if (len == 0) {
    intervals.push(newInterval);
    return intervals;
  }
  let left = 0;
  let right = len;
  // [left, right)
  while (left < right) {
    let mid = (left + right) >> 1;
    // 找到第一个比目标值大的索引
    if (intervals[mid][0] >= newInterval[0]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  let l = 0;
  let r = len;
  // [left, right)
  while (l < r) {
    let mid = (l + r) >> 1;
    // 找到第一个比目标值大的索引
    if (intervals[mid][0] >= newInterval[1]) {
      // 左区间
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  if (left == len) {
    // 只与最后一个有关
    if (newInterval[0] > intervals[left - 1][1]) {
      intervals.push(newInterval);
      return intervals;
    } else {
      intervals[left - 1][1] = Math.max(intervals[left - 1][1], newInterval[1]);
      return intervals;
    }
  }
  if (left == 0) {
    // 最小值数组中的区间都小
    if (l == 0) {
      if (newInterval[1] < intervals[0][0]) {
        intervals.unshift(newInterval);
        return intervals;
      } else {
        intervals[0][0] = newInterval[0];
        return intervals;
      }
    }
    if (l == len) {
      newInterval[1] = Math.max(newInterval[1], intervals[len - 1][1]);
      return [newInterval];
    }
    intervals[0][0] = newInterval[0];
    if (newInterval[1] == intervals[l][0]) {
      intervals[0][1] = intervals[l][1];
      intervals.splice(left + 1, l - left);
      return intervals;
    } else {
      intervals[0][1] = Math.max(intervals[l - 1][1], newInterval[1]);
      intervals.splice(left + 1, l - left - 1);
      return intervals;
    }
  }
  if (newInterval[0] <= intervals[left - 1][1]) {
    if (l == len) {
      intervals[left - 1][1] = Math.max(newInterval[1], intervals[len - 1][1]);
      intervals.splice(left, len - left);
      return intervals;
    }
    if (intervals[l][0] == newInterval[1]) {
      intervals[left - 1][1] = intervals[l][1];
      intervals.splice(left, l - left + 1);
      return intervals;
    }
    intervals[left - 1][1] = Math.max(newInterval[1], intervals[l - 1][1]);
    intervals.splice(left, l - left);
    return intervals;
  } else if (l == left) {
    if (intervals[l][0] == newInterval[1]) {
      intervals[l][0] = newInterval[0];
      return intervals;
    } else {
      intervals.splice(l, 0, newInterval);
      return intervals;
    }
  } else {
    if (l == len) {
      intervals[left][0] = newInterval[0];
      intervals[left][1] = Math.max(newInterval[1], intervals[len - 1][1]);
      intervals.splice(left + 1, len - left - 1);
      return intervals;
    }
    if (intervals[l][0] == newInterval[1]) {
      intervals[left][0] = newInterval[0];
      intervals[left][1] = intervals[l][1];
      intervals.splice(left + 1, l - left);
      return intervals;
    }
    intervals[left][0] = newInterval[0];
    intervals[left][1] = Math.max(newInterval[1], intervals[l - 1][1]);
    intervals.splice(left + 1, l - left - 1);
    return intervals;
  }
};
