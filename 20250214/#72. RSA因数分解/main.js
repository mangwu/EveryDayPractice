/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 15:11:30                                                  *
 * @LastModifiedDate: 2025-02-14 15:19:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// RSA加密算法在网络安全世界中无处不在，它利用了极大整数因数分解的困难度，数据越大，安全系数越高，给定一个 32 位正整数，请对其进行因数分解，找出是哪两个素数的乘积。

// 输入描述

// 一个正整数 num 0 < num < 2147483647

// 输出描述

// 如果成功找到，以单个空格分割，从小到大输出两个素数，分解失败，请输出-1, -1

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const num = parseInt(inputs[0]);
  const sqirt = Math.floor(Math.sqrt(num));
  const isFactor = (num) => {
    const s = Math.floor(Math.sqrt(num));
    for (let i = 2; i <= s; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  const res = [-1, -1];
  for (let i = 2; i <= sqirt; i++) {
    if (num % i === 0) {
      if (isFactor(i) && isFactor(num / i)) {
        res[0] = i;
        res[1] = num / i;
        break;
      }
    }
  }
  console.log(res.join(" "));
}
solution();
