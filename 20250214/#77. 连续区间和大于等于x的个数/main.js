/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 17:04:12                                                  *
 * @LastModifiedDate: 2025-02-14 17:08:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 连续区间和大于等于x的个数
// 题目
// 给定一个含有N个正整数的数组, 求出有多少个连续区间（包括单个正整数）, 它们的和大于等于x。

// 输入描述

// 第一行两个整数N x（0 < N <= 100000, 0 <= x <= 10000000) 第二行有N个正整数（每个正整数小于等于100)。

// 输出描述

// 输出一个整数，表示所求的个数。 注意：此题对效率有要求，暴力解法通过率不高，请考虑高效的实现方式。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const [n, x] = inputs[0].split(" ").map((v) => parseInt(v));
  const arr = inputs[1].split(" ").map((v) => parseInt(v));
  let sum = 0;
  let right = 0;
  let res = 0;
  for (let i = 0; i < n; i++) {
    while (right < n && sum < x) {
      sum += arr[right++];
    }
    if (sum >= x) {
      res += n - right + 1;
    }
    sum -= arr[i];
  }
  console.log(res);
}
solution();
