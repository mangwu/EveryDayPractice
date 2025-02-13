/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-13 13:53:45                                                  *
 * @LastModifiedDate: 2025-02-13 14:25:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在一颗树中，每个节点代表一个家庭成员，节点的数字表示其个人的财富值，一个节点及其直接相连的子节点被定义为一个小家庭。 现给你一颗树，请计算出最富裕的小家庭的财富和。

// 输入描述
// 第一行为一个数 N，表示成员总数，成员编号 1~N。1 ≤ N ≤ 1000 第二行为 N 个空格分隔的数，表示编号 1~N 的成员的财富值。0 ≤ 财富值 ≤ 1000000 接下来 N -1 行，每行两个空格分隔的整数（N1, N2），表示 N1 是 N2 的父节点。

// 输出描述
// 最富裕的小家庭的财富和

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const n = parseInt(inputs[0]); // 节点数
  const vals = inputs[1].split(" ").map((v) => parseInt(v)); // 财富值
  // 树的连接表，单向连接
  const linkList = new Array(n).fill(0).map((v) => new Array(n).fill(0));
  for (let i = 2; i < inputs.length; i++) {
    const [n1, n2] = inputs[i].split(" ");
    linkList[n1 - 1][n2 - 1] = 1; // 表示n1是n2的父节点
  }
  let res = 0;
  for (let i = 0; i < n; i++) {
    let sum = vals[i];
    for (let j = 0; j < n; j++) {
      if (i !== j && linkList[i][j]) {
        sum += vals[j];
      }
    }
    res = Math.max(res, sum);
  }
  console.log(res);
}
solution();
