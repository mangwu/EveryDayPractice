/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-11 19:35:22                                                  *
 * @LastModifiedDate: 2025-02-11 19:42:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 现有若干个会议，所有会议共享一个会议室，用数组表示各个会议的开始时间和结束时间，格式为： 会议1开始时间, 会议1结束时间 会议2开始时间, 会议2结束时间

// 请计算会议室占用时间段。

// 输入描述 第一行输入一个整数 n，表示会议数量 之后输入n行，每行两个整数，以空格分隔，分别表示会议开始时间，会议结束时间 例如：

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const asyncFun = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await asyncFun())) {
    inputs.push(line);
  }
  // 相当于合并区间
  const res = [];
  const arr = inputs
    .slice(1)
    .map((str) => str.split(" ").map((v) => parseInt(v)))
    .sort((a, b) => {
      if (a[0] !== b[0]) return a[0] - b[0];
      return b[1] - a[1];
    });
  res.push(arr[0]);
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const preTime = res[res.length - 1];
    const [start, end] = arr[i];
    if (start > preTime[1]) {
      res.push([start, end]);
    } else {
      preTime[1] = Math.max(preTime[1], end);
    }
  }
  for (const time of res) {
    console.log(time.join(" "));
  }
}

solution();
