/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-24 09:23:35                                                  *
 * @LastModifiedDate: 2022-06-24 11:11:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 根据 百度百科 ， 生命游戏 ，简称为 生命 ，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。

// 给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。
// 每个细胞都具有一个初始状态： 1 即为 活细胞 （live），或 0 即为 死细胞 （dead）。
// 每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

// 如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
// 如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
// 如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
// 如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
// 下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，
// 其中细胞的出生和死亡是同时发生的。给你 m x n 网格面板 board 的当前状态，返回下一个状态。

//
const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
  [1, 1],
  [-1, -1],
  [-1, 1],
  [1, -1],
];

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  // 根据当前状态构建一个生命表，表示当前位置周围的情况
  const m = board.length;
  const n = board[0].length;
  const status = new Array(m).fill(0).map((_v) => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0;
      for (const dir of DIRS) {
        const x = i + dir[0];
        const y = j + dir[1];
        if (board[x] && board[x][y] != undefined) {
          sum += board[x][y];
        }
      }
      status[i][j] = sum;
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == 1) {
        // 死亡
        if (status[i][j] < 2 || status[i][j] > 3) {
          board[i][j] = 0;
        }
      } else {
        // 复活
        if (status[i][j] == 3) {
          board[i][j] = 1;
        }
      }
    }
  }
};

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
  // 原地修改
  const m = board.length;
  const n = board[0].length;
  // -1 : 原来是活的现在死了 2:原来是死的，现在活了
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0;
      for (const dir of DIRS) {
        const x = i + dir[0];
        const y = j + dir[1];
        if (board[x] && board[x][y] != undefined) {
          // 原来是活的
          if (board[x][y] == -1 || board[x][y] == 1) {
            sum++;
          }
        }
      }
      if (board[i][j] == 1) {
        // 死亡
        if (sum < 2 || sum > 3) {
          board[i][j] = -1;
        }
      } else {
        // 复活
        if (sum == 3) {
          board[i][j] = 2;
        }
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == 2) {
        board[i][j] = 1;
      } else if (board[i][j] == -1) {
        board[i][j] = 0;
      }
    }
  }
};
