/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-11 10:31:10                                                  *
 * @LastModifiedDate: 2022-12-11 10:36:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 m x n 大小的矩阵 grid ，由若干正整数组成。

// 执行下述操作，直到 grid 变为空矩阵：

// 从每一行删除值最大的元素。如果存在多个这样的值，删除其中任何一个。
// 将删除元素中的最大值与答案相加。
// 注意 每执行一次操作，矩阵中列的数据就会减 1 。

// 返回执行上述操作后的答案。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function (grid) {
  let ans = 0;
  for (const g of grid) {
    g.sort((a, b) => b - a);
  }
  const m = grid.length;
  const n = grid[0].length;
  for (let i = 0; i < n; i++) {
    let cur = grid[0][i];
    for (let j = 0; j < m; j++) {
      cur = Math.max(grid[j][i],cur);
    }
    ans += cur;
  }
  return ans;
};
