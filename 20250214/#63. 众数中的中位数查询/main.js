/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 09:55:02                                                  *
 * @LastModifiedDate: 2025-02-14 10:40:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 众数是指一组数据中出现次数量多的那个数，众数可以是多个。 中位数是指把一组数据从小到大排列，最中间的那个数，如果这组数据的个数是奇数，那最中间那个就是中位数，如果这组数据的个数为偶数，那就把中间的两个数之和除以2，所得的结果就是中位数。 查找整型数组中元素的众数并组成一个新的数组，求新数组的中位数。

// 输入描述

// 输入一个一维整型数组，数组大小取值范围 0<N<1000，数组中每个元素取值范围 0<E<1000

// 输出描述

// 输出众数组成的新数组的中位数
const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const arr = inputs[0].split(" ").map((v) => parseInt(v));
  const hash = new Map();
  for (const item of arr) hash.set(item, (hash.get(item) || 0) + 1);
  const cnts = [...hash].sort((a, b) => b[1] - a[1]);
  const maxNum = cnts[0][1];
  const res = [];
  for (const [num, cnt] of cnts) {
    if (cnt === maxNum) {
      res.push(...new Array(cnt).fill(num));
    } else break;
  }
  res.sort((a, b) => a - b);
  const n = res.length;
  if (n % 2 === 1) {
    console.log(res[Math.floor(n / 2)]);
  } else {
    console.log((res[Math.floor((n - 1) / 2)] + res[n / 2]) / 2);
  }
}
solution();
