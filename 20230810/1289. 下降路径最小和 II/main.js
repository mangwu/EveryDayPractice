/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-10 22:17:37                                                  *
 * @LastModifiedDate: 2023-08-10 22:45:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一个 n x n 整数矩阵 grid ，请你返回 非零偏移下降路径 数字和的最小值。

// 非零偏移下降路径 定义为：从 grid 数组中的每一行选择一个数字，且按顺序选出来的数字中，相邻数字不在原数组的同一列。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function (grid) {
  const n = grid.length;
  if (n === 1) return grid[0][0];

  let curMin = Infinity;
  let curMinIdx = -1;
  let secondMin = Infinity;
  for (let i = 0; i < n; i++) {
    if (grid[0][i] <= curMin) {
      secondMin = curMin;
      curMinIdx = i;
      curMin = grid[0][i];
    } else if (grid[0][i] < secondMin) {
      secondMin = grid[0][i];
    }
  }
  for (let i = 1; i < n; i++) {
    const curRow = grid[i];
    let nxtIdx = -1;
    let nxtMin = Infinity;
    let nxtSecondMin = Infinity;
    for (let j = 0; j < n; j++) {
      const curSum =
        j !== curMinIdx ? curRow[j] + curMin : curRow[j] + secondMin;
      if (curSum <= nxtMin) {
        nxtSecondMin = nxtMin;
        nxtMin = curSum;
        nxtIdx = j;
      } else if (curSum < secondMin) {
        nxtSecondMin = curSum;
      }
    }
    curMin = nxtMin;
    secondMin = nxtSecondMin;
    curMinIdx = nxtIdx;
  }
  return curMin;
};

[  0,  1,   2,   3,   4,   5,   6,   7,  8,   9,
  [50, -18, -38, 39,  -20, -37, -61, 72, 22,  79],  // -61 -38  6
  [82, 26,  30,  -96, -1,  28,  87,  94, 34,  -89], // -157 -150 3
  [55, -50, 20,  76,  -50, 59,  -58, 85, 83,  -83], // -240 -215  9
  [39, 65,  -68, 89,  -62, -53, 74,  2,  -70, -90], // -310 -305  8
  [1,  57,  -70, 83,  -91, -32, -13, 49, -11, 58], // -401 -316 4
  [-55,83,  60,  -12, -90, -37, -36, -27,-19, -6], // -456 -407 0
  [76, -53, 78,  90,  70,  62,  -81, -94,-32, -57], // -550 -513 7
  [-32,-85, 81,  25,  80,  90,  -24, 10,  27, -55], // -635 -605 1
  [39, 54,  39,  34,  -45, 17,  -2,  -61, -81,85], // -716 -696 8
  [-77,65,  76,  92,  21,  68,  78,  -13, 39, 22],// -793 -729 0
];
