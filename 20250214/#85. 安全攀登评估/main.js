/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 20:43:31                                                  *
 * @LastModifiedDate: 2025-02-14 23:01:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 攀登者喜欢寻找各种地图，并且尝试攀登到最高的山峰。

// 地图表示为一维数组，数组的索引代表水平位置，数组的元素代表相对海拔高度。其中数组元素0代表地面。 例如：[0,1,2,4,3,1,0,0,1,2,3,1,2,1,0]，代表如下图所示的地图，地图中有两个山脉位置分别为 1,2,3,4,5 和 8,9,10,11,12,13，最高峰高度分别为 4,3。最高峰位置分别为3,10。

// 一个山脉可能有多座山峰(高度大于相邻位置的高度，或在地图边界且高度大于相邻的高度)。

// 登山时会消耗登山者的体力(整数)，

// 上山时，消耗相邻高度差两倍的体力
// 下山时，消耗相邻高度差一倍的体力
// 平地不消耗体力
// 登山者体力消耗到零时会有生命危险。

// 例如，上图所示的山峰：

// 从索引0，走到索引1，高度差为1，需要消耗 2 * 1 = 2 的体力，
// 从索引2，走到索引3，高度差为2，需要消耗 2 * 2 = 4 的体力。
// 从索引3，走到索引4，高度差为1，需要消耗 1 * 1 = 1 的体力。
// 攀登者想要评估一张地图内有多少座山峰可以进行攀登，且可以安全返回到地面，且无生命危险。

// 例如上图中的数组，有3个不同的山峰，登上位置在3的山可以从位置0或者位置6开始，从位置0登到山顶需要消耗体力 1 * 2 + 1 * 2 + 2 * 2 = 8，从山顶返回到地面0需要消耗体力 2 * 1 + 1 * 1 + 1 * 1 = 4 的体力，按照登山路线 0 → 3 → 0 需要消耗体力12。攀登者至少需要12以上的体力（大于12）才能安全返回。

// 输入描述

// 第一行输入为地图一维数组 第二行输入为攀登者的体力

// 输出描述

// 确保可以安全返回地面，且无生命危险的情况下，地图中有多少山峰可以攀登。

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
  const arr = inputs[0].split(",").map((v) => parseInt(v));
  const maxNum = parseInt(inputs[1]);
  // 记录山峰的位置
  const n = arr.length;
  const getCurNum = (idx) => {
    const leftZero = arr.lastIndexOf(0, idx);
    const rightZero = arr.indexOf(0, idx);
    let res = Infinity;
    let leftUp = 0;
    let leftDown = 0;
    if (leftZero !== -1) {
      // 从左边0出发的登山耗费体力
      for (let i = leftZero + 1; i <= idx; i++) {
        const diff = Math.abs(arr[i] - arr[i - 1]);
        if (arr[i] >= arr[i - 1]) {
          leftUp += diff * 2;
          leftDown += diff;
        } else {
          leftUp += diff;
          leftDown += diff * 2;
        }
      }
      res = Math.min(res, leftUp + leftDown);
    }
    let rightUp = 0;
    let rightDown = 0;
    if (rightZero !== -1) {
      for (let i = rightZero - 1; i >= idx; i--) {
        const diff = Math.abs(arr[i] - arr[i + 1]);
        if (arr[i] >= arr[i + 1]) {
          rightUp += diff * 2;
          rightDown += diff;
        } else {
          rightUp += diff;
          rightDown += diff * 2;
        }
      }
      res = Math.min(res, rightDown + rightUp);
    }
    if (leftZero !== -1 && rightZero !== -1) {
      res = Math.min(res, leftDown + rightUp, leftUp + rightDown);
    }
    return res;
  };
  let res = 0;
  for (let i = 0; i < n; i++) {
    let left = i - 1 >= 0 ? arr[i - 1] : 0;
    let right = i + 1 < n ? arr[i + 1] : 0;
    if (arr[i] > left && arr[i] > right) {
      // 是山峰
      const curNum = getCurNum(i);
      if (curNum <= maxNum) res++;
    }
  }
  console.log(res);
}
solution();
