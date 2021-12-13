/**
 * @description 807. 保持城市天际线
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-13 19:00:07
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
//  给你一座由 n x n 个街区组成的城市，每个街区都包含一座立方体建筑。给你一个下标从 0 开始的 n x n 整数矩阵 grid ，其中 grid[r][c] 表示坐落于 r 行 c 列的建筑物的 高度 。

//  城市的 天际线 是从远处观察城市时，所有建筑物形成的外部轮廓。从东、南、西、北四个主要方向观测到的 天际线 可能不同。

//  我们被允许为 任意数量的建筑物 的高度增加 任意增量（不同建筑物的增量可能不同） 。 高度为 0 的建筑物的高度也可以增加。然而，增加的建筑物高度 不能影响 从任何主要方向观察城市得到的 天际线 。

//  在 不改变 从任何主要方向观测到的城市 天际线 的前提下，返回建筑物可以增加的 最大高度增量总和 。

var maxOfArray = function (array) {
  let ans = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > ans) {
      ans = array[i];
    }
  }
  return ans;
};
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
  /**
   * 1. 题目关键在于找出两个限制数组最大值的一维数组，x轴最大值和y轴最大值
   * 2. 二者相交处取小的那一个即可
   */
  let rowMaxs = [];
  let columnMaxs = [];
  for (let i = 0; i < grid[0].length; i++) {
    // 获得列数组
    let rowMax = 0;
    let columnMax = 0;
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][i] > rowMax) {
        rowMax = grid[j][i];
      }
      if (grid[i][j] > columnMax) {
        columnMax = grid[i][j];
      }
    }
    rowMaxs.push(rowMax);
    columnMaxs.push(columnMax);
  }
  // for (let i = 0; i < grid.length; i++) {
  //   let max = 0;
  //   for (let j = 0; j < grid.length; j++) {
  //     if (grid[i][j] > max) {
  //       max = grid[i][j];
  //     }
  //   }
  //   columnMax.push(max);
  // }
  // 最大值
  let ans = 0;
  for (let i = 0; i < columnMaxs.length; i++) {
    for (let j = 0; j < rowMaxs.length; j++) {
      if (rowMaxs[j] < columnMaxs[i]) {
        ans = ans + rowMaxs[j] - grid[i][j];
      } else {
        ans = ans + columnMaxs[i] - grid[i][j];
      }
    }
  }
  return ans;
};
console.log(
  maxIncreaseKeepingSkyline([
    [3, 0, 8, 4],
    [2, 4, 5, 7],
    [9, 2, 6, 3],
    [0, 3, 1, 0],
  ])
);
