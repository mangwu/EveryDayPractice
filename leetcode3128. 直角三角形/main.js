/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-08-02 09:11:27                                                  *
 * @LastModifiedDate: 2024-08-02 10:52:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个二维 boolean 矩阵 grid 。

// 请你返回使用 grid 中的 3 个元素可以构建的 直角三角形 数目，且满足 3 个元素值 都 为 1 。

// 注意：

// 如果 grid 中 3 个元素满足：一个元素与另一个元素在 同一行，同时与第三个元素在 同一列 ，那么这 3 个元素称为一个 直角三角形 。这 3 个元素互相之间不需要相邻。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numberOfRightTriangles = function (grid) {
  let res = 0;
  const m = grid.length;
  const n = grid[0].length;
  const rows = new Array(m).fill(0).map(() => new Array());
  const columns = new Array(n).fill(0).map(() => new Array());
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        rows[i].push(j);
        columns[j].push(i);
      }
    }
  }
  const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = (left + right) >> 1;
      if (arr[mid] === target) return target;
      else if (arr[mid] > target) right = mid - 1;
      else left = mid + 1;
    }
    return left;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        // 横向
        const row = rows[i];
        let rowIdx = binarySearch(row, j);
        // 纵向
        const column = columns[j];
        let columnIdx = binarySearch(column, i);
        const top = columnIdx;
        const bottom = column.length - columnIdx - 1;
        const left = rowIdx;
        const right = row.length - rowIdx - 1;
        res += top * (left + right) + bottom * (left + right);
      }
    }
  }
  return res;
};

const random = require("../publicFunc/random/random");

console.log(
  numberOfRightTriangles(
    random.randomArr(1000, 0, 2).map((v) => random.randomArr(1000, 0, 2))
  )
);
