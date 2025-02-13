/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-13 19:23:18                                                  *
 * @LastModifiedDate: 2025-02-13 20:15:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 在一个销售团队中，每个销售员在完成销售后都需要支付一部分利润给他们的上级，这种结构类似于金字塔。当一个销售员赚取100元时，他需要支付15元给他的直接上级。现在，给定每个销售员的销售额和他们的直接上级，你的任务是计算金字塔顶部的Boss的总收入。

// 输入描述：
// 第一行是一个整数N，表示销售团队中的销售员数量。 接下来的N行，每行有三个数字，分别代表： 销售员的ID 该销售员的直接上级的ID 销售员的销售额 注意：Boss的直接上级ID为0。

// 输出描述：
// 输出一行，包含两个整数。第一个是Boss的ID（这应该总是0），第二个是Boss的总收入。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const n = parseInt(inputs[0]);
  const hash = new Map();
  const arr = new Array(n + 1).fill(0);
  for (let i = 1; i < inputs.length; i++) {
    const [id, parentId, sale] = inputs[i].split(" ").map((v) => parseInt(v));
    hash.has(parentId) ? hash.get(parentId).push(id) : hash.set(parentId, [id]);
    arr[id] = sale;
  }
  const dfs = (node) => {
    let res = arr[node];
    const nxt = hash.get(node) || [];
    for (const item of nxt) {
      res += dfs(item);
    }
    return Math.floor(res / 100) * 15;
  };
  let res = arr[0];
  const nxt = hash.get(0) || [];
  for (const item of nxt) {
    res += dfs(item);
  }
  console.log(0, res);
}
solution();
