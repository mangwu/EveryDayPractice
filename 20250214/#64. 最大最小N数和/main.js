// 给定一个数组，编写一个函数来计算它的最大N个数与最小N个数的和。你需要对数组进行去重。

// 说明：

// 数组中数字范围[0, 1000]
// 最大N个数与最小N个数不能有重叠，如有重叠，输入非法返回-1
// 输入非法返回-1
// 输入描述

// 第一行输入M， M标识数组大小 第二行输入M个数，标识数组内容 第三行输入N，N表达需要计算的最大、最小N个数

// 输出描述

// 输出最大N个数与最小N个数的和

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const m = parseInt(inputs[0]);
  const arr = inputs[1]
    .split(" ")
    .map((v) => parseInt(v))
    .sort((a, b) => a - b);
  const n = parseInt(inputs[2]);
  if (n * 2 > m) {
    console.log(-1);
    return;
  }
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    sum += arr[m - i - 1];
  }
  console.log(sum);
}
solution();
