/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-16 00:53:55                                                  *
 * @LastModifiedDate: 2025-02-16 01:22:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 现在有一队小朋友，他们高矮不同，，我们以正整数数组表示这一队小朋友的身高，如数组{5,3,1,2,3}。
//  我们现在希望小朋友排队，以“高”“矮”“高”“矮”顺序排列，每一个“高”位置的小朋友要比相邻的位置高或者相等；
//  每一个“矮”位置的小朋友要比相邻的位置矮或者相等；要求小朋友们移动的距离和最小，第一个从“高”位开始排，
//  输出最小移动距离即可。 移动距离的定义如下所示：第二位小朋友移到第三位小朋友后面，移动距离为1，
// 若移动到第四位小朋友后面，移动距离为2。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const arr = inputs[0].split(" ").map((v) => parseInt(v));
  if (arr.some((v) => isNaN(v))) {
    console.log([]);
    return;
  }
  // 找到下一个或上一个更大的元素
  const swap = (a, b) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  };
  // 和相邻的更大或者更小的元素进行交换
  const n = arr.length;
  for (let i = 1; i < n - 1; i++) {
    if (i % 2 === 1) {
      // 矮的
      if (arr[i] <= arr[i - 1] && arr[i] <= arr[i + 1]) continue;
      // 和更小的交换
      arr[i + 1] <= arr[i - 1] ? swap(i, i + 1) : swap(i, i - 1);
    } else {
      // 高的
      if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1]) continue;
      // 和更高的交换
      arr[i + 1] >= arr[i - 1] ? swap(i, i + 1) : swap(i, i - 1);
    }
  }
  console.log(arr.join(" "));
}
solution();

// 1 2 3 4 5
// 2 1 3 4
