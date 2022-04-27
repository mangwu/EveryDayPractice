/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-27 18:35:34                                                  *
 * @LastModifiedDate: 2022-04-27 19:05:00                                      *
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
  let right = len - 1;
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
  // 需要考虑三种情况 => 1.只于nums[left]部分重合 2.不与任何元素重合3.
  if (intervals[left][1] >= newInterval[1]) {
    return intervals;
  } else {
    intervals[left][1] = newInterval[1];
    // 判断后面一个的情况
    if (left < len - 1 && newInterval[1] >= intervals[left + 1][0]) {
      intervals[left][1] = intervals[left + 1][1];
      intervals.splice(left + 1, 1);
    }
  }
  return intervals;
};
