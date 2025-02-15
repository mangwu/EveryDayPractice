/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-15 16:56:49                                                  *
 * @LastModifiedDate: 2025-02-15 18:06:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 项目组共有 N 个开发人员，项目经理接到了 M 个独立的需求，每个需求的工作量不同，且每个需求只能由一个开发人员独立完成，不能多人合作。 假定各个需求直接无任何先后依赖关系，请设计算法帮助项目经理进行工作安排，使整个项目能用最少的时间交付。

// 输入描述

// 第一行输入为 M 个需求的工作量，单位为天，用逗号隔开。

// 例如：

// X1 X2 X3 ... Xm

// 表示共有 M 个需求，每个需求的工作量分别为X1天，X2天，...，Xm天。其中：

// 0 < M < 30
// 0 < Xm < 200
// 第二行输入为项目组人员数量N

// 例如：

// 5

// 表示共有5名员工，其中 0 < N < 10

// 输出描述

// 最快完成所有工作的天数

// 例如：

// 25

// 表示最短需要25天完成所有工作

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
  const rqs = inputs[0]
    .split(",")
    .map((v) => parseInt(v))
    .sort((a, b) => a - b);
  const n = parseInt(inputs[1]); // 人员数量
  const m = rqs.length; // 需求数量
  if (n >= m) {
    // 因为一个需求只能一个人开发，所以人多时答案就是最大耗费时间
    console.log(rqs[m - 1]);
    return;
  }
  // 动态规划：dp[m][n] 使用n名员工完成前m个工作需要的时间
  // dp[m-1][n]
  const dp = new Array(m + 1).fill(0).map((v) => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if(j >= m) {
      }
    }
  }
}
solution();
