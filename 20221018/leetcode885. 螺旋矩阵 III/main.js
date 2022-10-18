/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-18 13:47:01                                                  *
 * @LastModifiedDate: 2022-10-18 14:01:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在 R 行 C 列的矩阵上，我们从 (r0, c0) 面朝东面开始

// 这里，网格的西北角位于第一行第一列，网格的东南角位于最后一行最后一列。

// 现在，我们以顺时针按螺旋状行走，访问此网格中的每个位置。

// 每当我们移动到网格的边界之外时，我们会继续在网格之外行走（但稍后可能会返回到网格边界）。

// 最终，我们到过网格的所有 R * C 个空间。

// 按照访问顺序返回表示网格位置的坐标列表。

const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  // 每旋转两次额外增加一次步数
  const num = rows * cols;
  const ans = [[rStart, cStart]];
  let idx = 0;
  let step = 1;
  while (ans.length !== num) {
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < step; j++) {
        rStart += DIRS[idx][0];
        cStart += DIRS[idx][1];
        if (rStart >= 0 && cStart >= 0 && rStart < rows && cStart < cols) {
          ans.push([rStart, cStart]);
        }
      }
      idx++;
      idx %= 4;
    }
    step++;
  }
  return ans;
};

// 1 1 2 2 3 3 4 4
