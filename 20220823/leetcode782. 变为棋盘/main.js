/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-23 09:05:35                                                  *
 * @LastModifiedDate: 2022-08-23 16:31:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一个 n x n 的二维网络 board 仅由 0 和 1 组成 。每次移动，你能任意交换两列或是两行的位置。

// 返回 将这个矩阵变为  “棋盘”  所需的最小移动次数 。如果不存在可行的变换，输出 -1。

// “棋盘” 是指任意一格的上下左右四个方向的值均与本身不同的矩阵。

/**
 * @param {number[][]} board
 * @return {number}
 */
var movesToChessboard = function (board) {
  const n = board.length;
  // 每一行和每一列
  // 每行应该的1，0值应该相等或相差不超过1
  // 应该只存在两种排列方式
  const rows = new Set();
  const columns = new Set();
  for (let i = 0; i < n; i++) {
    // 行1个数
    let rowOnes = 0;
    let rowNum = 0; // 行表示的数
    // 列1个数
    let columnOnes = 0;
    let columnNum = 0; // 列表示的数
    for (let j = 0; j < n; j++) {
      // 计算行
      if (board[i][j] == 1) {
        rowNum += Math.pow(2, n - j - 1);
        rowOnes++;
      }
      if (board[j][i] == 1) {
        columnNum += Math.pow(2, n - j - 1);
        columnOnes++;
      }
    }
    // 0 1 不能相差大于1
    if (Math.abs(n - 2 * columnOnes) > 1 || Math.abs(n - 2 * rowOnes) > 1) {
      return -1;
    }
    rows.add(rowNum);
    columns.add(columnNum);
  }
  if (rows.size !== 2 || columns.size !== 2) {
    return -1;
  }
  // 找不同分奇偶情况
  // 获取差分 和10101做比较
  let rowDiff = 0;
  let columnDiff = 0;
  for (let i = 0; i < n; i++) {
    rowDiff += board[0][i] == i % 2;
    columnDiff += board[i][0] == i % 2;
  }
  // 奇数 10001 得到的结果为5，但是实际结果为0
  // 偶数 1010 得到结果4，但实际结果为0
  if (n % 2) {
    // n是奇数，rowDiff和columnDiff不能是奇数，例如 10001 与 10101 得到1，实际上应该是01010，应该是4
    if (rowDiff % 2) rowDiff = n - rowDiff;
    if (columnDiff % 2) columnDiff = n - columnDiff;
  } else {
    // n 是偶数 或者最小值
    rowDiff = Math.min(rowDiff, n - rowDiff);
    columnDiff = Math.min(columnDiff, n - columnDiff);
  }
  return Math.floor((rowDiff + columnDiff) / 2);
};

// 10101
// 01010

[
  [0, 1, 1, 0, 0],
  [0, 1, 1, 0, 0],
  [1, 0, 0, 1, 1],
  [1, 0, 0, 1, 1],
  [1, 0, 0, 1, 1],
];
