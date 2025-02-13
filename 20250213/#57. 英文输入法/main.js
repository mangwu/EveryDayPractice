/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-13 22:54:27                                                  *
 * @LastModifiedDate: 2025-02-13 23:18:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 主管期望你来实现英文输入法单词联想功能。

// 需求如下： 依据用户输入的单词前缀，从已输入的英文语句中联想出用户想输入的单词，按字典序输出联想到的单词序列，如果联想不到，请输出用户输入的单词前缀。

// 注意： 1、英文单词联想时，区分大小写 2、缩略形式如”don’t”，判定为两个单词，”don”和”t” 3、输出的单词序列，不能有重复单词，且只能是英文单词，不能有标点符号

// 输入描述 输入为两行。 首行输入一段由英文单词word和标点符号组成的语句str； 接下来一行为一个英文单词前缀pre。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const words = inputs[0].split(/[^a-zA-Z]+/);
  const set = new Set(words);
  const pre = inputs[1];
  const res = [];
  for (const item of set) {
    if (item.startsWith(pre)) res.push(item);
  }
  res.sort();
  console.log(res.length ? res.join(" ") : pre);
}
solution();
