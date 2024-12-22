/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-13 15:33:28                                                  *
 * @LastModifiedDate: 2024-12-16 17:37:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个数组 points，其中 points[i] = [xi, yi] 表示无限平面上一点的坐标。

// 你的任务是找出满足以下条件的矩形可能的 最大 面积：

// 矩形的四个顶点必须是数组中的 四个 点。
// 矩形的内部或边界上 不能 包含任何其他点。
// 矩形的边与坐标轴 平行 。
// 返回可以获得的 最大面积 ，如果无法形成这样的矩形，则返回 -1。

/**
 * @param {number[][]} points
 * @return {number}
 */
var maxRectangleArea = function (points) {
  const n = points.length;
  if (n < 4) return -1;
  points.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : b[1] - a[1]));
  // 暴力遍历
  let res = -1;
  for (let i = 0; i < n - 3; i++) {
    for (let j = i + 1; j < n - 2; j++) {
      for (let k = j + 1; k < n - 1; k++) {
        for (let l = k + 1; l < n; l++) {
          const area = isRect(points[i], points[j], points[k], points[l]);
          if (
            area !== -1 &&
            !hasInnerPoint(
              points[i][0],
              points[k][0],
              points[j][1],
              points[i][1],
              points
            )
          ) {
            res = Math.max(res, area);
          }
        }
      }
    }
  }
  return res;
};

/**
 * @description 判断四个点构成的图形是否是平行于坐标轴的矩形
 * @param {number[]} a
 * @param {number[]} b
 * @param {number[]} c
 * @param {number[]} d
 * @returns {number} 矩形面积
 */
function isRect(a, b, c, d) {
  if (a[0] !== b[0] || c[0] !== d[0] || a[1] !== c[1] || b[1] !== d[1])
    return -1;
  const width = c[0] - a[0];
  const height = a[1] - b[1];
  return width * height;
}

/**
 * @description 判断矩形内是否包含点
 * @param {number} x1
 * @param {number} x2
 * @param {number} y1
 * @param {number} y2
 * @param {number[]} points
 * @returns {boolean}
 */
function hasInnerPoint(x1, x2, y1, y2, points) {
  for (const [x, y] of points) {
    if (x >= x1 && x <= x2 && y >= y1 && y <= y2) {
      if (x === x1 && y == y1) continue;
      if (x === x1 && y == y2) continue;
      if (x === x2 && y == y1) continue;
      if (x === x2 && y == y2) continue;
      return true;
    }
  }
  return false;
}
