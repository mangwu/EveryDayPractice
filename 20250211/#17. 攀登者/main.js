/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-11 16:29:31                                                  *
 * @LastModifiedDate: 2025-02-11 16:47:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 攀登者喜欢寻找各种地图，并且尝试攀登到最高的山峰。 地图表示为一维数组，数组的索引代表水平位置，数组的元素代表相对海拔高度。其中数组元素0代表地面。

// 例如：[0,1,2,4,3,1,0,0,1,2,3,1,2,1,0]，代表如下图所示的地图，地图中有两个山脉位置分别为 1,2,3,4,5 和 8,9,10,11,12,13，最高峰高度分别为 4,3。最高峰位置分别为3,10。

// 一个山脉可能有多座山峰(高度大于相邻位置的高度，或在地图边界且高度大于相邻的高度)。 登山者想要知道一张地图中有多少座山峰。

// 输入描述 输入为一个整型数组，数组长度大于1。

// 输出描述 输出地图中山峰的数量。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const asyncFun = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await asyncFun())) {
    inputs.push(line);
  }
  const arr = inputs[0].split(",").map((v) => parseInt(v));
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    const left = arr[i - 1] || 0;
    const right = arr[i + 1] || 0;
    if (arr[i] > left && arr[i] > right) res++;
  }
  console.log(res);
}

solution()
