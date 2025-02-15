/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-15 23:03:54                                                  *
 * @LastModifiedDate: 2025-02-16 00:52:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 给定两个整数数组array1、array2，数组元素按升序排列。

// 假设从array1、array2中分别取出一个元素可构成一对元素，现在需要取出k对元素，

// 并对取出的所有元素求和，计算和的最小值。

// 注意：

// 两对元素如果对应于array1、array2中的两个下标均相同，则视为同一对元素。

// 输入描述

// 输入两行数组array1、array2，每行首个数字为数组大小size(0 < size <= 100);

// 0 < array1[i] <= 1000

// 0 < array2[i] <= 1000

// 接下来一行为正整数k

// 0 < k <= array1.size() * array2.size()

// 输出描述

// 满足要求的最小和

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const arr1 = inputs[0]
    .split(" ")
    .slice(1)
    .map((v) => parseInt(v));
  const arr2 = inputs[1]
    .split(" ")
    .slice(1)
    .map((v) => parseInt(v));
  let k = parseInt(inputs[2]);
  const n1 = arr1.length;
  const n2 = arr2.length;
  const pq = [[0, 0]];
  let sum = 0;
  while (k) {
    const [i, j] = pq.pop();
    sum += arr1[i] + arr2[j];
    if (i < n1 - 1) pq.push([i + 1, j]);
    if (j < n2 - 1) pq.push([i, j + 1]);
    pq.sort((a, b) => arr1[b[0]] + arr2[b[1]] - arr1[a[0]] - arr2[a[1]]);
    k--;
  }
  console.log(sum);
}
solution();
