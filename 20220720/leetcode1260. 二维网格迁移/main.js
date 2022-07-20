/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-20 09:14:18                                                  *
 * @LastModifiedDate: 2022-07-20 09:47:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 m 行 n 列的二维网格 grid 和一个整数 k。你需要将 grid 迁移 k 次。

// 每次「迁移」操作将会引发下述活动：

// 位于 grid[i][j] 的元素将会移动到 grid[i][j + 1]。
// 位于 grid[i][n - 1] 的元素将会移动到 grid[i + 1][0]。
// 位于 grid[m - 1][n - 1] 的元素将会移动到 grid[0][0]。
// 请你返回 k 次迁移操作后最终得到的 二维网格。
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  // 实际上就是数组元素右移
  const m = grid.length;
  const n = grid[0].length;
  k = k % (m * n);
  const arr = new Array(k).length;
  let i = m - 1;
  let j = n - 1;
  let idx = 0;
  outer: for (; i >= 0; i--) {
    j = n - 1;
    for (; j >= 0; j--) {
      if (idx == k) {
        break outer;
      }
      arr[idx] = grid[i][j];
    }
  }
  let temp = i;
  // 将数组元素右移
  for (; i >= 0; i--) {
    if (temp !== i) {
      j = n - 1;
    }
    for (; j >= 0; j--) {
      let y = (j + k) % n;
      let x = i + Math.floor((j + k) / n);
      grid[x][y] = grid[i][j];
    }
  }
  idx = k - 1;
  for (; idx >= 0; idx--) {
    let diffVal = k - 1 - idx;
    let y = diffVal % n;
    let x = Math.floor(diffVal / n);
    grid[x][y] = arr[idx];
  }
  return grid;
};
