/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-16 02:00:32                                                  *
 * @LastModifiedDate: 2025-02-16 02:05:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个字符串s，最多只能进行一次变换，返回变换后能得到的最小字符串（按照字典序进行比较）。

// 变换规则：交换字符串中任意两个不同位置的字符。

// 输入描述

// 一串小写字母组成的字符串s

// 输出描述

// 按照要求进行变换得到的最小字符串。

// 备注

// s是都是小写字符组成

// 1 ≤ s.length ≤ 1000

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const strArr = inputs[0].split("");
  const sortArr = strArr.slice().sort();
  const n = sortArr.length;
  for (let i = 0; i < n; i++) {
    if (sortArr[i] !== strArr[i]) {
      const j = strArr.lastIndexOf(sortArr[i], n - 1);
      [strArr[i], strArr[j]] = [strArr[j], strArr[i]];
      break;
    }
  }
  console.log(strArr.join(""));
}
solution();
