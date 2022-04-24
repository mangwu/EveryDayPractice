/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-24 20:00:26                                                  *
 * @LastModifiedDate: 2022-04-24 20:43:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有 n 个城市，其中一些彼此相连，另一些没有相连。
// 如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。

// 省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。

// 给你一个 n x n 的矩阵 isConnected ，
// 其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，
// 而 isConnected[i][j] = 0 表示二者不直接相连。

// 返回矩阵中 省份 的数量。

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  // 城市个数
  const n = isConnected.length;
  const visited = [];
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      // bfs
      let queue = [i];
      visited[i] = true;
      ans++;
      while (queue.length > 0) {
        let nxt = [];
        for (const q of queue) {
          for (let j = 0; j < n; j++) {
            if (j !== q && !visited[j]) {
              nxt.push(j);
              visited[j] = true;
            }
          }
        }
        queue = nxt;
      }
    }
  }
  return ans;
};

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const visited = [];
  const dfs = (i) => {
    for (let j = 0; j < n; j++) {
      if (!visited[i] && isConnected[i][j]) {
        visited[i] = true;
        dfs(j);
      }
    }
  };
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      ans++;
      dfs(i);
    }
  }
  return ans;
};
