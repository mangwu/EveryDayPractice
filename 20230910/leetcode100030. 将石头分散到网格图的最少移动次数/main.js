/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-10 10:49:43                                                  *
 * @LastModifiedDate: 2023-09-10 12:00:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个大小为 3 * 3 ，下标从 0 开始的二维整数矩阵 grid ，分别表示每一个格子里石头的数目。网格图中总共恰好有 9 个石头，一个格子里可能会有 多个 石头。

// 每一次操作中，你可以将一个石头从它当前所在格子移动到一个至少有一条公共边的相邻格子。

// 请你返回每个格子恰好有一个石头的 最少移动次数 。
const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function (grid) {
  // 从0出发，找到最近的非1的数字
  let zero = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[i][j] === 0) {
        zero.push([i, j]);
      }
    }
  }
  let res = Infinity;
  for (let i = 0; i < 10000; i++) {
    randomSort(zero);
    let curRes = 0;
    for (const item of zero) {
      const copy = grid.map((v) => v.slice());
      let queue = [item];
      const visited = [];
      visited[item[0] * 3 + item[1]] = true;
      let curStep = 0;
      out: while (queue.length) {
        const nxt = [];
        curStep++;
        for (const [i, j] of queue) {
          for (const dir of DIRS) {
            const x = i + dir[0];
            const y = j + dir[1];
            if (x >= 0 && x < 3 && y >= 0 && y < 3) {
              if (copy[x][y] > 1) {
                copy[x][y]--;
                curRes += curStep;
                break out;
              } else if (!visited[x * 3 + y]) {
                visited[x * 3 + y] = true;
                nxt.push([x, y]);
              }
            }
          }
        }
        queue = nxt;
      }
    }
    res = Math.min(res, curRes);
  }
  return res;
};

const randomSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    const a = Math.floor(Math.random() * n);
    const b = Math.floor(Math.random() * n);
    swap(arr, a, b);
  }
};
const swap = (arr, a, b) => {
  [arr[a], arr[b]] = [arr[b], arr[a]];
};
