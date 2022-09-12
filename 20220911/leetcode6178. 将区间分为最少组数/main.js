/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-11 11:10:34                                                  *
 * @LastModifiedDate: 2022-09-11 11:51:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个二维整数数组 intervals ，其中 intervals[i] = [lefti, righti]
// 表示 闭 区间 [lefti, righti] 。

// 你需要将 intervals 划分为一个或者多个区间 组 ，
// 每个区间 只 属于一个组，且同一个组中任意两个区间 不相交 。

// 请你返回 最少 需要划分成多少个组。

// 如果两个区间覆盖的范围有重叠（即至少有一个公共数字），
// 那么我们称这两个区间是 相交 的。比方说区间 [1, 5] 和 [5, 8] 相交。
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minGroups = function (intervals) {
  // 贪心
  intervals.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  });
  const pq = new PriorityQueue2();
  pq.addVal(intervals[0][1]);
  const n = intervals.length;
  for (let i = 1; i < n; i++) {
    // 找到第一个比intervals[i][0]小的元素
    const idx = pq.binarySearch(intervals[i][0]);
    // 删除该元素
    if (idx !== -1) {
      pq.data.splice(idx, 1);
    }
    // 添加新元素
    pq.addVal(intervals[i][1]);
  }
  return pq.size();
};

class PriorityQueue2 {
  constructor(compare = (a, b) => a - b) {
    this.compare = compare;
    this.data = [];
  }
  binarySearch(target) {
    let left = 0;
    let right = this.data.length - 1;
    while (left <= right) {
      // 找到最后一个比target小的数
      let mid = (left + right) >> 1;
      if (this.compare(this.data[mid], target) >= 0) {
        // mid比target大
        right = mid - 1;
      } else {
        // mid比target小
        left = mid + 1;
      }
    }
    return right;
  }
  size() {
    return this.data.length;
  }
  addVal(val) {
    let res = this.binarySearch(val);
    this.data.splice(res + 1, 0, val);
  }
}

// 1 3 3  5 7 7 9
//
