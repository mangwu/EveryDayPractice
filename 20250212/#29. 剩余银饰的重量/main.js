/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-13 00:09:48                                                  *
 * @LastModifiedDate: 2025-02-13 00:30:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 有 N 块二手市场收集的银饰，每块银饰的重量都是正整数，收集到的银饰会被熔化用于打造新的饰品。 每一回合，从中选出三块最重的银饰，然后一起熔掉。 假设银饰的重量分别为 x 、y和z，且 x ≤ y ≤ z。那么熔掉的可能结果如下：

// 如果 x == y == z，那么三块银饰都会被完全熔掉； 如果 x == y 且 y != z，会剩余重量为 z - y 的银块无法被熔掉； 如果 x != y 且 y == z，会剩余重量为 y - x 的银块无法被熔掉； 如果 x != y 且 y != z，会剩余重量为 z - y 与 y - x 差值 的银块无法被熔掉。

// 最后， 如果剩余两块，返回较大的重量（若两块重量相同，返回任意一块皆可） 如果只剩下一块，返回该块的重量 如果没有剩下，就返回 0

// 输入描述 输入数据为两行： 第一行为银饰数组长度 n，1 ≤ n ≤ 40， 第二行为n块银饰的重量，重量的取值范围为[1，2000]，重量之间使用空格隔开

// 输出描述 如果剩余两块，返回较大的重量（若两块重量相同，返回任意一块皆可）； 如果只剩下一块，返回该块的重量； 如果没有剩下，就返回 0。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const nums = inputs[1].split(" ").map((v) => parseInt(v));
  nums.sort((a, b) => a - b);
  while (nums.length >= 3) {
    const x = nums.pop();
    const y = nums.pop();
    const z = nums.pop();
    if (x === y && y === z) continue;
    if (x === y && y !== z) {
      nums.push(y - z);
      nums.sort((a, b) => a - b);
    } else if (x !== y && y === z) {
      nums.push(x - y);
      nums.sort((a, b) => a - b);
    } else {
      // 都不相等
      const diff = Math.abs(x - y - (y - z));
      diff && nums.push(diff);
      nums.sort((a, b) => a - b);
    }
  }
  console.log(nums.pop() || 0);
}
solution();
