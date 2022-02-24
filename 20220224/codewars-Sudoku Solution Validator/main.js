/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-24 09:28:54                                                  *
 * @LastModifiedDate: 2022-02-24 10:36:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 数独表盘构成条件
// 每行每列都包含[1-9]
// 共9个3乘3都属于

/**
 * @description 判断一个表盘是否属于数独表盘
 * @param {Array} board 9 * 9的数独表盘
 */
function validSolution(board) {
  // 判断是否能构成数独表盘
  // 每列每行都是[0-9]
  for (const column of board) {
    let sum = 0;
    for (const num of column) {
      if (num > 0 && num < 10) {
        sum += num;
      } else {
        return false;
      }
    }
    if (sum !== 45) {
      return false;
    }
  }
  // 列

  for (let i = 0; i < 9; i++) {
    let sum = 0;
    for (let j = 0; j < 9; j++) {
      if (board[j][i] > 0 && board[j][i] < 10) {
        sum += board[j][i];
      } else {
        return false;
      }
    }
    if (sum !== 45) {
      return false;
    }
  }
  // 9个 3 * 3

  for (let i = 0; i < 9; i++) {
    let sum = 0;
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        const x = j + (i % 3) * 3;
        const y = k + Math.floor(i / 3) * 3;
        if (board[x][y] > 0 && board[x][y] < 10) {
          sum += board[x][y];
        } else {
          return false;
        }
      }
    }
    if (sum !== 45) {
      return false;
    }
  }
  return true;
}
console.log(
  validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ])
);
console.log(
  validSolution(new Array(9).fill(5).map(() => new Array(9).fill(5)))
);
// 上述解答是错误的，需要判断每个元素必须在[0, 9]内且在每行每列使用一次

/**
 * @description 判断一个表盘是否属于数独表盘
 * @param {Array} board 9 * 9的数独表盘
 */
function validSolution2(board) {
  // 需要判断每行每列都是不同的且在[0-9]
  const set = new Set();
  for (let i = 1; i < 10; i++) {
    set.add(i);
  }
  for (let i = 0; i < 9; i++) {
    const rowSet = new Set(set);
    // 开始对比行
    for (let j = 0; j < 9; j++) {
      rowSet.delete(board[i][j]);
    }
    if (rowSet.size !== 0) {
      return false;
    }
    // 开始对比列
    const columnSet = new Set(set);
    for (let j = 0; j < 9; j++) {
      columnSet.delete(board[j][i]);
    }
    if (columnSet.size !== 0) {
      return false;
    }
    // 开始对比3 * 3

    const threeSet = new Set(set);
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        const x = j + (i % 3) * 3;
        const y = k + Math.floor(i / 3) * 3;
        threeSet.delete(board[x][y]);
      }
    }
    if (threeSet.size !== 0) {
      return false;
    }
  }
  return true;
}

console.log(
  validSolution2([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ])
);
console.log(
  validSolution2(new Array(9).fill(5).map(() => new Array(9).fill(5)))
);

function validSolution3(board) {
  var validSet = (s) => s.size == 9 && !s.has(0);
  var rowSet = (i) => board[i].reduce((s, v) => s.add(v), new Set());
  var columnSet = (i) => board.reduce((s, v) => s.add(v[i]), new Set());
  var boxSet = ([r, c]) =>
    board
      .slice(r, r + 3)
      .reduce(
        (s, v) => v.slice(c, c + 3).reduce((s, v) => s.add(v), s),
        new Set()
      );
  var boxCorner = (i) => [Math.floor(i / 3) * 3, (i % 3) * 3];
  for (var i = 0; i < 9; i++)
    if (
      !validSet(rowSet(i)) ||
      !validSet(columnSet(i)) ||
      !validSet(boxSet(boxCorner(i)))
    )
      return false;
  return true;
}

console.log(
  validSolution3([
    [5, 3, 4, 6, 7, 8, 10, -1, 2],
    [6, 7, 2, -1, 10, 5, 3, 4, 8],
    [-1, 10, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 10, 7, 6, -1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 10, -1],
    [7, -1, 3, 10, 2, 4, 8, 5, 6],
    [10, 6, -1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, -1, 10, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, -1, 7, 10],
  ])
);