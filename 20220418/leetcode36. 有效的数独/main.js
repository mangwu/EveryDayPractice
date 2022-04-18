/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-18 15:34:07                                                  *
 * @LastModifiedDate: 2022-04-18 19:47:55                                      *
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
  const set = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
  // 检查横向和竖向
  for (let i = 0; i < 9; i++) {
    const setrow = new Set(set);
    const setcolumn = new Set(set);
    // 3 × 3
    const newSet = new Set(set);

    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== "." && !setrow.has(board[i][j])) {
        return false;
      } else {
        setrow.delete(board[i][j]);
      }
      if (board[j][i] !== "." && !setcolumn.has(board[j][i])) {
        return false;
      } else {
        setcolumn.delete(board[j][i]);
      }
      // 3 × 3 的x和y计算
      const x = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      const y = (i % 3) * 3 + (j % 3);
      if (board[x][y] !== "." && !newSet.has(board[x][y])) {
        return false;
      } else {
        newSet.delete(board[x][y]);
      }
    }
  }
  return true;
};
