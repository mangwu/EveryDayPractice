/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-06 21:50:56                                                  *
 * @LastModifiedDate: 2022-03-06 23:20:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给定一个由 0 和 1 组成的矩阵 mat ，请输出一个大小相同的矩阵，
// 其中每一个格子是 mat 中对应位置元素到最近的 0 的距离。

// 两个相邻元素间的距离为 1 。
const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  // 暴力法,遍历mat,对值为1的进行层序遍历
  const m = mat.length;
  const n = mat[0].length;
  const bfs = (mat, x, y) => {
    let queue = [[x, y]];
    const visited = [];
    // [x,y]位置的加数
    let add = 0;
    visited[x * n + y] = true;
    let hasFind = false; // 是否找到0
    while (queue.length > 0) {
      const nxt = [];
      for (const q of queue) {
        for (const dir of DIRS) {
          const ni = q[0] + dir[0];
          const nj = q[1] + dir[1];
          // console.log(dir, [ni, nj]);
          if (ni >= 0 && ni < m && nj >= 0 && nj < n && !visited[ni * n + nj]) {
            // console.log(mat[ni][nj], ni, nj, hasFind);
            if (mat[ni][nj]) {
              // 不是0
              nxt.push([ni, nj]);
              visited[ni * n + nj] = true;
            } else {
              // 是0,可以直接退出循环
              hasFind = true;
              break;
            }
          }
        }
        // console.log("---完成一次DIRS遍历----", nxt);
        if (hasFind) {
          break;
        }
      }
      if (hasFind) {
        break;
      } else {
        // 没有找到,层数加1
        add++;
        queue = nxt;
      }
      // console.log(add, queue);
    }
    // 层数
    mat[x][y] = mat[x][y] + add;
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] == 1) {
        // console.log("----一次bfs----");
        bfs(mat, i, j);
      }
    }
  }
  console.log(mat);
  return mat;
};

updateMatrix([
  [1, 1, 1, 1],
  [0, 1, 0, 0],
  [0, 1, 0, 0],
  [1, 1, 1, 1],
]);
