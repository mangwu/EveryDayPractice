/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-04 17:39:59                                                  *
 * @LastModifiedDate: 2024-12-04 18:06:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有一个 8 x 8 的棋盘，它包含 n 个棋子（棋子包括车，后和象三种）。给你一个长度为 n 的字符串数组 pieces ，其中 pieces[i] 表示第 i 个棋子的类型（车，后或象）。除此以外，还给你一个长度为 n 的二维整数数组 positions ，其中 positions[i] = [ri, ci] 表示第 i 个棋子现在在棋盘上的位置为 (ri, ci) ，棋盘下标从 1 开始。

// 棋盘上每个棋子都可以移动 至多一次 。每个棋子的移动中，首先选择移动的 方向 ，然后选择 移动的步数 ，同时你要确保移动过程中棋子不能移到棋盘以外的地方。棋子需按照以下规则移动：

// 车可以 水平或者竖直 从 (r, c) 沿着方向 (r+1, c)，(r-1, c)，(r, c+1) 或者 (r, c-1) 移动。
// 后可以 水平竖直或者斜对角 从 (r, c) 沿着方向 (r+1, c)，(r-1, c)，(r, c+1)，(r, c-1)，(r+1, c+1)，(r+1, c-1)，(r-1, c+1)，(r-1, c-1) 移动。
// 象可以 斜对角 从 (r, c) 沿着方向 (r+1, c+1)，(r+1, c-1)，(r-1, c+1)，(r-1, c-1) 移动。
// 移动组合 包含所有棋子的 移动 。每一秒，每个棋子都沿着它们选择的方向往前移动 一步 ，直到它们到达目标位置。所有棋子从时刻 0 开始移动。如果在某个时刻，两个或者更多棋子占据了同一个格子，那么这个移动组合 不有效 。

// 请你返回 有效 移动组合的数目。

// 注意：

// 初始时，不会有两个棋子 在 同一个位置 。
// 有可能在一个移动组合中，有棋子不移动。
// 如果两个棋子 直接相邻 且两个棋子下一秒要互相占据对方的位置，可以将它们在同一秒内 交换位置 。
const DIRS = {
  rook: [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ],
  queen: [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, -1],
    [1, 1],
    [-1, 1],
    [-1, -1],
  ],
  bishop: [
    [1, -1],
    [1, 1],
    [-1, 1],
    [-1, -1],
  ],
};
/**
 * @param {string[]} pieces
 * @param {number[][]} positions
 * @return {number}
 */
var countCombinations = function (pieces, positions) {
  // 车：rook 水平，垂直移动
  // 后：queen，水平，垂直，斜角移动
  // 象：bishop，斜角移动
  // 计算每个棋子能移动到的位置，并且记录重叠的位置
  let res = 1;
  const visited = new Array(64).fill(0);
  const n = pieces.length;
  for (let k = 0; k < n; k++) {
    const type = pieces[k];
    let [i, j] = positions[k];
    i--;
    j--;
    let curNum = 1;
    visited[i + j * 8]++;
    const dirs = DIRS[type];
    for (const dir of dirs) {
      let x = i + dir[0];
      let y = j + dir[1];
      while (x >= 0 && x < 8 && y >= 0 && y < 8) {
        curNum++;
        visited[x + y * 8]++;
        x += dir[0];
        y += dir[1];
      }
    }
    res *= curNum;
  }
};
