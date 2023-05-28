/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-28 10:34:41                                                  *
 * @LastModifiedDate: 2023-05-28 10:41:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始、大小为 m x n 的二维矩阵 grid ，请你求解大小同样为 m x n 的答案矩阵 answer 。

// 矩阵 answer 中每个单元格 (r, c) 的值可以按下述方式进行计算：

// 令 topLeft[r][c] 为矩阵 grid 中单元格 (r, c) 左上角对角线上 不同值 的数量。
// 令 bottomRight[r][c] 为矩阵 grid 中单元格 (r, c) 右下角对角线上 不同值 的数量。
// 然后 answer[r][c] = |topLeft[r][c] - bottomRight[r][c]| 。

// 返回矩阵 answer 。

// 矩阵对角线 是从最顶行或最左列的某个单元格开始，向右下方向走到矩阵末尾的对角线。

// 如果单元格 (r1, c1) 和单元格 (r, c) 属于同一条对角线且 r1 < r ，则单元格 (r1, c1) 属于单元格 (r, c) 的左上对角线。类似地，可以定义右下对角线。

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var differenceOfDistinctValues = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const ans = new Array(m).fill(0).map((v) => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const topLeftSet = new Set();
      const bottomRightSet = new Set();
      let x = i - 1;
      let y = j - 1;
      while (x >= 0 && x < m && y >= 0 && y < n) {
        topLeftSet.add(grid[x][y]);
        x--;
        y--;
      }
      x = i + 1;
      y = j + 1;
      while (x >= 0 && x < m && y >= 0 && y < n) {
        bottomRightSet.add(grid[x][y]);
        x++;
        y++;
      }
      ans[i][j] = Math.abs(topLeftSet.size - bottomRightSet.size);
    }
  }
  return ans;
};
