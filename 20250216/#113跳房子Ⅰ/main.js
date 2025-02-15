/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-16 03:16:40                                                  *
 * @LastModifiedDate: 2025-02-16 03:34:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const count = parseInt(inputs[0]);
  const arr = JSON.parse(inputs[1]);
  const path = [];
  const n = arr.length;
  let res = [];
  const dfs = (rest, i, cnts) => {
    // 如果找到了就不用找了
    if (res.length) return;
    if (cnts === 0) {
      // 次数用完且步数之和也满足条件
      if (rest === 0) {
        res = path.slice();
        return;
      }
      return;
    }
    if (i === n) return; // 没有后续可用步数了
    path.push(arr[i]); // 使用当前步数
    dfs(rest - arr[i], i + 1, cnts - 1);
    path.pop();
    // 不使用当前步数
    dfs(rest, i + 1, cnts);
  };
  dfs(count, 0, 3);
  console.log(`[${res.join(",")}]`);
}
solution();
