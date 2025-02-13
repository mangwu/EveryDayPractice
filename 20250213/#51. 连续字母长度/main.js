/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-13 15:24:43                                                  *
 * @LastModifiedDate: 2025-02-13 15:33:47                                      *
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
  const str = inputs[0];
  const k = parseInt(inputs[1]);
  const hash = new Map();
  const n = str.length;
  for (let i = 0; i < n; i++) {
    const ch = str[i];
    let j = i + 1;
    while (j < n && str[j] === ch) j++;
    const num = j - i;
    i = j - 1;
    hash.set(ch, Math.max(num, hash.get(ch) || 0));
  }
  const hashArr = [...hash].sort((a, b) => b[1] - a[1]);
  console.log(hashArr[k - 1][1]);
}
solution();
