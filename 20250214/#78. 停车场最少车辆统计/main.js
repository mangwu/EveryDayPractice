/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 17:10:17                                                  *
 * @LastModifiedDate: 2025-02-14 17:20:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 特定大小的停车场，数组cars[]表示，其中1表示有车，0表示没车。车辆大小不一，小车占一个车位（长度1），货车占两个车位（长度2），卡车占三个车位（长度3）。 统计停车场最少可以停多少辆车，返回具体的数目。

// 输入描述

// 整型字符串数组cars[]，其中1表示有车，0表示没车，数组长度小于1000。

// 输出描述

// 整型数字字符串，表示最少停车数目。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const cars = inputs[0].split(",");
  const n = cars.length;
  let res = 0;
  for (let i = 0; i < n; i++) {
    if (cars[i] === "1") {
      let j = i + 1;
      while (j < n && cars[j] === "1") j++;
      const num = j - i;
      i = j;
      res += Math.floor(num / 3);
      if (num % 3 !== 0) res++;
    }
  }
  console.log(res);
}
solution();
