/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-11 16:09:53                                                  *
 * @LastModifiedDate: 2025-02-11 16:16:04                                      *
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
const asyncFunc = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await asyncFunc())) {
    inputs.push(line);
  }
  const arr = inputs[0].split(",").sort();
  console.log(arr.join(","));
}
solution()