/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-11 17:05:33                                                  *
 * @LastModifiedDate: 2025-02-11 17:24:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 小朋友出操，按学号从小到大排成一列； 小红来迟了，请你给小红出个主意，让她尽快找到她应该排的位置。 算法复杂度要求不高于nLog(n)；学号为整数类型，队列规模 ≤ 10000；

// 输入描述

// 第一行：输入已排成队列的小朋友的学号（正整数），以","隔开；例如：
// 93,95,97,100,102,123,155
// 第二行：小红学号，如：
// 110
// 输出描述

// 输出一个数字，代表队列位置（从1开始）。例如：
// 6
// 解题思路
// 将已排好序的队列转换为整数数组，并对数组进行排序。二分查找在排序后的队列中找到小红的学号应该插入的位置。如果小红的学号恰好在队列中已有学号的位置，则返回该位置；否则，返回小红学号应该插入的位置（即该位置之前的学号都小于小红的学号，该位置之后的学号都大于小红的学号）。
const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const arr = inputs[0]
    .split(",")
    .map((v) => parseInt(v))
    .sort((a, b) => a - b);
  const target = parseInt(inputs[1]);
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // 找到第一个大于等于target的元素
    if (arr[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  console.log(left + 1);
}
solution();
