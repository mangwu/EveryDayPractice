/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-17 13:17:33                                                  *
 * @LastModifiedDate: 2023-02-17 13:41:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由若干 0 和 1 组成的二维网格 grid，请你找出边界全部由 1 组成的最大 正方形 子网格，并返回该子网格中的元素数量。如果不存在，则返回 0。
// (x y)     (x, y+1)  (x, y + 2)   [0,0,0,idx]
// (x, y+3)  (x+1, y+3) (x+2, y+3)  [0,num,idx,0]
// (x+3, y+3)(x+3, y+2) (x+3, y+1)  [num,num,0,-idx]
// (x+3, y)  (x+2, y)   (x+1, y)    [num,0, -idx, 0];
const DIRS = [
  [0, 0, 0, 1],
  [0, 1, 1, 0],
  [1, 1, 0, -1],
  [1, 0, -1, 0],
];

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largest1BorderedSquare = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const max = Math.min(m, n);
  let sum = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        sum++;
      }
    }
  }
  let res = 0;
  for (let num = 1; num <= max && (num - 1) * 4 <= sum; num++) {
    for (let i = 0; i < m - num + 1; i++) {
      for (let j = 0; j < n - num + 1; j++) {
        if (grid[i][j] && isSquare(i, j, grid, num)) {
          res = num;
        }
      }
    }
  }
  return res;
};

var isSquare = function (x, y, grid, num) {
  for (let i = 0; i < num - 1; i++) {
    for (let idx = 0; idx < 4; idx++) {
      const nx = x + (num - 1) * DIRS[idx][0] + i * DIRS[idx][2];
      const ny = y + (num - 1) * DIRS[idx][1] + i * DIRS[idx][3];
      console.log(idx, nx, ny, num, x, y);
      if (!grid[nx][ny]) return false;
    }
  }
  return true;
};

// (x y)     (x, y+1)  (x, y + 2)   [0,0,0,idx]
// (x, y+3)  (x+1, y+3) (x+2, y+3)  [0,num,idx,0]
// (x+3, y+3)(x+3, y+2) (x+3, y+1)  [num,num,0,-idx]
// (x+3, y)  (x+2, y)   (x+1, y)    [num,0, -idx, 0];
