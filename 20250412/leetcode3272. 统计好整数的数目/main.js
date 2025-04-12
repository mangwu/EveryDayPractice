/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-04-12 23:13:56                                                  *
 * @LastModifiedDate: 2025-04-13 01:17:26                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个 正 整数 n 和 k 。

// 如果一个整数 x 满足以下条件，那么它被称为 k 回文 整数 。

// x 是一个 回文整数 。
// x 能被 k 整除。
// 如果一个整数的数位重新排列后能得到一个 k 回文整数 ，那么我们称这个整数为 好 整数。比方说，k = 2 ，那么 2020 可以重新排列得到 2002 ，2002 是一个 k 回文串，所以 2020 是一个好整数。而 1010 无法重新排列数位得到一个 k 回文整数。

// 请你返回 n 个数位的整数中，有多少个 好 整数。

// 注意 ，任何整数在重新排列数位之前或者之后 都不能 有前导 0 。比方说 1010 不能重排列得到 101 。

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var countGoodIntegers = function (n, k) {
  // 1 => 都可以
  // 2 => 尾数是偶数
  // 3 => 数位和整除3
  // 4 =>
  // i表示第i位，
  const dfs = (i, sum) => {
    if (i === n) return sum % k === 0 ? 1 : 0;
    let low = i > 0 ? 1 : 0;
    let high = 9;
    let res = 0;
    for (let d = low; d <= high; d++) {
      res += dfs(i, sum + d);
    }
    return res;
  };
};

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var countGoodIntegers = function (n, k) {
  // 先枚举所有回文整数,因为第一位不能为0，所以要减去不为0的情况
  // 如果n为偶数，那么会有10 ^ (n /2) - 10 ^ (n / 2 - 1)个回文整数，
  // 如果n为奇数，中间数字有10种可能=> 10 * (10 ^ (n - 1 / 2) - 10 ^ (n - 2 / 2))个
  //  既10^((n+1)/2) - 10^((n-1)/2)个

  // 记录能整除k的回文整数，但是需要进行去重操作，
  // 例如n=4，4224和2442都是满足条件的回文整数，但是只记录一次2244，用于计算好整数
  // 因为2244的任何重新排列在经过排列后都可以变成回文整数满足题意
  // 实际上我们记录的是能够重新排列成k回文整数的一种数字种类情况
  // 将每种不同数字种类情况重新排列的组合数相加，就是好整数的个数

  const set = new Set(); // 记录排序过的字符串，如2244
  const start = Math.pow(10, Math.floor((n - 1) / 2)); // 从10...0开始计数前半段数位
  const skip = n % 2; // 前半段是否包含中间值（n是奇数的情况）
  for (let i = start; i < start * 10; i++) {
    let str = i.toString(); // 前半段的字符串
    str += str.split("").reverse().slice(skip).join("");
    const num = parseInt(str);
    if (num % k === 0) {
      // 是否是k回文整数
      set.add(str.split("").sort().join(""));
    }
  }
  // 计算每种情况的排列方式
  // 例如2244有如下排列
  // 2244,2424,2442,4224,4242,4422
  // 如果按照排列组合的计算公式应该是:4!/2!/2! => 24 / 2 / 2 = 6
  // 即4种排列，数字2有2个，有2种重复排列,数字4有两个，有两种重复排列

  // 又例如44455有如下排列
  // 44455,44545,44554,45445,45454,45544,54445,54454,54544,55444
  // => 5! / 3! / 2! =  120 / 6 / 2 = 10

  // 但是有一个特殊的数字不适用这种情况，就是0不能作为开头的数字
  // 有n个数字，包含m个0，那么第一个数字不是1的情况有n - m种，剩下的数字进行排列
  // 共有(n - m) * (n-1)!种情况，然后去除相同数字的重复排列
  // 例如0022有如下排列
  // 2002,2020,2200
  // => (4 - 2) * 3! / 2! / 2! = 12 / 2 / 2 = 3

  // 在计算排列的过程中我们会多次用到阶乘，所以可以提前计算
  const fac = new Array(n + 1).fill(1);
  for (let i = 1; i <= n; i++) {
    fac[i] = fac[i - 1] * i;
  }
  let res = 0;
  for (const item of set) {
    const cnts = new Array(10).fill(0);
    // 计算每个数字的个数
    for (const ch of item) {
      cnts[ch]++;
    }
    let tot = (n - cnts[0]) * fac[n - 1]; // 当前排列个数
    // if (cnts[0]) tot = (n - cnts[0]) * fac[n - 1]; // 包含0
    // else tot = fac[n];
    for (const x of cnts) tot = tot / fac[x];
    res += tot;
  }
  return res;
};
