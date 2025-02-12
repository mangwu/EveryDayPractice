/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-12 09:23:26                                                  *
 * @LastModifiedDate: 2025-02-12 09:35:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 用数组代表每个人的能力，一个比赛活动要求参赛团队的最低能力值为N，每个团队可以由1人或者2人组成，且1个人只能参加1个团队，计算出最多可以派出多少只符合要求的团队。

// 输入描述
// 第一行代表总人数，范围1-500000 第二行数组代表每个人的能力 数组大小，范围1-500000 元素取值，范围1-500000 第三行数值为团队要求的最低能力值，范围1-500000 输出描述 最多可以派出的团队数量

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const n = parseInt(inputs[0]);
  const arr = inputs[1]
    .split(" ")
    .map((v) => parseInt(v))
    .sort((a, b) => a - b);
  const minTarget = parseInt(inputs[2]);
  let left = 0;
  let right = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] >= minTarget) break;
    right = i;
  }
  let res = n - right;
  while (right > left) {
    const sum = arr[right] + arr[left];
    if (sum >= minTarget) {
      right--;
      left++;
      res++;
    } else left++;
  }
  console.log(res);
}
solution();

// 7
// 3 1 5 7 9 2 6 => 1 2 3 5 6 7 9
// 8
