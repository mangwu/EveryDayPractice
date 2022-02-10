/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-10 08:52:30                                                  *
 * @LastModifiedDate: 2022-02-10 11:17:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n ，请你返回所有 0 到 1 之间（不包括 0 和 1）满足分母小于等于  n 的 最简 分数 。分数可以以 任意 顺序返回。

// 返回形式分数，如当 n = 4 时，["1/2", "1/3","1/4","2/3","3/4"]

/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
  // 由分子确定分母
  // 因为分母小于等于n
  // 所以分子小于n
  // 分母是一定大于n的
  // 最简分子，那么分母一定不能是分子的倍数，且分母和分子不含有公约数
  // 对与1,2,3,5，7等这类数，它们是质数，只要保证分母大于它且不是它们的倍数即可
  // 对于4,6,8,9,10,12这类数，它们不是质数，需要保证分母大于它且不是它们的因数的倍数
  // 或者说，分母和当前的分子的最大公约数为1
  const ans = [];
  for (let i = 1; i < n; i++) {
    // 获取i的去1因数
    const set = generateFactor(i);
    for (let j = i + 1; j <= n; j++) {
      // 判断当前的i和j是否存在公约数
      if (!hasSame(set, j)) {
        // 不存在就添加到结果中
        ans.push(i + "/" + "j");
      }
    }
  }
};

// 生成因数
const generateFactor = (num) => {
  const set = new Set();
  const k = Math.floor(Math.pow(num, 0.5));
  for (let i = 1; i <= k; i++) {
    const dividor = num / i;
    if (dividor === Math.floor(dividor)) {
      set.add(i);
      set.add(dividor);
    }
  }
  // 删除1
  set.delete(1);
  return set;
};

// 是否有公约数
const hasSame = (set, num) => {
  const k = Math.floor(Math.pow(num, 0.5));
  for (let i = 1; i <= k; i++) {
    const dividor = num / i;
    if (dividor === Math.floor(dividor)) {
      if (set.has(i) || set.has(dividor)) {
        return true;
      }
    }
  }
  return false;
};

/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions2 = function (n) {
  // 欧几里得解法
  const ans = [];
  // 分子
  for (let i = 1; i < n; i++) {
    // 分母
    for (let j = i + 1; j <= n; j++) {
      // 最大公约数为1，即可添加到答案中
      if (gcd(j, i) === 1) {
        ans.push(i + "/" + j);
      }
    }
  }
  return ans;
};

const gcd = (a, b) => {
  return b == 0 ? a : gcd(b, a % b);
};

/**
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions3 = function (n) {
  // 更相减损法
  const ans = [];
  // 分子
  for (let i = 1; i < n; i++) {
    // 分母
    for (let j = i + 1; j <= n; j++) {
      // 最大公约数为1，即可添加到答案中
      if (gcd2(j, i) === 1) {
        ans.push(i + "/" + j);
      }
    }
  }
  return ans;
};

const gcd2 = (a, b) => {
  while (true) {
    if (a > b) {
      a -= b;
    } else if (a < b) {
      b -= a;
    } else {
      return a;
    }
  }
};
