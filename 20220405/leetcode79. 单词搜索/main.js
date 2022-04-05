/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-05 18:35:59                                                  *
 * @LastModifiedDate: 2022-04-05 21:27:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。
// 如果 word 存在于网格中，返回 true ；否则，返回 false 。

// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
// 同一个单元格内的字母不允许被重复使用。
const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;
  const len = word.length;
  if (m * n < len) {
    return false;
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      console.log(board[i][j]);
      if (board[i][j] == word[0]) {
        // 进行一次层序遍历
        let current = 1;
        if (current == len) {
          return true;
        }
        let queue = [[i, j]];
        const visited = [];
        visited[i * n + j] = true;
        while (queue.length > 0) {
          const nxt = [];
          for (const q of queue) {
            for (const dir of DIRS) {
              const x = dir[0] + q[0];
              const y = dir[1] + q[1];
              if (
                x >= 0 &&
                y >= 0 &&
                x < m &&
                y < n &&
                !visited[x * n + y] &&
                board[x][y] == word[current]
              ) {
                nxt.push([x, y]);
                visited[x * n + y] = true;
              }
            }
          }
          queue = nxt;
          current++;
          if (current == len && queue.length > 0) {
            return true;
          }
        }
      }
    }
  }
  return false;
};

// 上述的层序遍历解法是错误的,因为无法层序遍历无法遍历到所有路径

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const m = board.length;
  const n = board[0].length;
  const len = word.length;
  if (m * n < len) {
    return false;
  }
  const dfs = (x, y, cur, visited) => {
    if (cur == len) {
      return true;
    }
    let ans = false;
    for (const dir of DIRS) {
      const i = dir[0] + x;
      const j = dir[1] + y;
      if (
        i >= 0 &&
        j >= 0 &&
        i < m &&
        j < n &&
        !visited[i * n + j] &&
        board[i][j] == word[cur]
      ) {
        visited[i * n + j] = true;
        ans = ans || dfs(i, j, cur + 1, visited);
        visited[i * n + j] = false;
      }
    }
    return ans;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] == word[0]) {
        const visited = [];
        visited[i * n + j] = true;
        if (dfs(i, j, 1, visited)) {
          return true;
        }
      }
    }
  }
  return false;
};
