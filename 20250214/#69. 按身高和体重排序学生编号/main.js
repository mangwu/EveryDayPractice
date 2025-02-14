/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 12:05:15                                                  *
 * @LastModifiedDate: 2025-02-14 12:10:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 某学校举行运动会，学生们按编号(1、2、3…n)进行标识，现需要按照身高由低到高排列，对身高相同的人，按体重由轻到重排列；对于身高体重都相同的人，维持原有的编号顺序关系。请输出排列后的学生编号。

// 输入描述

// 两个序列，每个序列由n个正整数组成（0 < n <= 100）。第一个序列中的数值代表身高，第二个序列中的数值代表体重。

// 输出描述

// 排列结果，每个数值都是原始序列中的学生编号，编号从1开始

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const n = parseInt(inputs[0]);
  const heights = inputs[1].split(" ").map((v) => parseInt(v));
  const weights = inputs[2].split(" ").map((v) => parseInt(v));
  const idxes = new Array(n).fill(0).map((v, i) => i);
  idxes.sort((a, b) => {
    if (heights[a] !== heights[b]) return heights[a] - heights[b];
    if (weights[a] !== weights[b]) return weights[a] - weights[b];
    return a - b;
  });
  console.log(idxes.map((v) => v + 1).join(" "));
}
solution();
