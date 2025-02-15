/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-15 20:12:05                                                  *
 * @LastModifiedDate: 2025-02-15 21:19:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 给定一个由多个命令字组成的命令字符串：

// 字符串长度小于等于127字节，只包含大小写字母，数字，下划线和偶数个双引号； 命令字之间以一个或多个下划线 _ 进行分割； 可以通过两个双引号 "" 来标识包含下划线 _ 的命令字或空命令字（仅包含两个双引号的命令字），双引号不会在命令字内部出现； 请对指定索引的敏感字段进行加密，替换为******（6个*），并删除命令字前后多余的下划线_。

// 如果无法找到指定索引的命令字，输出字符串ERROR。

// 输入描述

// 输入为两行，第一行为命令字索引 K（从 0 开始），第二行为命令字符串 S。

// 输出描述

// 输出处理后的命令字符串，如果无法找到指定索引的命令字，输出字符串ERROR

// 用例

// 输入 2 aaa_password_"a12_45678"_timeout__100_""_

// 输出

// aaa_password_******timeout_100""

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const k = parseInt(inputs[0]);
  // _是分割关键字的字符，但是也可以被双引号包围以作为关键字的一部分
  const str = inputs[1];
  const res = [];
  const n = str.length;

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      // 第一个关键字特殊处理
      while (str[i] === "_") i++;
      if (i >= n) break;
      if (str[i] === '"') {
        const j = str.indexOf('"', i + 1);
        res.push(str.substring(i, j + 1));
        i = j;
        continue;
      } else {
        const j = str.indexOf("_", i + 1);
        if (j === -1) {
          res.push(str.substring(i, n));
          break;
        } else {
          res.push(str.substring(i, j));
          i = j - 1;
          continue;
        }
      }
    }
    if (str[i] === "_") {
      while (i < n && str[i] === "_") i++;
      if (str[i] === '"') {
        const j = str.indexOf('"', i + 1);
        res.push(str.substring(i, j + 1));
        i = j;
      } else if (i < n) {
        const j = str.indexOf("_", i);
        if (j === -1) {
          res.push(str.substring(i, n));
          break;
        } else {
          res.push(str.substring(i, j));
          i = j - 1;
        }
      }
    }
  }
  // console.log(res);
  if (res.length <= k) console.log("ERROR");
  else {
    res[k] = "******";
    console.log(res.join("_"));
  }
}
solution();
