/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-24 23:48:03                                                  *
 * @LastModifiedDate: 2023-01-24 23:52:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个数组 points ，其中 points[i] = [xi, yi] ，表示第 i 个点在二维平面上的坐标。多个点可能会有 相同 的坐标。

// 同时给你一个数组 queries ，其中 queries[j] = [xj, yj, rj] ，表示一个圆心在 (xj, yj) 且半径为 rj 的圆。

// 对于每一个查询 queries[j] ，计算在第 j 个圆 内 点的数目。如果一个点在圆的 边界上 ，我们同样认为它在圆 内 。

// 请你返回一个数组 answer ，其中 answer[j]是第 j 个查询的答案。

/**
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
  const ans = [];
  const n = queries.length;
  for (let i = 0; i < n; i++) {
    let res = 0;
    for (const point of points) {
      if (
        Math.pow(point[0] - queries[i][0], 2) +
          Math.pow(point[1] - queries[i][1], 2) <=
        queries[i][2] ** 2
      ) {
        res++;
      }
    }
    ans[i] = res;
  }
  return ans;
};
