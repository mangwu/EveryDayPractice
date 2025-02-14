/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 15:22:57                                                  *
 * @LastModifiedDate: 2025-02-14 15:33:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 一个整数可以由连续的自然数之和来表示。给定一个整数，计算该整数有几种连续自然数之和的表达式，且打印出每种表达式

// 输入描述

// 一个目标整数T (1 <=T<= 1000)

// 输出描述

// 该整数的所有表达式和表达式的个数。

// 如果有多种表达式，输出要求为：自然数个数最少的表达式优先输出，每个表达式中按自然数递增的顺序输出，具体的格式参见样例。 在每个测试数据结束时，输出一行”Result:X”，其中X是最终的表达式个数。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  // (a + a + n - 1) * n / 2 = target
  // 2an + n^2 - n = 2 * target
  // 2an = 2 * target - n^2 + n
  // a = (2 * target - n^2 + n) / 2n
  const num = parseInt(inputs[0]);
  const res = [];
  for (let n = 1; n < num; n++) {
    const top = 2 * num - n * n + n;
    const bottom = 2 * n;
    if (top < bottom) break;
    if (top % bottom === 0) {
      const a = top / bottom;
      res.push(new Array(n).fill(0).map((_v, i) => i + a));
    }
  }
  for (const item of res) {
    console.log(num + "=" + item.join("+"));
  }
  console.log(`Result:${res.length}`);
}
solution();
