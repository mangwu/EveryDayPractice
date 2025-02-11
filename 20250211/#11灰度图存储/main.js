/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-11 14:22:17                                                  *
 * @LastModifiedDate: 2025-02-11 14:38:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 黑白图像常采用灰度图的方式存储，即图像的每个像素填充一个灰色阶段值，256阶灰图是一个灰阶值取值范围为 0~255 的灰阶矩阵，0表示全黑，255表示全白，范围内的其他值表示不同的灰度。

// 但在计算机中实际存储时，会使用压缩算法，其中一个种压缩格式描述如如下： 3 3 1 3 2 3 3 3

// 所有的数值以空格分隔； 前两个数分别表示矩阵的行数和列数； 从第三个数开始，每两个数一组，每组第一个数是灰阶值，第二个数表示该灰阶值从左到右，从上到下（可理解为二维数组按行存储在一维矩阵中）的连续像素个数。比如题目所述的例子， “255 34” 表示有连续 34 个像素的灰阶值是 255。 如此，图像软件在打开此格式灰度图的时候，就可以根据此算法从压缩数据恢复出原始灰度图矩阵。

// 请从输入的压缩数恢复灰度图原始矩阵，并返回指定像素的灰阶值。

// 输入描述 输入包行两行： 第一行是灰度图压缩数据 第二行表示一个像素位置的行号和列号，如 0 0 表示左上角像素

// 3 3 1 3 2 3 3 3 1 1

// 输出描述 输出数据表示的灰阶矩阵的指定像素的灰阶值： 2

// 备注 系保证输入的压缩数据是合法有效的，不会出现数据起界、数值不合法等无法恢复的场景 系统保证输入的像素坐标是合法的，不会出现不在矩阵中的像素 矩阵的行和列数范图为:(0,100] 灰阶值取值范图:[0,255]

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const asyncFun = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await asyncFun())) {
    inputs.push(line);
  }
  const data = inputs[0].split(" ").map((v) => parseInt(v));
  const m = data[0]; // 行数
  const n = data[1]; // 列数
  const target = inputs[1].split(" "); // 目标位置
  // 构造矩阵
  const matrix = new Array(m).fill(0).map((v) => new Array(n).fill(0));
  let idx = 0; // 抽象一维数组的索引
  for (let i = 2; i < data.length; i += 2) {
    const val = parseInt(data[i]);
    let num = parseInt(data[i + 1]);
    while (num) {
      const x = Math.floor(idx / n);
      const y = idx % n;
      matrix[x][y] = val;
      num--;
      idx++;
    }
  }
  console.log(matrix[target[0]][target[1]]);
}
solution();
