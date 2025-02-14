/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 23:08:43                                                  *
 * @LastModifiedDate: 2025-02-14 23:11:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 现需要在某城市进行5G网络建设，已经选取N个地点设置5G基站，编号固定为1到N，接下来需要各个基站之间使用光纤进行连接以确保基站能互联互通，不同基站之间假设光纤的成本各不相同，且有些节点之间已经存在光纤相连。

// 请你设计算法，计算出能联通这些基站的最小成本是多少。

// 注意：基站的联通具有传递性，比如基站A与基站B架设了光纤，基站B与基站C也架设了光纤，则基站A与基站C视为可以互相联通。

// 输入描述

// 第一行输入表示基站的个数N，其中：0 < N ≤ 20 第二行输入表示具备光纤直连条件的基站对的数目M，其中：0 < M < N * (N - 1) / 2 从第三行开始连续输入M行数据，格式为X Y Z P 其中：

// X，Y 表示基站的编号

// 0 < X ≤ N

// 0 < Y ≤ N

// X ≠ Y

// Z 表示在 X、Y之间架设光纤的成本

// 0 < Z < 100

// P 表示是否已存在光纤连接，0 表示未连接，1表示已连接

// 输出描述

// 如果给定条件，可以建设成功互联互通的5G网络，则输出最小的建设成本 如果给定条件，无法建设成功互联互通的5G网络，则输出 -1

const rl = require("readline").createInterface({
  input: process.stdin,
});
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const n = parseInt(inputs[0]); // 总基站
  const m = parseInt(inputs[1]); // 能连线的数目
  
  
}
solution();