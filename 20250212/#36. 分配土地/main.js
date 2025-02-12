/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-12 09:44:47                                                  *
 * @LastModifiedDate: 2025-02-12 09:55:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 从前有个村庄，村民们喜欢在各种田地上插上小旗子，旗子上标识了各种不同的数字。 某天集体村民决定将覆盖相同数字的最小矩阵形的土地分配给村里做出巨大贡献的村民，请问此次分配土地，做出贡献的村民种最大会分配多大面积?

// 输入描述

// 第一行输入 m 和 n， m 代表村子的土地的长 n 代表土地的宽 第二行开始输入地图上的具体标识

// 输出描述

// 此次分配土地，做出贡献的村民种最大会分配多大面积

// 备注

// 旗子上的数字为1~500，土地边长不超过500 未插旗子的土地用0标识

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const [m, n] = inputs[0].split(" ").map((v) => parseInt(v));
  const hash = new Map();
  for (let i = 1; i <= m; i++) {
    const cur = inputs[i].split(" ");
    for (let j = 0; j < n; j++) {
      if (cur[j] !== "0") {
        hash.has(cur[j])
          ? hash.get(cur[j]).push([i - 1, j])
          : hash.set(cur[j], [[i - 1, j]]);
      }
    }
  }
  let res = 0;
  for (const [key, value] of hash) {
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    for (const [x, y] of value) {
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
    }
    const area = (maxX - minX) * (maxY - minY);
    res = Math.max(res, area);
  }
  console.log(res);
}
solution();
