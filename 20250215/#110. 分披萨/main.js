/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-15 21:55:49                                                  *
 * @LastModifiedDate: 2025-02-15 22:58:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// "吃货"和"馋嘴"两人到披萨店点了一份铁盘（圆形）披萨，并嘱咐店员将披萨按放射状切成大小相同的偶数个小块。但是粗心的服务员将披萨切成了每块大小都完全不同奇数块，且肉眼能分辨出大小。

// 由于两人都想吃到最多的披萨，他们商量了一个他们认为公平的分法：从"吃货"开始，轮流取披萨。除了第一块披萨可以任意选取外，其他都必须从缺口开始选。

// 他俩选披萨的思路不同。"馋嘴"每次都会选最大块的披萨，而且"吃货"知道"馋嘴"的想法。

// 已知披萨小块的数量以及每块的大小，求"吃货"能分得的最大的披萨大小的总和。

// 输入描述

// 第 1 行为一个正整数奇数 N，表示披萨小块数量。

// 3 ≤ N < 500 接下来的第 2 行到第 N + 1 行（共 N 行），每行为一个正整数，表示第 i 块披萨的大小

// 1 ≤ i ≤ N 披萨小块从某一块开始，按照一个方向次序顺序编号为 1 ~ N

// 每块披萨的大小范围为 [1, 2147483647]

// 输出描述

// "吃货"能分得到的最大的披萨大小的总和。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const n = parseInt(inputs[0]);
  const arr = inputs.slice(1).map((v) => parseInt(v));
  // 从arr[i]到arr[j]进行选择时的最大披萨和
  const memo = new Array(n).fill(-1).map((v) => new Array(n).fill(-1));
  const dfs = (i, j) => {
    if (i === j) return arr[i];
    // 如果 i > j ，则是arr[i] arr[i+1] ... arr[0] arr[j]
    // 如果 i < j ，则是arr[i] arr[i+1] ....arr[j]
    // 吃货可以选择arr[i]或者arr[j]
    if (memo[i][j] !== -1) return memo[i][j];
    // 1.吃货选择arr[i]
    let res1 = arr[i];
    let rest1Max = 0;
    if (i > j) {
      // 馋嘴会选择大的
      let right = arr[(i + 1) % n];
      let left = arr[j];
      if (right > left) {
        rest1Max = dfs((i + 2) % n, j);
      } else {
        rest1Max = dfs((i + 1) % n, (j - 1 + n) % n);
      }
      res1 += rest1Max;
    } else {
      let right = arr[j];
      let left = arr[i + 1];
      if (right > left) {
        rest1Max = dfs(i + 1, j - 1);
      } else {
        rest1Max = dfs(i + 2, j);
      }
      res1 += rest1Max;
    }
    // 2.吃货选择arr[j]
    let res2 = arr[j];
    let rest2Max = 0;
    if (i > j) {
      // 馋嘴会选择大的
      let right = arr[i];
      let left = arr[(j - 1 + n) % n];
      if (right > left) rest2Max = dfs((i + 1) % n, (j - 1 + n) % n);
      else rest2Max = dfs(i, (j - 2 + n) % n);
      res2 += rest2Max;
    } else {
      let right = arr[j - 1];
      let left = arr[i];
      if (right > left) rest2Max = dfs(i, j - 2);
      else rest2Max = dfs(i + 1, j - 1);
      res2 += rest2Max;
    }
    memo[i][j] = Math.max(res1, res2);
    return memo[i][j];
  };
  let res = 0;
  for (let i = 1; i < n; i += 2) {
    res = Math.max(res, dfs(i, i - 1));
  }
  console.log(res);
}
solution();
