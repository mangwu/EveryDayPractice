/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-13 10:18:22                                                  *
 * @LastModifiedDate: 2025-02-13 10:28:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 现代计算机系统中通常存在多级的存储设备，针对海量 workload 的优化的一种思路是将热点内存页优先放到快速存储层级，这就需要对内存页进行冷热标记。 一种典型的方案是基于内存页的访问频次进行标记，如果统计窗口内访问次数大于等于设定阈值，则认为是热内存页，否则是冷内存页。 对于统计窗口内跟踪到的访存序列和阈值，现在需要实现基于频次的冷热标记。内存页使用页框号作为标识。

// 输入描述
// 第一行输入为 N，表示访存序列的记录条数，0 < N ≤ 10000。 第二行为访存序列，空格分隔的 N 个内存页框号，页面号范围 0 ~ 65535，同一个页框号可能重复出现，出现的次数即为对应框号的频次。 第三行为热内存的频次阈值 T，正整数范围 1 ≤ T ≤ 10000。

// 输出描述
// 第一行输出标记为热内存的内存页个数，如果没有被标记的热内存页，则输出 0 。

// 如果第一行 > 0，则接下来按照访问频次降序输出内存页框号，一行一个，频次一样的页框号，页框号小的排前面。

// 用例

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const n = parseInt(inputs[0]);
  if (n === 0) {
    console.log(0);
    return;
  }
  const arr = inputs[1].split(" ").map((v) => parseInt(v));
  const minNum = parseInt(inputs[2]);
  const hash = new Map();
  for (const item of arr) {
    hash.set(item, (hash.get(item) || 0) + 1);
  }
  const res = [];
  for (const [key, value] of hash) {
    if (value >= minNum) {
      res.push([key, value]);
    }
  }
  res.sort((a, b) => (a[1] !== b[1] ? b[1] - a[1] : a[0] - b[0]));
  console.log(res.length);
  for (const item of res) {
    console.log(item[0]);
  }
}
solution()