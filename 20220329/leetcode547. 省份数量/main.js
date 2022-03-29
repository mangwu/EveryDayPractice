/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-29 15:57:07                                                  *
 * @LastModifiedDate: 2022-03-29 16:22:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。

// 省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。

// 给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，
// 而 isConnected[i][j] = 0 表示二者不直接相连。

// 返回矩阵中 省份 的数量。

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  // 城市数量
  let n = isConnected.length;
  // 已经被遍历过的城市
  const visited = new Array(n).fill(false);
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      // 开始寻找连接点 使用bfs遍历
      visited[i] = true;
      res++;
      let queue = [i];
      while (queue.length > 0) {
        let nxt = [];
        for (const q of queue) {
          for (let j = 0; j < n; j++) {
            if (isConnected[q][j] == 1 && !visited[j]) {
              visited[j] = true;
              nxt.push(j);
            }
          }
        }
        queue = nxt;
      }
    }
  }
  return res;
};

// findCircleNum([
//   [1, 0, 0, 1],
//   [0, 1, 1, 0],
//   [0, 1, 1, 1],
//   [1, 0, 1, 1],
// ]);
/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  // 深度优先搜索
  let n = isConnected.length;
  const visited = new Array(n).fill(false);
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      res++;
      visited[i] = true;
      dfs(visited, i, isConnected);
    }
  }
  return res;
};
const dfs = (visited, i, isConnected) => {
  const n = isConnected.length;
  for (let j = 0; j < n; j++) {
    if (isConnected[i][j] && !visited[j]) {
      visited[j] = true;
      dfs(visited, j, isConnected);
    }
  }
};

findCircleNum([
  [1, 0, 0, 1],
  [0, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 1, 1],
]);
