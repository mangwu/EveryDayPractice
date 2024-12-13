/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-13 15:33:28                                                  *
 * @LastModifiedDate: 2024-12-13 17:19:39                                      *
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
  points.sort((a, b) => a[0] - b[0]);
  // 暴力遍历
  for (let i = 0; i < n - 3; i++) {
    for (let j = i + 1; j < n - 2; j++) {
      for (let k = j + 1; k < n - 1; k++) {
        for (let l = k + 1; l < n; l++) {}
      }
    }
  }
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
  if(a[0] !== b[0]) return -1;
  if(c[0] !== d[0]) return -
}
