/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-20 09:49:03                                                  *
 * @LastModifiedDate: 2022-10-20 10:10:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// A 和 B 在一个 3 x 3 的网格上玩井字棋。

// 井字棋游戏的规则如下：

// 玩家轮流将棋子放在空方格 (" ") 上。
// 第一个玩家 A 总是用 "X" 作为棋子，而第二个玩家 B 总是用 "O" 作为棋子。
// "X" 和 "O" 只能放在空方格中，而不能放在已经被占用的方格上。
// 只要有 3 个相同的（非空）棋子排成一条直线（行、列、对角线）时，游戏结束。
// 如果所有方块都放满棋子（不为空），游戏也会结束。
// 游戏结束后，棋子无法再进行任何移动。
// 给你一个数组 moves，其中每个元素是大小为 2 的另一个数组（元素分别对应网格的行和列），
// 它按照 A 和 B 的行动顺序（先 A 后 B）记录了两人各自的棋子位置。

// 如果游戏存在获胜者（A 或 B），就返回该游戏的获胜者；如果游戏以平局结束，则返回 "Draw"；
// 如果仍会有行动（游戏未结束），则返回 "Pending"。

// 你可以假设 moves 都 有效（遵循井字棋规则），网格最初是空的，A 将先行动。

/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  const n = moves.length;
  if (n < 5) {
    return "Pending";
  }
  const grid = new Array(3).fill(0).map((_v) => new Array(3).fill(0));
  for (let i = 0; i < n; i++) {
    grid[moves[i][0]][moves[i][1]] = i % 2 == 0 ? "X" : "O";
  }
  return whoWin(grid, n);
};

var whoWin = function (grid, n) {
  for (let i = 0; i < 3; i++) {
    let row = grid[i].join("");
    if (row == "XXX") {
      return "A";
    } else if (row === "OOO") {
      return "B";
    }
    let col = grid[0][i] + grid[1][i] + grid[2][i];
    if (col == "XXX") {
      return "A";
    } else if (col === "OOO") {
      return "B";
    }
  }
  let oblique1 = grid[0][0] + grid[1][1] + grid[2][2];
  if (oblique1 == "XXX") {
    return "A";
  } else if (oblique1 === "OOO") {
    return "B";
  }
  let oblique2 = grid[0][2] + grid[1][1] + grid[2][0];
  if (oblique2 == "XXX") {
    return "A";
  } else if (oblique2 === "OOO") {
    return "B";
  }
  return n === 9 ? "Draw" : "Pending";
};

// XOX
// OXO
// XOX

// XXX
// OOO
//

// XXX
// XOO
// XOO
