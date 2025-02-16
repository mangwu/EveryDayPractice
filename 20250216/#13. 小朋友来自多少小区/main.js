/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-16 20:16:15                                                  *
 * @LastModifiedDate: 2025-02-16 20:34:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 幼儿园组织活动，老师布置了一个任务： 每个小朋友去了解与自己同一个小区的小朋友还有几个。 我们将这些数量汇总到数组 garden 中。 请根据这些小朋友给出的信息，计算班级小朋友至少来自几个小区？

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const arr = inputs[0].split(" ").map((v) => parseInt(v));
  let res = 0;
  const hash = new Map();
  for (const item of arr) {
    if (item === 0) {
      res++;
      continue;
    }
    const num = item + 1;
    if (hash.has(num)) {
      const val = hash.get(num);
      if (val === num - 1) {
        res += num;
        hash.delete(num);
      } else {
        hash.set(num, val + 1);
      }
    } else {
      hash.set(num, 1);
    }
  }
  for (const [key] of hash) {
    res += key;
  }
  console.log(res);
}
solution();
