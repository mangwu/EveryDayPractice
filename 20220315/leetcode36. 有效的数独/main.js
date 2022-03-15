/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-15 18:42:55                                                  *
 * @LastModifiedDate: 2022-03-15 19:09:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
//

// 注意：

// 一个有效的数独（部分已被填充）不一定是可解的。
// 只需要根据以上规则，验证已经填入的数字是否有效即可。
// 空白格用 '.' 表示。

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // 和codewar的数独相似20220224codewars-Sudoku Solution Validator
  // 使用set保存一个1 - 9的表，查询27次即可
  const set = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  // 查询
  for (let i = 0; i < 9; i++) {
    const set1 = new Set(set);
    const set2 = new Set(set);
    const set3 = new Set(set);

    for (let j = 0; j < 9; j++) {
      // 横向查询
      if (set1.has(board[i][j])) {
        // console.log("横向", board[i][j]);
        set1.delete(board[i][j]);
      } else if (board[i][j] !== ".") {
        return false;
      }
      // 竖线查询
      if (set2.has(board[j][i])) {
        // console.log("竖向", board[j][i]);

        set2.delete(board[j][i]);
      } else if (board[j][i] !== ".") {
        return false;
      }
      // 查询块
      const x = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      const y = (i % 3) * 3 + j % 3;
      // console.log("块", x, y);
      if (set3.has(board[x][y])) {
        // console.log("块", board[x][y]);
        set3.delete(board[x][y]);
      } else if (board[x][y] !== ".") {
        return false;
      }
    }
  }
  return true;
};

isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);
