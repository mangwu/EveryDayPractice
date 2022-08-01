/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-01 21:47:19                                                  *
 * @LastModifiedDate: 2022-08-01 21:54:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，
// 它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。
// 例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。
// 但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  let ans = 0;
  // bfs
  const bfs = (x, y, visited) => {
    if (x < 0 || y < 0 || x >= m || y >= n) {
      return;
    }
    if (visited[x * n + y]) {
      return;
    }
    const val = getSum(x, y);
    visited[x * n + y] = true;
    if (val > k) {
      return;
    }
    ans++;
    bfs(x + 1, y, visited);
    bfs(x - 1, y, visited);
    bfs(x, y + 1, visited);
    bfs(x, y - 1, visited);
  };
  bfs(0, 0, []);
  return ans;
};

var getSum = (x, y) => {
  const xStr = x.toString();
  const yStr = y.toString();
  let sum = 0;
  for (const ch of xStr) {
    sum += parseInt(ch);
  }
  for (const ch of yStr) {
    sum += parseInt(ch);
  }
  return sum;
};
