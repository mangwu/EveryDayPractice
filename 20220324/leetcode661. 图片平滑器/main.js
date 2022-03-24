/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-24 15:14:42                                                  *
 * @LastModifiedDate: 2022-03-24 15:26:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 图像平滑器 是大小为 3 x 3 的过滤器，用于对图像的每个单元格平滑处理，平滑处理后单元格的值为该单元格的平均灰度。

// 每个单元格的  平均灰度 定义为：该单元格自身及其周围的 8 个单元格的平均值，结果需向下取整。（即，需要计算蓝色平滑器中 9 个单元格的平均值）。

// 如果一个单元格周围存在单元格缺失的情况，则计算平均灰度时不考虑缺失的单元格（即，需要计算红色平滑器中 4 个单元格的平均值）。

const DIRS = [
  [0, 1],
  [1, 1],
  [1, 0],
  [0, -1],
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [1, -1],
];
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  const m = img.length;
  const n = img[0].length;
  const ans = new Array(m).fill(0).map((_v) => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = img[i][j];
      let divider = 1;
      for (const dir of DIRS) {
        const x = i + dir[0];
        const y = j + dir[1];
        // console.log(x, y);
        if (x >= 0 && y >= 0 && x < m && y < n) {
          divider++;
          sum += img[x][y];
        }
      }
      // console.log("---", sum, divider, "----");
      ans[i][j] = Math.floor(sum / divider);
    }
  }
  return ans;
};

imageSmoother([
  [100, 200, 100],
  [200, 50, 200],
  [100, 200, 100],
]);
