/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-31 09:49:10                                                  *
 * @LastModifiedDate: 2022-03-31 17:44:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，
// 并将这些区域里所有的 'O' 用 'X' 填充。

// 实际上就是找到所有没有接触到边界的‘O’，将其替换为'X'
const DIRS = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const m = board.length;
  const n = board[0].length;
  const visited = [];
  let allOToX = [];
  const bfs = (x, y, visited) => {
    const Oarr = [[x, y]];
    let hasBorder = false;
    if (x == 0 || y == 0 || x == m - 1 || y == n - 1) {
      hasBorder = true;
    }
    visited[x * n + y] = true;
    let queue = [[x, y]];
    while (queue.length > 0) {
      const nxt = [];
      for (const q of queue) {
        for (const dir of DIRS) {
          const i = q[0] + dir[0];
          const j = q[1] + dir[1];
          if (
            i >= 0 &&
            j >= 0 &&
            i < m &&
            j < n &&
            board[i][j] == "O" &&
            !visited[i * n + j]
          ) {
            visited[i * n + j] = true;
            nxt.push([i, j]);
            Oarr.push([i, j]);
            if (i == 0 || j == 0 || i == m - 1 || j == n - 1) {
              hasBorder = true;
            }
          }
        }
      }
      queue = nxt;
    }
    return hasBorder ? [] : Oarr;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == "O" && !visited[i * n + j]) {
        allOToX = allOToX.concat(bfs(i, j, visited));
      }
    }
  }
  for (const ele of allOToX) {
    board[ele[0]][ele[1]] = "X";
  }
  return board;
};

//
// XXXXXX
// XOOXOX
// XXOXOX
// XOXXXO
// XXXOOX

solve([
  ["X", "X", "X", "X", "X", "X"],
  ["X", "O", "O", "X", "O", "X"],
  ["X", "X", "O", "X", "O", "X"],
  ["X", "O", "X", "X", "X", "O"],
  ["X", "X", "X", "O", "O", "X"],
]);

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  //
};
