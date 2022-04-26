/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-26 15:46:21                                                  *
 * @LastModifiedDate: 2022-04-26 15:59:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在 n x n 的网格 grid 中，我们放置了一些与 x，y，z 三轴对齐的 1 x 1 x 1 立方体。

// 每个值 v = grid[i][j] 表示 v 个正方体叠放在单元格 (i, j) 上。

// 现在，我们查看这些立方体在 xy 、yz 和 zx 平面上的投影。

// 投影 就像影子，将 三维 形体映射到一个 二维 平面上。从顶部、前面和侧面看立方体时，我们会看到“影子”。

// 返回 所有三个投影的总面积 。

// n == grid.length == grid[i].length

/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  const m = grid.length;
  // 俯视图面积和grid长度有关
  let topZ = 0;
  let rightX = 0;
  let leftY = 0;
  for (let i = 0; i < m; i++) {
    let rightMaxX = 0;
    let leftMaxY = 0;
    for (let j = 0; j < m; j++) {
      if (grid[i][j] > 0) {
        topZ++;
      }
      rightMaxX = Math.max(rightMaxX, grid[i][j]);
      leftMaxY = Math.max(leftMaxY, grid[j][i]);
    }
    rightX += rightMaxX;
    leftY += leftMaxY;
  }
  return topZ + rightX + leftY;
};
