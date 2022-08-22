/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-22 20:52:31                                                  *
 * @LastModifiedDate: 2022-08-22 21:26:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 最近的降雨，使田地中的一些地方出现了积水，field[i][j] 表示田地第 i 行 j 列的位置有：

// 若为 W, 表示该位置为积水；
// 若为 ., 表示该位置为旱地。
// 已知一些相邻的积水形成了若干个池塘，若以 W 为中心的八个方向相邻积水视为同一片池塘。

// 请返回田地中池塘的数量。
const DIRS = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];
/**
 * @param {string[]} field
 * @return {number}
 */
var lakeCount = function (field) {
  const visited = [];
  const m = field.length;
  const n = field[0].length;
  const dfs = (i, j) => {
    if (
      i < 0 ||
      j < 0 ||
      i >= m ||
      j >= n ||
      visited[i * n + j] ||
      field[i][j] == "."
    ) {
      return;
    }
    visited[i * n + j] = true;
    for (const dir of DIRS) {
      dfs(dir[0] + i, dir[1] + j);
    }
  };
  let ans = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (field[i][j] == "W" && !visited[i * n + j]) {
        dfs(i, j);
        ans++;
      }
    }
  }
  return ans;
};
