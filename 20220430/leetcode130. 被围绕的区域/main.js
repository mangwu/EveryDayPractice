/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-30 22:14:51                                                  *
 * @LastModifiedDate: 2022-05-01 00:23:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，
// 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  const m = board.length;
  const n = board[0].length;
  const visited = [];
  let ans = [];
  // bfs
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (board[i][j] == "O" && !visited[i * n + j]) {
        visited[i * n + j] = true;
        let queue = [[i, j]];
        const res = [[i, j]];
        let flag = false;
        while (queue.length > 0) {
          const nxt = [];
          for (const q of queue) {
            if (q[0] == 0 || q[1] == 0 || q[0] == m - 1 || q[1] == n - 1) {
              flag = true;
            }
            for (const dir of DIRS) {
              const x = dir[0] + q[0];
              const y = dir[1] + q[1];
              if (
                x >= 0 &&
                x < m &&
                y >= 0 &&
                y < n &&
                board[x][y] == "O" &&
                !visited[x * n + y]
              ) {
                visited[x * n + y] = true;
                nxt.push([x, y]);
                res.push([x, y]);
              }
            }
          }
          queue = nxt;
        }

        if (!flag) {
          ans = ans.concat(res);
        }
      }
    }
  }
  for (const a of ans) {
    board[a[0]][a[1]] = "X";
  }
  return board;
};

// [
//   ["O", "X", "O", "O", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "X", "O", "O", "O", "O", "X"],
//   ["O", "X", "O", "X", "O", "O", "O", "O", "X"],
//   ["O", "O", "O", "O", "X", "O", "O", "O", "O"],
//   ["X", "O", "O", "O", "O", "O", "O", "O", "X"],
//   ["X", "X", "O", "O", "X", "O", "X", "O", "X"],
//   ["O", "O", "O", "X", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "X", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "X", "X", "O", "O"],
// ];
