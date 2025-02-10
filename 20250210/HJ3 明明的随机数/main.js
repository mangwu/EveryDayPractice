/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-10 18:48:53                                                  *
 * @LastModifiedDate: 2025-02-10 18:52:11                                      *
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

const iter = rl[Symbol.asyncIterator]();
const asyncFun = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await asyncFun())) {
    inputs.push(parseInt(line));
  }
  inputs.shift();
  const arr = [...new Set(inputs)].sort((a, b) => a - b);
  for (const num of arr) console.log(num);
}
solution()
