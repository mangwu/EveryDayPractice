/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 11:56:19                                                  *
 * @LastModifiedDate: 2025-02-14 12:04:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 给定一个非空数组（列表），其元素数据类型为整型，请按照数组元素十进制最低位从小到大进行排序，十进制最低位相同的元素，相对位置保持不变。当数组元素为负值时，十进制最低位等同于去除符号位后对应十进制值最低位。

// 输入描述

// 给定一个非空数组，其元素数据类型为32位有符号整数，数组长度[1, 1000]

// 输出描述

// 输出排序后的数组

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const arr = inputs[0]
    .split(",")
    .map((v) => parseInt(v))
    .sort((a, b) => {
      const aL = Math.abs(a) % 10;
      const bL = Math.abs(b) % 10;
      return aL - bL;
    });
  console.log(arr.join(","));
}
solution();
