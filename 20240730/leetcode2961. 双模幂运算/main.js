/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-07-30 09:05:23                                                  *
 * @LastModifiedDate: 2024-07-30 10:02:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的二维数组 variables ，其中 variables[i] = [ai, bi, ci, mi]，以及一个整数 target 。

// 如果满足以下公式，则下标 i 是 好下标：

// 0 <= i < variables.length
// ((aibi % 10)ci) % mi == target
// 返回一个由 好下标 组成的数组，顺序不限 。

/**
 * @param {number[][]} variables
 * @param {number} target
 * @return {number[]}
 */
var getGoodIndices = function (variables, target) {
  const ans = [];
  const n = variables.length;
  for (let i = 0; i < n; i++) {
    const [a, b, c, m] = variables[i];
    if (Math.pow(Math.pow(a, b) % 10, c) % m === target) {
      ans.push(i);
    }
  }
  return ans;
};

/**
 * @param {number[][]} variables
 * @param {number} target
 * @return {number[]}
 */
var getGoodIndices = function (variables, target) {
  const ans = [];
  const n = variables.length;
  for (let i = 0; i < n; i++) {
    const [a, b, c, m] = variables[i];
    const tail = getEndTail(a, b);
    if (BigInt(tail) ** BigInt(c) % BigInt(m) === BigInt(target)) {
      ans.push(i);
    }
  }
  return ans;
};
1;
const hash = new Map([
  [0, [0]],
  [1, [1]],
  [2, [2, 4, 8, 6]],
  [3, [3, 9, 7, 1]],
  [4, [4, 6]],
  [5, [5]],
  [6, [6]],
  [7, [7, 9, 3, 1]],
  [8, [8, 4, 2, 6]],
  [9, [9, 1]],
]);

function getEndTail(a, b) {
  const lastNum = a % 10;
  const arr = hash.get(lastNum);
  const len = arr.length;
  b--;
  b %= len;
  return arr[b];
}
