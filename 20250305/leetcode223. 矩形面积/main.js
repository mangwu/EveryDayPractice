/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-03-05 15:21:11                                                  *
 * @LastModifiedDate: 2025-03-05 15:35:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你 二维 平面上两个 由直线构成且边与坐标轴平行/垂直 的矩形，请你计算并返回两个矩形覆盖的总面积。

// 每个矩形由其 左下 顶点和 右上 顶点坐标表示：

// 第一个矩形由其左下顶点 (ax1, ay1) 和右上顶点 (ax2, ay2) 定义。
// 第二个矩形由其左下顶点 (bx1, by1) 和右上顶点 (bx2, by2) 定义。

/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  // x区间
  // [ax1, ax2], [bx1, bx2]
  const area = (ay2 - ay1) * (ax2 - ax1) + (by2 - by1) * (bx2 - bx1);
  if (bx1 >= ax2 || ax1 >= bx2) return area;
  let width = Math.min(ax2, bx2) - Math.max(ax1, bx1);
  // y区间
  // [ay1, ay2], [by1, by2]
  if (by1 >= ay2 || ay1 >= by2) return area;
  let height = Math.min(ay2, by2) - Math.max(ay1, by1);
  return area - width * height;
};
