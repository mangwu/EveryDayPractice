/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 14:01:15                                                  *
 * @LastModifiedDate: 2025-02-14 15:07:59                                      *
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
  const num = inputs[0];
  // 9进制
  // 20 => 2 * 9 ^ 1 + 0 * 9 ^ 0
  // 21 => 2 * 9 ^ 1 + 1 * 9 ^ 0
  // 25 => 2 * 9 ^ 1 + (5 - 1) * 9 ^ 0
  // 35 => 3 * 9 ^ 1 + (5 - 1) * 9 ^ 0
  // 55 => (5 - 1) * 9 ^ 1 + (5 - 1) * 9 ^ 0
  const n = num.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    let base = parseInt(num[n - i - 1]);
    if (base > 4) base--;
    res += base * Math.pow(9, i);
  }
  console.log(res);
}
solution();
