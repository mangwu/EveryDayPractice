/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-16 17:45:53                                                  *
 * @LastModifiedDate: 2025-02-16 18:02:42                                      *
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
  const n = parseInt(inputs[0]);
  let res = Infinity;
  for (let i = 1; i <= n; i++) {
    const [t, m] = inputs[i].split(" ").map((v) => parseInt(v));
    if (m < 128) {
      res = Math.min(res, t + m);
    } else {
      const exp = (130 >> 7) & 0x7f;
      const mant = 0x7f & m;
      const newM = (mant | 0x10) << (exp + 3);
      res = Math.min(res, newM + t);
    }
  }
  console.log(res);
}
solution();
