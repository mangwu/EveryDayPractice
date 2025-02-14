/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 17:30:02                                                  *
 * @LastModifiedDate: 2025-02-14 17:36:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 最多派出的团队数量
// 题目
// 用数组代表每个人的能力，一个比赛活动要求参赛团队的最低能力值为N，每个团队可以由1人或者2人组成，且1个人只能参加1个团队，计算出最多可以派出多少只符合要求的团队。

// 输入描述

// 第一行代表总人数，范围1-500000

// 第二行数组代表每个人的能力

// 数组大小，范围1-500000
// 元素取值，范围1-500000
// 第三行数值为团队要求的最低能力值，范围1-500000

// 输出描述

// 最多可以派出的团队数量

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  let n = parseInt(inputs[0]);
  const arr = inputs[1].split(" ").map((v) => parseInt(v));
  const minNum = parseInt(inputs[2]);
  arr.sort((a, b) => a - b);
  let res = 0;
  while (arr.length && arr[arr.length - 1] >= minNum) {
    res++;
    arr.pop();
  }
  n = arr.length;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    const sum = arr[right] + arr[left];
    if (sum >= minNum) {
      res++;
      left++;
      right--;
    } else {
      left++;
    }
  }
  console.log(res);
}
solution();
