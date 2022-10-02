/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-02 10:37:45                                                  *
 * @LastModifiedDate: 2022-10-02 10:41:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let ans = 0;
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      let cur =
        grid[i][j] +
        grid[i - 1][j] +
        grid[i - 1][j - 1] +
        grid[i - 1][j + 1] +
        grid[i + 1][j - 1] +
        grid[i + 1][j] +
        grid[i + 1][j + 1];
      ans = Math.max(cur, ans);
    }
  }
  return ans;
};
