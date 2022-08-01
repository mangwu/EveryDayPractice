/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-01 21:15:15                                                  *
 * @LastModifiedDate: 2022-08-01 21:42:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；
// 否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
// 同一个单元格内的字母不允许被重复使用。
// 例如，在下面的 3×4 的矩阵中包含单词 "ABCCED"（单词中的字母已标出）。
const DIRS = [
  [1, 0],
  [0, 1],
  [0, -1],
  [-1, 0],
];
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const len = word.length;
  const m = board.length;
  const n = board[0].length;
  const dfs = (x, y, idx, visited) => {
    if (board[x][y] !== word[idx]) {
      return false;
    }
    if (idx == len - 1) {
      return true;
    }
    for (const dir of DIRS) {
      const i = x + dir[0];
      const j = y + dir[1];
      if (i >= 0 && j >= 0 && i < m && j < n && !visited[i * n + j]) {
        visited[i * n + j] = true;
        if (dfs(i, j, idx + 1, visited)) {
          return true;
        }
        visited[i * n + j] = false;
      }
    }
    return false;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == word[0]) {
        const visited = [];
        visited[i * n + j] = true;
        if (dfs(i, j, 0, visited)) {
          return true;
        }
      }
    }
  }
  return false;
};
