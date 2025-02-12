/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-12 21:22:43                                                  *
 * @LastModifiedDate: 2025-02-12 22:57:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 现有N个任务需要处理，同一时间只能处理一个任务，处理每个任务所需要的时间固定为1。

// 每个任务都有最晚处理时间限制和积分值，在最晚处理时间点之前处理完成任务才可获得对应的积分奖励。

// 可用于处理任务的时间有限，请问在有限的时间内，可获得的最多积分。

// 输入描述
// 第一行为一个数 N，表示有 N 个任务，1 ≤ N ≤ 100

// 第二行为一个数 T，表示可用于处理任务的时间，1 ≤ T ≤ 100

// 接下来 N 行，每行两个空格分隔的整数（SLA 和 V），SLA 表示任务的最晚处理时间，V 表示任务对应的积分。（1 ≤ SLA ≤ 100，0 ≤ V ≤ 100000）

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const n = parseInt(inputs[0]);
  const t = parseInt(inputs[1]);
  const hash = new Map();
  for (let i = 2; i < n + 2; i++) {
    const [curTime, value] = inputs[i].split(" ").map((v) => parseInt(v));
    hash.has(curTime)
      ? hash.get(curTime).push(value)
      : hash.set(curTime, [value]);
  }
  // 倒序遍历，逐一将每个符合时间条件的积分放入到一个优先队列中，每次选取最大的值
  // 因为N最大为100，所以可以不实现堆，每次放入可选积分时进行一次排序即可
  const values = [];
  let res = 0;
  for (let i = t; i >= 1; i--) {
    const newVal = hash.get(i) || [];
    for (const val of newVal) values.push(val);
    values.sort((a, b) => a - b);
    if (values.length) res += values.pop();
  }
  console.log(res)
}
solution();

// 2
// 1 3
// 2 5
// 2 6
