/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-28 00:40:38                                                  *
 * @LastModifiedDate: 2022-10-28 01:27:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个整数数组 arr，找到 min(b) 的总和，其中 b 的范围为 arr 的每个（连续）子数组。

// 由于答案可能很大，因此 返回答案模 10^9 + 7 。
const MOD = 10 ** 9 + 7;
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  // 子数组数量为 1 + 2 + 3 + ... + n
  const n = arr.length;
  // 一个金字塔的形状
  // 动态规划 + 单调栈
  let stack = [[arr[0], 1]];
  let sum = arr[0];
  let ans = arr[0];
  let len = 1;
  for (let i = 1; i < n; i++) {
    while (stack.length && stack[stack.length - 1][0] > arr[i]) {
      let pop = stack.pop();
      sum -= pop[0] * pop[1];
      len -= pop[1];
    }
    sum += arr[i] * (i + 1 - len);
    console.log(sum);
    stack.push([arr[i], i + 1 - len]);
    ans += sum;
    ans %= MOD;
    len = i + 1;
  }
  return ans;
};

// 3 1 2 4
// 1 1 2
// 1 1
// 1

// 2 1 4 3
// 1 1 3
// 1 1
// 1

// 11 81 94 43 3
// 11 81 43 3
// 11 43 3
// 11 3
// 3
