/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 15:47:17                                                  *
 * @LastModifiedDate: 2025-02-14 15:52:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个字符串s，最多只能进行一次变换，返回变换后能得到的最小字符串（按照字典序进行比较）。 变换规则：交换字符串中任意两个不同位置的字符。

// 输入描述

// 一串小写字母组成的字符串s

// 输出描述

// 按照要求进行变换得到的最小字符串。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const str = inputs[0].split("");
  const bestStr = str.slice().sort();
  const n = str.length;
  for (let i = 0; i < n; i++) {
    if (str[i] !== bestStr[i]) {
      // 把str中的最后一个bestStr[i]提取到前面
      const idx = str.lastIndexOf(bestStr[i]);
      [str[i], str[idx]] = [str[idx], str[i]];
      break;
    }
  }
  console.log(str.join(""));
}
solution();

// bddeabaabba
//
