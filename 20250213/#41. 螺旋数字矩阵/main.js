/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-13 13:30:34                                                  *
 * @LastModifiedDate: 2025-02-13 13:52:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 疫情期间，小明隔离在家，百无聊赖，在纸上写数字玩。他发明了一种写法：

// 给出数字个数 n （0 < n ≤ 999）和行数 m（0 < m ≤ 999），从左上角的 1 开始，按照顺时针螺旋向内写方式，依次写出2,3,....,n，最终形成一个 m 行矩阵。

// 小明对这个矩阵有些要求：

// 每行数字的个数一样多 列的数量尽可能少 填充数字时优先填充外部 数字不够时，使用单个 * 号占位 输入描述 两个整数，空格隔开，依次表示 n、m

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  // n:要写的数字 m：行数
  const [n, m] = inputs[0].split(" ").map((v) => parseInt(v));
  const k = Math.ceil(n / m); // 列数
  let step = 1; // 当前填入的值
  let x = 0;
  let y = 0; // 当前位置
  const matrix = new Array(m).fill(0).map((v) => new Array(k).fill("*")); // 矩阵
  while (step <= n) {
    // ->
    while (y < k && matrix[x][y] === "*" && step <= n) matrix[x][y++] = step++;
    // right完成，整理x，y
    x++;
    y--;
    // ↓
    while (x < m && matrix[x][y] === "*" && step <= n) matrix[x++][y] = step++;
    // bottom完成，整理x,y
    x--;
    y--;
    // <-
    while (y >= 0 && matrix[x][y] === "*" && step <= n) matrix[x][y--] = step++;
    // left完成，整理x,y
    x--;
    y++;
    // ↑
    while (x >= 0 && matrix[x][y] === "*" && step <= n) matrix[x--][y] = step++;
    // top完成，整理x,y
    x++;
    y++;
  }
  for (const item of matrix) {
    console.log(item.join(" "));
  }
}
solution();
