/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-13 14:27:48                                                  *
 * @LastModifiedDate: 2025-02-13 14:30:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 给你一个字符串 s，首尾相连成一个环形，请你在环中找出 'o' 字符出现了偶数次最长子字符串的长度。

// 输入描述
// 输入是一个小写字母组成的字符串

// 输出描述
// 输出是一个整数

// 备注 1 ≤ s.length ≤ 500000 s 只包含小写英文字母

// 用例
// 输入 alolobo 输出 6 说明 最长子字符串之一是 "alolob"，它包含2个'o'

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const str = inputs[0];
  // 计算o的个数
  let num = 0;
  for (const ch of str) num += Number(ch === "o");
  console.log(str.length - (num % 2));
}
solution();
