/**
 * @description  main.js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-09-25 17:13:47
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

// 原地修改算法

// 给你一个大小为 n x n 的整数矩阵 grid 。

// 生成一个大小为 (n - 2) x (n - 2) 的整数矩阵  maxLocal ，并满足：

// maxLocal[i][j] 等于 grid 中以 i + 1 行和 j + 1
//  列为中心的 3 x 3 矩阵中的 最大值 。
// 换句话说，我们希望找出 grid 中每个 3 x 3 矩阵中的最大值。

// 返回生成的矩阵。

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const n = grid.length;
  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      grid[i - 1][j - 1] = Math.max(
        grid[i][j],
        grid[i - 1][j - 1],
        grid[i - 1][j],
        grid[i - 1][j + 1],
        grid[i][j - 1],
        grid[i][j + 1],
        grid[i + 1][j - 1],
        grid[i + 1][j],
        grid[i + 1][j + 1]
      );
    }
    // 将3×3矩阵第一行两个元素弹出，它们之后不会被用到
    grid[i - 1].pop();
    grid[i - 1].pop();
  }
  // 将最后两行弹出
  grid.pop();
  grid.pop();
  return grid;
};
