/**
 * @description  main.js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-09 13:53:30
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
//  给你一个字符串数组 board 表示井字游戏的棋盘。当且仅当在井字游戏过程中，棋盘有可能达到 board 所显示的状态时，才返回 true 。

//  井字游戏的棋盘是一个 3 x 3 数组，由字符 ' '，'X' 和 'O' 组成。字符 ' ' 代表一个空位。

//  以下是井字游戏的规则：

//  玩家轮流将字符放入空位（' '）中。
//  玩家 1 总是放字符 'X' ，而玩家 2 总是放字符 'O' 。
//  'X' 和 'O' 只允许放置在空位中，不允许对已放有字符的位置进行填充。
//  当有 3 个相同（且非空）的字符填充任何行、列或对角线时，游戏结束。

// 即需要判断给出的board在井字棋规则下是否可能出现
// 玩家1总是先放置 X 的数量一定大于等于 O的数量  0 <= XN - ON <= 1
// X或O只能有一个胜利
// X胜利则XN必大于ON
// O胜利则XN必等于ON

/**
 * @param {string[]} board
 * @return {boolean}
 */
var validTicTacToe = function (board) {
  // X的数量
  let xn = 0;
  let xWin = false; //相连的x
  // O的数量
  let on = 0;
  let oWin = false; //相连的O
  // 遍历board (3 * 3)
  for (let i of board) {
    if (i[0] === i[1] && i[1] === i[2] && i[1] === "X") {
      xWin = true;
    }
    if (i[0] === i[1] && i[1] === i[2] && i[1] === "O") {
      oWin = true;
    }
    for (let j = 0; j < i.length; j++) {
      if (i[j] === "X") {
        xn++;
      }
      if (i[j] === "O") {
        on++;
      }
    }
  }
  if (xn < on || xn > 1 + on) return false;
  // 判断竖行
  for (let i = 0; i < board.length; i++) {
    if (
      board[0][i] === "X" &&
      board[0][i] === board[1][i] &&
      board[0][i] === board[2][i]
    ) {
      xWin = true;
    }
    if (
      board[0][i] === "O" &&
      board[0][i] === board[1][i] &&
      board[0][i] === board[2][i]
    ) {
      oWin = true;
    }
  }
  // 判断斜行
  if (
    board[0][0] === "X" &&
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2]
  ) {
    xWin = true;
  }
  if (
    board[0][0] === "O" &&
    board[0][0] === board[1][1] &&
    board[0][0] === board[2][2]
  ) {
    oWin = true;
  }
  if (
    board[0][2] === "X" &&
    board[0][2] === board[1][1] &&
    board[0][2] === board[2][0]
  ) {
    xWin = true;
  }
  if (
    board[0][2] === "O" &&
    board[0][2] === board[1][1] &&
    board[0][2] === board[2][0]
  ) {
    oWin = true;
  }
  console.log(xn, on, xWin, oWin);
  // 特殊情况是: X乘以两行
  // if (xWin && xn > on) return true;
  // 不能同时获胜
  if (oWin && xWin) return false;
  // x获胜 xn必大于on
  if (xWin && xn === on) return false;
  // o获胜 xn必等于on
  if (oWin && xn !== on) return false;
  return true;
};
console.log(validTicTacToe(["OXX", "XOX", "OXO"]));