/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-07-20 22:05:13                                                  *
 * @LastModifiedDate: 2024-07-20 22:41:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个大小为 3 * 3 ，下标从 0 开始的二维整数矩阵 grid ，分别表示每一个格子里石头的数目。网格图中总共恰好有 9 个石头，一个格子里可能会有 多个 石头。

// 每一次操作中，你可以将一个石头从它当前所在格子移动到一个至少有一条公共边的相邻格子。

// 请你返回每个格子恰好有一个石头的 最少移动次数 。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumMoves = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const movePoints = [];
  const targetPoints = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        movePoints.push(i * n + j);
      } else if (grid[i][j] > 1) {
        targetPoints.push([i * n + j, grid[i][j] - 1]);
      }
    }
  }
  if (movePoints.length === 0) return 0;
  let ans = Infinity;
  const dfs = (i, curMoves) => {
    if (i === movePoints.length) {
      ans = Math.min(ans, curMoves);
      return;
    }
    if (curMoves > ans) return;
    for (let j = 0; j < targetPoints.length; j++) {
      const [point, num] = targetPoints[j];
      if (num) {
        targetPoints[j][1]--;
        dfs(i + 1, curMoves + getDistance(movePoints[i], point, n));
        targetPoints[j][1]++;
      }
    }
  };
  dfs(0, 0);
  return ans;
};

/**
 * @description 计算两点之间的距离
 * @param {number} p1
 * @param {number} p2
 * @param {number} m
 * @returns {number}
 */
function getDistance(p1, p2, n) {
  const x1 = Math.floor(p1 / n);
  const y1 = p1 % n;
  const x2 = Math.floor(p2 / n);
  const y2 = p2 % n;
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

// x , y
// x * n + y
