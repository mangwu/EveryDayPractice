/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-09 15:10:30                                                  *
 * @LastModifiedDate: 2022-03-09 16:47:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个三角形 triangle ，找出自顶向下的最小路径和。

// 每一步只能移动到下一行中相邻的结点上。
// 相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。
// 也就是说，如果正位于当前行的下标 i ，那么下一步可以移动到下一行的下标 i 或 i + 1 。

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  // 和codewar-pyramid silid down一致
  // 使用动态规划
  // 从到数第二层开始，选择最短路径，即选择其下方左右的小值
  // 在第n层，选择第n+1层下方的两个小值
  const len = triangle.length;
  for (let i = len - 2; i >= 0; i--) {
    triangle[i].map((v, idx) => {
      triangle[i][idx] += Math.min(
        triangle[i + 1][idx],
        triangle[i + 1][idx + 1]
      );
    });
  }
  return triangle[0][0];
};
minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
