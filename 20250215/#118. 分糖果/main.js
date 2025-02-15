/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-16 01:38:36                                                  *
 * @LastModifiedDate: 2025-02-16 01:46:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 小明从糖果盒中随意抓一把糖果，每次小明会取出一半的糖果分给同学们。

// 当糖果不能平均分配时，小明可以选择从糖果盒中（假设盒中糖果足够）取出一个糖果或放回一个糖果。

// 小明最少需要多少次（取出、放回和平均分配均记一次），能将手中糖果分至只剩一颗。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const num = parseInt(inputs[0]);
  const dfs = (num) => {
    if (num === 1) return 0;
    if (num % 2 === 0) {
      return dfs(num / 2) + 1;
    }
    return Math.min(dfs(num + 1), dfs(num - 1)) + 1;
  };
  const res = dfs(num);
  console.log(res);
}
solution();

// 1011010101000
