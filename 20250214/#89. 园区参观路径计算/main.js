/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-15 01:22:57                                                  *
 * @LastModifiedDate: 2025-02-15 01:30:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 园区某部门举办了Family Day，邀请员工及其家属参加； 将公司园区视为一个矩形，起始园区设置在左上角，终点园区设置在右下角； 家属参观园区时，只能向右和向下园区前进，求从起始园区到终点园区会有多少条不同的参观路径。

// 输入描述

// 第一行为园区的长和宽；

// 后面每一行表示该园区是否可以参观，0表示可以参观，1表示不能参观

// 输出描述

// 输出为不同的路径数量

const rl = require("readline").createInterface({
  input: process.stdin,
});
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const [m, n] = inputs[0].split(" ").map((v) => parseInt(v));
  const grid = [];
  for (let i = 1; i <= m; i++) {
    grid.push(inputs[i].split(" ").map((v) => parseInt(v)));
  }
  if (grid[0][0]) {
    console.log(0);
    return;
  }
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  dp[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      if (!grid[i][j]) {
        let left = j > 0 ? dp[i][j - 1] : 0;
        let top = i > 0 ? dp[i - 1][j] : 0;
        dp[i][j] = left + top;
      }
    }
  }
  console.log(dp[m - 1][n - 1]);
}
solution();
