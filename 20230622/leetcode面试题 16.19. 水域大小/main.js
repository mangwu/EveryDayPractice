/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-22 23:32:11                                                  *
 * @LastModifiedDate: 2023-06-22 23:41:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1]
]
// 你有一个用于表示一片土地的整数矩阵land，该矩阵中每个点的值代表对应地点的海拔高度。若值为0则表示水域。由垂直、水平或对角连接的水域为池塘。池塘的大小是指相连接的水域的个数。编写一个方法来计算矩阵中所有池塘的大小，返回值需要从小到大排序。
/**
 * @param {number[][]} land
 * @return {number[]}
 */
var pondSizes = function (land) {
  const m = land.length;
  if (m === 0) return []
  const n = land[0].length;
  const res = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (land[i][j] === 0) {
        let cur = 1;
        land[i][j] = 1;
        let queue = [
          [i, j]
        ];
        while (queue.length) {
          const nxt = [];
          for (const q of queue) {
            for (const dir of DIRS) {
              const x = dir[0] + q[0];
              const y = dir[1] + q[1];
              if (x >= 0 && x < m && y >= 0 && y < n && land[x][y] === 0) {
                land[x][y] = 1;
                nxt.push([x, y]);
              }
            }
          }
          cur += nxt.length;
          queue = nxt;
        }
        res.push(cur);
      }
    }
  }
  return res.sort((a, b) => a - b)
};