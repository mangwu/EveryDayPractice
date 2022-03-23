/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-23 09:16:04                                                  *
 * @LastModifiedDate: 2022-03-23 22:20:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定整数 n 和 k，返回  [1, n] 中字典序第 k 小的数字。

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  // 字典排序按照0 - 9的顺序排列
  // 如 1 10 11 12 13 14 14 16 17 18 19 2 20 3 4 5 6 7 8 9 就是 n=20时的字典排序
  // 使用暴力解法的方式如下
  const arr = new Array(n)
    .fill(0)
    .map((_v, i) => i + 1)
    .sort();
  console.log(arr[k - 1]);
  return arr[k - 1];
};
// 因为题目中的n的范围为n^9，所以不能暴力计算

findKthNumber(200, 111);
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  if (n < 9) {
    return k;
  }
  // 根据n的大小得出开头是1的个数
  // 如 n < 10 时，1开头的只有1个即1
  // 10 <= n < 20 是，1 开头的有n - 8个 如 15 有 1 10 11 12 13 14 15 共 15 - 8 = 7个
  // 20 <= n < 100 时， 1 开头的始终有11 个 1 10 11 12 13 14 15 16 17 18 19
  // 100 <= n < 200 时， 1开头的有 11 + n - 99 个
  // 200 <= n < 1000 时，1开头的固定有 111 个1 + 10 + 100
  // 依次类推 2开头的也有 1 + 10 + 100 + .... 个只是n的范围不同时值不同
  // 计算n的位数
  let digits = n.toString().length;
  for (let i = 1; i <= 9; i++) {
    // 计算从1开头开始的每个数量
    const max = Math.pow(10, digits);
    const mid = Math.pow(10, digits - 1) * (i + 1);
    const min = Math.pow(10, digits - 1);
    let num = 0;
    if (n >= mid) {
      // 有固定的个数
    }
  }
};
findKthNumber(200, 111);
