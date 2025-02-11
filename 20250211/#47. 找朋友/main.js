/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-11 21:05:35                                                  *
 * @LastModifiedDate: 2025-02-11 21:11:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 在学校中，N 个小朋友站成一队， 第 i 个小朋友的身高为height[i]，第 i 个小朋友可以看到的第一个比自己身高更高的小朋友 j ，那么 j 是 i 的好朋友(要求j > i)。

// 请输出一个数组，对应位置的输出是每个小朋友的好朋友位置，如果没有看到好朋友，则输出0。

// 输入描述

// 第一行输入N，N表示有N个小朋友

// 第二行输入N个小朋友的身高height[i]，都是整数

// 输出描述

// 输出N个小朋友的好朋友的位置

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const asyncFun = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await asyncFun())) {
    inputs.push(line);
  }
  // 单调栈
  const n = parseInt(inputs[0]);
  const arr = inputs[1].split(" ").map((v) => parseInt(v));
  const stack = []; // 单调递减栈
  const nextBig = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      stack.pop();
    }
    if (stack.length) nextBig[i] = stack[stack.length - 1];
    stack.push(i);
  }
  console.log(nextBig.join(" "));
}
solution()