/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-17 15:40:54                                                  *
 * @LastModifiedDate: 2024-12-17 15:42:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在无限平面上有 n 个点。给定两个整数数组 xCoord 和 yCoord，其中 (xCoord[i], yCoord[i]) 表示第 i 个点的坐标。

// 你的任务是找出满足以下条件的矩形可能的 最大 面积：

// 矩形的四个顶点必须是数组中的 四个 点。
// 矩形的内部或边界上 不能 包含任何其他点。
// 矩形的边与坐标轴 平行 。
// 返回可以获得的 最大面积 ，如果无法形成这样的矩形，则返回 -1。

/**
 * @param {number[]} xCoord
 * @param {number[]} yCoord
 * @return {number}
 */
var maxRectangleArea = function (xCoord, yCoord) {
  // 数据量增大，无法用暴力法解题，最大时间复杂度O(nlogn)
  const n = xCoord.length;
};
