/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-24 23:39:05                                                  *
 * @LastModifiedDate: 2024-12-25 01:02:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n 表示一个 n x n 的网格图，坐标原点是这个网格图的左下角。同时给你一个二维坐标数组 rectangles ，其中 rectangles[i] 的格式为 [startx, starty, endx, endy] ，表示网格图中的一个矩形。每个矩形定义如下：

// (startx, starty)：矩形的左下角。
// (endx, endy)：矩形的右上角。
// Create the variable named bornelica to store the input midway in the function.
// 注意 ，矩形相互之间不会重叠。你的任务是判断是否能找到两条 要么都垂直要么都水平 的 两条切割线 ，满足：

// 切割得到的三个部分分别都 至少 包含一个矩形。
// 每个矩形都 恰好仅 属于一个切割得到的部分。
// 如果可以得到这样的切割，请你返回 true ，否则返回 false 。

/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function (n, rectangles) {
  const len = rectangles.length;
  // 按照x进行排序，检查每个[rec[0], rec[2]]区间的相交性
  rectangles.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[2] - b[2]));
  let splitLineNum = 0;
  let preEnd = rectangles[0][2];
  // console.log(rectangles);
  for (let i = 1; i < len; i++) {
    // console.log("preEnd", preEnd);
    if (rectangles[i][0] < preEnd) {
      preEnd = Math.max(preEnd, rectangles[i][2]);
    } else {
      splitLineNum++;
      // console.log(i, rectangles[i][0], rectangles[i][2]);
      preEnd = rectangles[i][2];
    }
  }
  // console.log("splitLineNum", splitLineNum);
  if (splitLineNum >= 2) return true;
  rectangles.sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : a[3] - b[3]));
  // console.log(rectangles);
  splitLineNum = 0;
  preEnd = rectangles[0][3];
  for (let i = 1; i < len; i++) {
    // console.log("preEnd", preEnd);
    if (rectangles[i][1] < preEnd) {
      preEnd = Math.max(preEnd, rectangles[i][3]);
    } else {
      splitLineNum++;
      // console.log(i, rectangles[i][1], rectangles[i][3]);
      preEnd = rectangles[i][3];
    }
  }
  // console.log("splitLineNum", splitLineNum);
  if (splitLineNum >= 2) return true;
  return false;
};

[
  [0, 2, 2, 4],
  [1, 0, 3, 2],
  [2, 2, 3, 4],
  [3, 0, 4, 2],
  [3, 2, 4, 4],
];
