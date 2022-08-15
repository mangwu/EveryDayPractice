/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-15 13:23:01                                                  *
 * @LastModifiedDate: 2022-08-15 13:28:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，
// 那么城市 a 与城市 c 间接相连。

// 省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。

// 给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，
// 而 isConnected[i][j] = 0 表示二者不直接相连。

// 返回矩阵中 省份 的数量。
// 出处。

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  const visited = [];
  const dfs = (city) => {
    if (visited[city]) {
      return;
    }
    // 已访问
    visited[city] = true;
    for (let i = 0; i < n; i++) {
      // 访问与city相邻的城市
      if (isConnected[city][i]) {
        dfs(i);
      }
    }
  };
  let ans = 0;
  for (let i = 0; i < n; i++) {
    // 未被访问
    if (!visited[i]) {
      ans++;
      dfs(i);
    }
  }
  return ans;
};
