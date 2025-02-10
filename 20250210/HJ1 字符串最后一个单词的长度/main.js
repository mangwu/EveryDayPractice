/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-10 18:29:26                                                  *
 * @LastModifiedDate: 2025-02-10 18:41:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
const itr = rl[Symbol.asyncIterator]();

const asyncRl = async () => (await itr.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await asyncRl())) {
    inputs.push(line);
  }
  // 参数获取
  const str = inputs[0];
  const ch = inputs[1].toLowerCase();
  // 题解
  let res = 0;
  for (const s of str) {
    if (s.toLowerCase() === ch) {
      res++;
    }
  }
  console.log(res);
  
}
solution();
