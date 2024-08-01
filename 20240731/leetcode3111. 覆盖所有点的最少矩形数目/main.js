/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-07-31 08:55:01                                                  *
 * @LastModifiedDate: 2024-07-31 09:17:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个二维整数数组 point ，其中 points[i] = [xi, yi] 表示二维平面内的一个点。同时给你一个整数 w 。你需要用矩形 覆盖所有 点。

// 每个矩形的左下角在某个点 (x1, 0) 处，且右上角在某个点 (x2, y2) 处，其中 x1 <= x2 且 y2 >= 0 ，同时对于每个矩形都 必须 满足 x2 - x1 <= w 。

// 如果一个点在矩形内或者在边上，我们说这个点被矩形覆盖了。

// 请你在确保每个点都 至少 被一个矩形覆盖的前提下，最少 需要多少个矩形。

// 注意：一个点可以被多个矩形覆盖。

/**
 * @param {number[][]} points
 * @param {number} w
 * @return {number}
 */
var minRectanglesToCoverPoints = function (points, w) {
  points.sort((a, b) => a[0] - b[0]);
  const n = points.length;
  let left = 0;
  let right = n - 1;
  let ans = 0;
  while (left <= right) {
    const [x, _y] = points[left];
    while (left < n && points[left][0] <= x + w) left++;
    ans++;
    if (left === right) return ans + 1;
    if (left > right) return ans;
    const [x2, _y2] = points[right];
    while (right >= 0 && points[right][0] >= x2 - w) right--;
    ans++;
  }
  return ans;
};
