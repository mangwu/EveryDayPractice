/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-24 08:57:11                                                  *
 * @LastModifiedDate: 2023-08-24 11:16:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 这里有一幅服务器分布图，服务器的位置标识在 m * n 的整数矩阵网格 grid 中，1 表示单元格上有服务器，0 表示没有。

// 如果两台服务器位于同一行或者同一列，我们就认为它们之间可以进行通信。

// 请你统计并返回能够与至少一台其他服务器进行通信的服务器的数量。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const set = new Set();
  // 两次遍历
  for (let i = 0; i < m; i++) {
    let curRow = [];
    for (let j = 0; j < n; j++) if (grid[i][j]) curRow.push(i * n + j);
    if (curRow.length > 1) curRow.forEach((v) => set.add(v));
  }
  for (let j = 0; j < n; j++) {
    let curCol = [];
    for (let i = 0; i < m; i++) if (grid[i][j]) curCol.push(i * n + j);
    if (curCol.length > 1) curCol.forEach((v) => set.add(v));
  }
  return set.size;
};
