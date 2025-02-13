/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-13 15:16:03                                                  *
 * @LastModifiedDate: 2025-02-13 15:20:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 输入一个由N个大小写字母组成的字符，按照ASCII码值从小到大进行排序，查找字符串中第K个最小ASCII码值的字母(k>=1) 输出该字母所在字符串中的位置索引(字符串的第一个位置索引为0)，k如果大于字符串长度则输出最大ASCII码值的字母所在字符串的位置索引，如果有重复字母则输出字母的最小位置索引。

// 输入描述

// 第一行输入一个由大小写字母组成的字符串 第二行输入k ，k必须大于0 ，k可以大于输入字符串的长度

// 输出描述

// 输出字符串中第k个最小ASCII码值的字母所在字符串的位置索引 k如果大于字符串长度则输出最大ASCII码值的字母所在字符串的位置索引 如果第k个最小ASCII码值的字母存在重复 则输出该字母的最小位置索引

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const str = inputs[0];
  const k = parseInt(inputs[1]);
  const arr = str.split("").sort((a, b) => a.charCodeAt() - b.charCodeAt());
  let targetCh = "";
  const n = str.length;
  if (k > n) {
    targetCh = arr[n - 1];
  } else {
    targetCh = arr[k - 1];
  }
  console.log(str.indexOf(targetCh));
}
solution();
