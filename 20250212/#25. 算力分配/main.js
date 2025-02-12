/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-12 21:03:10                                                  *
 * @LastModifiedDate: 2025-02-12 21:22:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 现有两组服务器A和B，每组有多个算力不同的CPU，其中 A[i] 是 A 组第 i 个CPU的运算能力，B[i] 是 B组 第 i 个CPU的运算能力。

// 一组服务器的总算力是各CPU的算力之和。

// 为了让两组服务器的算力相等，允许从每组各选出一个CPU进行一次交换，

// 求两组服务器中，用于交换的CPU的算力，并且要求从A组服务器中选出的CPU，算力尽可能小。

// 输入描述
// 第一行输入为L1和L2，以空格分隔，L1表示A组服务器中的CPU数量，L2表示B组服务器中的CPU数量。

// 第二行输入为A组服务器中各个CPU的算力值，以空格分隔。

// 第三行输入为B组服务器中各个CPU的算力值，以空格分隔。

// 1 ≤ L1 ≤ 10000 1 ≤ L2 ≤ 10000 1 ≤ A[i] ≤ 100000 1 ≤ B[i] ≤ 100000

// 输出描述
// 对于每组测试数据，输出两个整数，以空格分隔，依次表示A组选出的CPU算力，B组选出的CPU算力。 要求从A组选出的CPU的算力尽可能小。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const [aNum, bNum] = inputs[0].split(" ").map((v) => parseInt(v));
  const aCpu = inputs[1]
    .split(" ")
    .map((v) => parseInt(v))
    .sort((a, b) => a - b);
  let aSum = aCpu.reduce((a, b) => a + b, 0);
  const bCpu = inputs[2]
    .split(" ")
    .map((v) => parseInt(v))
    .sort((a, b) => a - b);
  let bSum = bCpu.reduce((a, b) => a + b, 0);
  // 找出算力之差为diff的最小a算力
  let aI = 0;
  let bI = 0;
  let res = [aCpu[0], bCpu[0]];
  while (aI < aNum && bI < bNum) {
    const curDiff = aSum - aCpu[aI] + bCpu[bI] - (bSum - bCpu[bI] + aCpu[aI]);
    if (curDiff > 0) {
      // 增加aCpu大小以让curDiff变小
      aI++;
    } else if (curDiff < 0) {
      // 增加bCpu大小以让curDiff变大
      bI++;
    } else {
      res = [aCpu[aI], bCpu[bI]];
      break;
    }
  }
  console.log(res.join(" "));
}
solution();

// -4
// 1 2 3 =>
// 2 2 2 4
