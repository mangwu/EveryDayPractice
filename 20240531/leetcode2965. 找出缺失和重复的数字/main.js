/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-05-31 09:47:46                                                  *
 * @LastModifiedDate: 2024-05-31 10:05:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的二维整数矩阵 grid，大小为 n * n ，其中的值在 [1, n2] 范围内。除了 a 出现 两次，b 缺失 之外，每个整数都 恰好出现一次 。

// 任务是找出重复的数字a 和缺失的数字 b 。

// 返回一个下标从 0 开始、长度为 2 的整数数组 ans ，其中 ans[0] 等于 a ，ans[1] 等于 b 。

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const n = grid.length;
  let ans = [];
  const set = new Set(new Array(n * n).fill(0).map((v, i) => i + 1));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      set.has(grid[i][j]) ? set.delete(grid[i][j]) : ans.push(grid[i][j]);
    }
  }
  return [...ans, ...set];
};
