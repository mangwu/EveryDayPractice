/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-22 22:47:32                                                  *
 * @LastModifiedDate: 2025-02-23 18:42:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

// 数字 1-9 在每一行只能出现一次。
// 数字 1-9 在每一列只能出现一次。
// 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）

// 注意：

// 一个有效的数独（部分已被填充）不一定是可解的。
// 只需要根据以上规则，验证已经填入的数字是否有效即可。
// 空白格用 '.' 表示。

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const isValidX = (i) => {
    const set = new Set();
    for (let j = 0; j < 9; j++) {
      const ch = board[i][j];
      if (ch !== "." && set.has(ch)) {
        return false;
      }
      set.add(ch);
    }
    return true;
  };
  const isValidY = (j) => {
    const set = new Set();
    for (let i = 0; i < 9; i++) {
      const ch = board[i][j];
      if (ch !== "." && set.has(ch)) {
        return false;
      }
      set.add(ch);
    }
    return true;
  };
  const isValid33 = (x, y) => {
    const set = new Set();
    for (let i = x; i < x + 3; i++) {
      for (let j = y; j < y + 3; j++) {
        const ch = board[i][j];
        if (ch !== "." && set.has(ch)) {
          return false;
        }
        set.add(ch);
      }
    }
    return true;
  };
  let res = true;
  for (let i = 0; i < 9; i++) {
    res =
      res &&
      isValidX(i) &&
      isValidY(i) &&
      isValid33(3 * Math.floor(i / 3), (i % 3) * 3);
  }
  return res;
};

// 0 1 2
// 3 4 5
// 6 7 8

// 0 3 6
// 0 3 6
