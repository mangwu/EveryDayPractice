/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-29 10:35:51                                                  *
 * @LastModifiedDate: 2022-04-29 11:00:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const res = new Array(n).fill(0).map((_v) => new Array(n).fill(0));
  let dir_idx = 0;
  let start = [0, 0];
  const visited = [];
  visited[0] = true;
  for (let i = 0; i < n * n; i++) {
    res[start[0]][start[1]] = i + 1;
    let x = start[0] + DIRS[dir_idx][0];
    let y = start[1] + DIRS[dir_idx][1];
    if (x >= 0 && x < n && y >= 0 && y < n && !visited[x * n + y]) {
      start = [x, y];
      visited[x * n + y] = true;
    } else {
      dir_idx = (dir_idx + 1) % 4;
      x = start[0] + DIRS[dir_idx][0];
      y = start[1] + DIRS[dir_idx][1];
      start = [x, y];
      visited[x * n + y] = true;
    }
  }
  return res;
};
