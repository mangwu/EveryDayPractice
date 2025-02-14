/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 10:48:07                                                  *
 * @LastModifiedDate: 2025-02-14 11:11:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 服务之间交换的接口成功率作为服务调用关键质量特性，某个时间段内的接口失败率使用一个数组表示，数组中每个元素都是单位时间内失败率数值，数组中的数值为0~100的整数，给定一个数值(minAverageLost)表示某个时间段内平均失败率容忍值，即平均失败率小于等于minAverageLost，找出数组中最长时间段，如果未找到则直接返回NULL。

// 输入描述

// 输入有两行内容，第一行为{minAverageLost}，第二行为{数组}，数组元素通过空格(” “)分隔，minAverageLost及数组中元素取值范围为0~100的整数，数组元素的个数不会超过100个。

// 输出描述

// 找出平均值小于等于minAverageLost的最长时间段，输出数组下标对，格式{beginIndex}-{endIndx}(下标从0开始)，如果同时存在多个最长时间段，则输出多个下标对且下标对之间使用空格(” “)拼接，多个下标对按下标从小到大排序。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const minA = parseInt(inputs[0]);
  const arr = inputs[1].split(" ").map((v) => parseInt(v));
  const n = arr.length;
  let sum = 0;
  let right = 0;
  let res = [];
  let maxLen = 0;
  for (let i = 0; i < n; i++) {
    // left right-1
    while (
      right < n &&
      (sum <= minA || sum + arr[right] <= minA * (right - i + 1))
    ) {
      sum += arr[right++];
    }
    if (right - 1 >= 0) {
      const curSum = sum;
      const curArr = [i, right - 1];
      if (curSum <= minA * (right - i)) {
        if (right - i > maxLen) {
          res = [curArr];
          maxLen = right - i;
        } else if (right - i >= maxLen && right - i > 0) {
          res.push(curArr);
        }
      }
    }
    sum -= arr[i];
  }
  console.log(res.map((v) => v.join("-")).join(" "));
}
solution();
