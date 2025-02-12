/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-12 10:34:10                                                  *
 * @LastModifiedDate: 2025-02-12 11:08:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个正整数 n，如果能够分解为 m（m > 1）个连续正整数之和，请输出所有分解中，m最小的分解。 如果给定整数无法分解为连续正整数，则输出字符串"N"。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const target = parseInt(inputs[0]);
  let m = 2;
  let res = [target, "="];
  while (2 * target - m * m + m >= 2 * m) {
    if ((2 * target - m * m + m) % (2 * m) === 0) {
      let x = (2 * target - m * m + m) / (2 * m);
      res.push(x);
      for (let i = 1; i < m; i++) {
        res.push("+");
        res.push(x + i);
      }
      break;
    }
    m++;
  }
  console.log(res.length > 2 ? res.join("") : "N");
}

solution();

// x m
// (x + x + m) *m / 2 = taget
//
