/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-27 08:59:17                                                  *
 * @LastModifiedDate: 2023-07-27 09:05:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
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
  grid.forEach((v) => v.sort((a, b) => b - a));
  let res = 0;
  const n = grid[0].length;
  for (let i = 0; i < n; i++) {
    let cur = grid[0][i];
    for (const row of grid) {
      cur = Math.max(cur, row[i]);
    }
    res += cur;
  }
  return res;
};
