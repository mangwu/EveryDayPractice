/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-18 15:49:25                                                  *
 * @LastModifiedDate: 2022-10-18 16:03:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在一个 8 x 8 的棋盘上，有一个白色的车（Rook），用字符 'R' 表示。棋盘上还可能存在空方块，白色的象（Bishop）以及黑色的卒（pawn），分别用字符 '.'，'B' 和 'p' 表示。不难看出，大写字符表示的是白棋，小写字符表示的是黑棋。

// 车按国际象棋中的规则移动。东，西，南，北四个基本方向任选其一，然后一直向选定的方向移动，直到满足下列四个条件之一：

// 棋手选择主动停下来。
// 棋子因到达棋盘的边缘而停下。
// 棋子移动到某一方格来捕获位于该方格上敌方（黑色）的卒，停在该方格内。
// 车不能进入/越过已经放有其他友方棋子（白色的象）的方格，停在友方棋子前。
// 你现在可以控制车移动一次，请你统计有多少敌方的卒处于你的捕获范围内（即，可以被一步捕获的棋子数）。

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function (board) {
  // 先找到车
  let x = 0;
  let y = 0;
  outer: for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[i][j] === "R") {
        x = i;
        y = j;
        break outer;
      }
    }
  }
  let ans = 0;
  // 在数轴上进行模拟
  for (let i = x + 1; i < 8; i++) {
    if (board[i][y] === "p") {
      ans++;
      break;
    } else if (board[i][y] === "B") {
      break;
    }
  }
  for (let i = x - 1; i >= 0; i--) {
    if (board[i][y] === "p") {
      ans++;
      break;
    } else if (board[i][y] === "B") {
      break;
    }
  }
  for (let i = y + 1; i < 8; i++) {
    if (board[x][i] === "p") {
      ans++;
      break;
    } else if (board[x][i] === "B") {
      break;
    }
  }
  for (let i = y - 1; i >= 0; i--) {
    if (board[x][i] === "p") {
      ans++;
      break;
    } else if (board[x][i] === "B") {
      break;
    }
  }
  return ans;
};

