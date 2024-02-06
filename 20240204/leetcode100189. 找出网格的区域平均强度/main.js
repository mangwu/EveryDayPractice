/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-02-04 10:40:51                                                  *
 * @LastModifiedDate: 2024-02-04 11:03:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始、大小为 m x n 的网格 image ，表示一个灰度图像，其中 image[i][j] 表示在范围 [0..255] 内的某个像素强度。另给你一个 非负 整数 threshold 。

// 如果 image[a][b] 和 image[c][d] 满足 |a - c| + |b - d| == 1 ，则称这两个像素是 相邻像素 。

// 区域 是一个 3 x 3 的子网格，且满足区域中任意两个 相邻 像素之间，像素强度的 绝对差 小于或等于 threshold 。

// 区域 内的所有像素都认为属于该区域，而一个像素 可以 属于 多个 区域。

// 你需要计算一个下标从 0 开始、大小为 m x n 的网格 result ，其中 result[i][j] 是 image[i][j] 所属区域的 平均 强度，向下取整 到最接近的整数。如果 image[i][j] 属于多个区域，result[i][j] 是这些区域的 “取整后的平均强度” 的 平均值，也 向下取整 到最接近的整数。如果 image[i][j] 不属于任何区域，则 result[i][j] 等于 image[i][j] 。

// 返回网格 result 。

const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
const AROUNDS = [
  [0, 0],
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];
/**
 * @param {number[][]} image
 * @param {number} threshold
 * @return {number[][]}
 */
var resultGrid = function (image, threshold) {
  // 先计算得出所有的区域，以及它的区域强度
  const areas = new Map();
  const m = image.length;
  const n = image[0].length;
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      // 以image[i][j]为中心的3×3是否是区域
      let flag = true;
      let sum = 0;
      outer: for (let k = i - 1; k <= i + 1; k++) {
        for (let l = j - 1; l <= j + 1; l++) {
          for (const dir of DIRS) {
            const [x, y] = [k + dir[0], l + dir[1]];
            if (x >= i - 1 && x <= i + 1 && y >= j - 1 && y <= j + 1) {
              if (Math.abs(image[x][y] - image[k][l]) <= threshold) continue;
              else {
                flag = false;
                break outer;
              }
            }
          }
          sum += image[k][l];
        }
      }
      if (flag) areas.set(i * n + j, Math.floor(sum / 9));
    }
  }
  const result = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let num = 0; // 所属区域个数
      let sum = 0; // 区域强度之和
      for (const around of AROUNDS) {
        const [x, y] = [i + around[0], j + around[1]];
        if (x >= 0 && x < m && y >= 0 && y < n && areas.has(x * n + y)) {
          num++;
          sum += areas.get(x * n + y);
        }
      }
      if (num > 0) {
        result[i][j] = Math.floor(sum / num);
      } else result[i][j] = image[i][j];
    }
  }
  return result;
};
