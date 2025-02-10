/*
 * @Author: mangwu                                                             *
 * @File: NodejsInOut.js                                                       *
 * @Date: 2025-02-10 18:24:47                                                  *
 * @LastModifiedDate: 2025-02-10 18:28:35                                      *
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

const asyncRl = async () => (await iter.next()).value;

void async function () {
  while ((line = await asyncRl())) {
    const tokens = line.split(" ");
  }
};
