/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 11:50:59                                                  *
 * @LastModifiedDate: 2025-02-14 11:55:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 小明今年升学到了小学1年级来到新班级后，发现其他小朋友身高参差不齐，然后就想基于各小朋友和自己的身高差，对他们进行排序，请帮他实现排序。

// 输入描述

// 第一行为正整数 h和n，0<h<200 为小明的身高，0<n<50 为新班级其他小朋友个数。 第二行为n个正整数，h1 ~ hn分别是其他小朋友的身高，取值范围0<hi<200，且n个正整数各不相同。

// 输出描述

// 输出排序结果，各正整数以空格分割， 和小明身高差绝对值最小的小朋友排在前面， 和小明身高差绝对值最大的小朋友排在后面， 如果两个小朋友和小明身高差一样，则个子较小的小朋友排在前面。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const [height, n] = inputs[0].split(" ").map((v) => parseInt(v));
  const arr = inputs[1]
    .split(" ")
    .map((v) => parseInt(v))
    .sort((a, b) => {
      const diffa = Math.abs(a - height);
      const diffb = Math.abs(b - height);
      return diffa !== diffb ? diffa - diffb : a - b;
    });
  console.log(arr.join(" "));
}
solution();
