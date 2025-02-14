/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 17:22:33                                                  *
 * @LastModifiedDate: 2025-02-14 17:29:08                                      *
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
  const [n, e] = inputs[0].split(" ").map((v) => parseInt(v));
  let x = 0;
  let y = 0;
  let res = 0;
  for (let i = 1; i <= n; i++) {
    const [curX, offsetY] = inputs[i].split(" ").map((v) => parseInt(v));
    if (curX <= e) {
      const diffX = curX - x;
      res += diffX * Math.abs(y);
      y += offsetY;
      x = curX;
    } else {
      const diffX = e - x;
      res += diffX * Math.abs(y);
      y += offsetY;
      x = e;
    }
  }
  res += (e - x) * Math.abs(y);
  console.log(res);
}
solution();
