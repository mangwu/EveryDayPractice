/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-07-07 22:53:37                                                  *
 * @LastModifiedDate: 2024-07-07 23:18:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的 8 x 8 网格 board ，其中 board[r][c] 表示游戏棋盘上的格子 (r, c) 。棋盘上空格用 '.' 表示，白色格子用 'W' 表示，黑色格子用 'B' 表示。

// 游戏中每次操作步骤为：选择一个空格子，将它变成你正在执行的颜色（要么白色，要么黑色）。但是，合法 操作必须满足：涂色后这个格子是 好线段的一个端点 （好线段可以是水平的，竖直的或者是对角线）。

// 好线段 指的是一个包含 三个或者更多格子（包含端点格子）的线段，线段两个端点格子为 同一种颜色 ，且中间剩余格子的颜色都为 另一种颜色 （线段上不能有任何空格子）。你可以在下图找到好线段的例子：

// 给你两个整数 rMove 和 cMove 以及一个字符 color ，表示你正在执行操作的颜色（白或者黑），如果将格子 (rMove, cMove) 变成颜色 color 后，是一个 合法 操作，那么返回 true ，如果不是合法操作返回 false 。
const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
  [-1, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
];
/**
 * @param {character[][]} board
 * @param {number} rMove
 * @param {number} cMove
 * @param {character} color
 * @return {boolean}
 */
var checkMove = function (board, rMove, cMove, color) {
  const m = board.length;
  const n = board[0].length;
  for (const dir of DIRS) {
    let len = 1;
    let flag = false;
    let x = dir[0] + rMove;
    let y = dir[1] + cMove;
    while (x >= 0 && x < m && y >= 0 && y < n) {
      if (board[x][y] === ".") {
        break;
      } else if (board[x][y] !== color) {
        len++;
      } else if (board[x][y] === color) {
        flag = true;
        len++;
        break;
      }
      x += dir[0];
      y += dir[1];
    }
    if (flag && len >= 3) return true;
  }
  return false;
};

[
  ["B", "W", ".", "W", ".", "W", "W", "."],
  ["B", "W", ".", ".", "W", "W", "W", "."],
  ["W", "B", ".", "W", "W", "W", "W", "."],
  ["B", "B", "W", ".", "W", ".", ".", "W"],
  ["B", ".", "B", "B", "B", ".", "B", "."],
  ["B", "W", "B", ".", "W", "B", "B", "."],
  [".", ".", ".", "B", "W", "B", ".", "."],
  ["W", "B", ".", "B", ".", ".", "B", "W"],
];
