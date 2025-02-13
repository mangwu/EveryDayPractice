/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 00:24:42                                                  *
 * @LastModifiedDate: 2025-02-14 00:34:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 为了充分发挥GPU算力，需要尽可能多的将任务交给GPU执行，现在有一个任务数组，数组元素表示在这1秒内新增的任务个数且每秒都有新增任务。 假设GPU最多一次执行n个任务，一次执行耗时1秒，在保证GPU不空闲情况下，最少需要多长时间执行完成。

// 输入描述 第一个参数为GPU一次最多执行的任务个数，取值范围[1, 10000] 第二个参数为任务数组长度，取值范围[1, 10000] 第三个参数为任务数组，数字范围[1, 10000]

// 输出描述 执行完所有任务最少需要多少秒。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const tasks = parseInt(inputs[0]);
  const len = parseInt(inputs[1]);
  const arr = inputs[2].split(" ").map((v) => parseInt(v));
  let left = 0;
  let res = 0;
  for (let i = 0; i < len; i++) {
    left += parseInt(arr[i]);
    left = Math.max(left - tasks, 0);
    res++;
  }
  res += Math.ceil(left / tasks);
  console.log(res);
}
solution();
