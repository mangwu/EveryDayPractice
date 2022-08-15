/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-15 10:11:42                                                  *
 * @LastModifiedDate: 2022-08-15 10:22:00                                      *
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
  // 按照区间第一个进行大小进行排序
  intervals.sort((a, b) => a[0] - b[0]);
  const ans = [];
  const n = intervals.length;
  let pre = intervals[0];
  for (let i = 1; i < n; i++) {
    // 判断intervals[i]合pre的关系
    if (intervals[i][0] > pre[1]) {
      // 不相交，可以直接将pre更换了
      ans.push(pre);
      pre = intervals[i];
    } else {
      // 相交 取大值合并
      pre[1] = Math.max(pre[1], intervals[i][1]);
    }
  }
  ans.push(pre);
  return ans;
};
