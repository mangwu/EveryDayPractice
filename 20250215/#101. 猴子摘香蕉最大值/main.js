/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-15 18:08:47                                                  *
 * @LastModifiedDate: 2025-02-15 18:23:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一只贪吃的猴子，来到一个果园，发现许多串香蕉排成一行，每串香蕉上有若干根香蕉。每串香蕉的根数由数组numbers给出。 猴子获取香蕉，每次都只能从行的开头或者末尾获取，并且只能获取N次，求猴子最多能获取多少根香蕉。

// 输入描述

// 第一行为数组numbers的长度 第二行为数组numbers的值每个数字通过空格分开 第三行输入为N，表示获取的次数

// 输出描述

// 按照题目要求能获取的最大数值

// 备注 1 ≤ numbers.length ≤ 100000 1 ≤ numbers ≤ 100 1 ≤ N ≤ numbers.length

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
  const n = parseInt(inputs[0]);
  const arr = inputs[1].split(" ").map((v) => parseInt(v));
  const m = parseInt(inputs[2]);
  if (m >= n) {
    console.log(arr.reduce((a, b) => a + b));
    return;
  }
  let j = n - m;
  let sum = 0;
  for (let i = j; i < n; i++) {
    sum += arr[i];
  }
  let res = sum;
  for (let i = 0; i < m; i++) {
    sum += arr[i];
    sum -= arr[j++];
    res = Math.max(res, sum);
  }
  console.log(res);
}
solution();
