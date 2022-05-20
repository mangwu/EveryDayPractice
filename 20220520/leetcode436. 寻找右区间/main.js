/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-20 15:59:01                                                  *
 * @LastModifiedDate: 2022-05-20 16:53:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个区间数组 intervals ，其中 intervals[i] = [starti, endi] ，且每个 starti 都 不同 。
// 区间 i 的 右侧区间 可以记作区间 j ，并满足 startj >= endi ，且 startj 最小化 。
// 返回一个由每个区间 i 的 右侧区间 的最小起始位置组成的数组。如果某个区间 i 不存在对应的 右侧区间 ，则下标 i 处的值设为 -1 。

// 示例 1：

// 输入：intervals = [[1,2]]
// 输出：[-1]
// 解释：集合中只有一个区间，所以输出-1。
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
  // 因为starti不同，可以通过这个记录没饿过intervals的索引
  const n = intervals.length;
  const hash = new Map();
  //
  const starts = [];
  // 记录索引和值
  for (let i = 0; i < n; i++) {
    hash.set(intervals[i][0], i);
    starts.push(intervals[i][0]);
  }
  starts.sort((a, b) => a - b);
  const ans = [];
  for (let i = 0; i < n; i++) {
    // 二分找到比target大(可以等于)的start
    // 没有找到结果就是-1
    let target = intervals[i][1];
    if (starts[n - 1] < target) {
      // 最后一个值都小于target就是没有结果
      ans[i] = -1;
      continue;
    }
    // 二分查找
    let left = 0;
    let right = n - 1;
    //  [left, right];
    while (left < right) {
      let mid = (left + right) >> 1;
      // 找到第一个比target大的元素
      if (starts[mid] >= target) {
        right = mid; // 可能是结果
      } else {
        left = mid + 1;
      }
    }
    ans[i] = hash.get(starts[left]);
  }
  return ans;
};

// [1,2] [2,3] [3,4]
// [0,1],[-2,2],[-1,4],[4,5],[3,8],[-3,9]
// [-3,9],[-2,2],[-1,4],[0,1],[3,8],[4,5]

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
  // 可以使用一个二维数组来同时保存start和它的索引，不必使用hash表
  const n = intervals.length;
  const starts = [];
  // 记录索引和值
  for (let i = 0; i < n; i++) {
    starts.push([intervals[i][0], i]);
  }
  starts.sort((a, b) => a[0] - b[0]);
  const ans = [];
  for (let i = 0; i < n; i++) {
    // 二分找到比target大(可以等于)的start
    // 没有找到结果就是-1
    let target = intervals[i][1];
    if (starts[n - 1][0] < target) {
      // 最后一个值都小于target就是没有结果
      ans[i] = -1;
      continue;
    }
    // 二分查找
    let left = 0;
    let right = n - 1;
    //  [left, right];
    while (left < right) {
      let mid = (left + right) >> 1;
      // 找到第一个比target大的元素
      if (starts[mid][0] >= target) {
        right = mid; // 可能是结果
      } else {
        left = mid + 1;
      }
    }
    ans[i] = starts[left][1];
  }
  return ans;
};
