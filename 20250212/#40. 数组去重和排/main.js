/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-12 09:37:52                                                  *
 * @LastModifiedDate: 2025-02-12 09:43:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 给定一个乱序的数组，删除所有的重复元素，使得每个元素只出现一次，并且按照出现的次数从高到低进行排序，相同出现次数按照第一次出现顺序进行先后排序。

// 输入描述
// 一个数组

// 输出描述
// 去重排序后的数组

// 用例 输入 1,3,3,3,2,4,4,4,5 输出 3,4,1,2,5 备注 数组大小不超过100 数组元素值大小不超过100。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const arr = inputs[0].split(",").map((v) => parseInt(v));
  const cnt = new Map();
  for (let i = 0; i < arr.length; i++) {
    cnt.has(arr[i]) ? cnt.get(arr[i])[0]++ : cnt.set(arr[i], [1, i]);
  }
  const res = [...cnt].sort((a, b) => {
    if (a[1][0] !== b[1][0]) return b[1][0] - a[1][0];
    return a[1][1] - b[1][1];
  });
  console.log(res.map((v) => v[0]).join(","));
}

solution();
