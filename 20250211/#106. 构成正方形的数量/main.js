// 题目描述
// 输入 N 个互不相同的二维整数坐标，求这 N 个坐标可以构成的正方形数量。（内积为零的的两个向量垂直）

// 输入描述

// 第一行输入为 N，N 代表坐标数量，N 为正整数

// N ≤ 100

// 之后的 N 行输入为坐标 x y 以空格分隔，x，y 为整数

// -10 ≤ x, y ≤ 10

// 输出描述

// 输出可以构成的正方形数量

// 输入

// 4 0 0 1 2 3 1 2 -1

// 输出

// 1

// 此4点可构成正方形

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const asyncFunc = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await asyncFunc())) {
    inputs.push(line);
  }
  const n = parseInt(inputs[0]);
  const arr = [];
  const set = new Set();
  for (let i = 1; i <= n; i++) {
    const point = inputs[i].split(" ").map((v) => parseInt(v));
    arr.push(point);
    set.add(point.join(","));
  }
  let res = 0;
  // 每一对点x1,y1, x2, y2，找到剩下的两个点，有两种方式:
  // x3 = x1 - (y1 - y2)
  // y3 = y1 + (x1 - x2)
  // x4 = x2 - (y1 - y2)
  // y4 = y2 + (x1 - x2)

  // x5 = x1 + (y1 - y2)
  // y5 = y1 - (x1 - x2)
  // x6 = x2 + (y1 - y2)
  // y6 = y2 - (x1 - x2)
  for (let i = 0; i < n; i++) {
    const [x1, y1] = arr[i];
    for (let j = i + 1; j < n; j++) {
      const [x2, y2] = arr[j];
      const xDif = x1 - x2;
      const yDif = y1 - y2;
      const [x3, y3, x4, y4] = [x1 - yDif, y1 + xDif, x2 - yDif, y2 + xDif];
      const [x5, y5, x6, y6] = [x1 + yDif, y1 - xDif, x2 + yDif, y2 - xDif];
      if (set.has(x3 + "," + y3) && set.has(x4 + "," + y4)) {
        console.log([x1, y1], [x2, y2], [x3, y3], [x4, y4]);
        res++;
      }
      if (set.has(x5 + "," + y5) && set.has(x6 + "," + y6)) {
        console.log([x1, y1], [x2, y2], [x5, y5], [x6, y6]);
        res++;
      }
    }
  }
  console.log(res / 4);
}
solution();
