/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-16 01:48:39                                                  *
 * @LastModifiedDate: 2025-02-16 01:59:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 现在有多组整数数组，需要将它们合并成一个新的数组。

// 合并规则，从每个数组里按顺序取出固定长度的内容合并到新的数组中，取完的内容会删除掉，如果该行不足固定长度或者已经为空，则直接取出剩余部分的内容放到新的数组中，继续下一行。

// 输入描述

// 第一行是每次读取的固定长度，0 < 长度 < 10

// 第二行是整数数组的数目，0 < 数目 < 1000

// 第3-n行是需要合并的数组，不同的数组用回车换行分隔，数组内部用逗号分隔，最大不超过100个元素。

// 输出描述

// 输出一个新的数组，用逗号分隔。

// 用例

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const k = parseInt(inputs[0]); // 抽取的固定长度
  const m = parseInt(inputs[1]); // 数组数目
  const arrs = [];
  let total = 0;
  for (let i = 2; i < m + 2; i++) {
    arrs.push(
      inputs[i]
        .split(",")
        .reverse()
        .map((v) => parseInt(v))
    );
    total += arrs[i - 2].length;
  }
  const res = [];
  while (total) {
    for (let i = 0; i < m; i++) {
      const arr = arrs[i];
      let num = k;
      while (arr.length && num) {
        res.push(arr.pop());
        num--; // 一次抽取k个
        total--;
      }
      if (!total) break;
    }
  }
  console.log(res.join(","));
}
solution();
