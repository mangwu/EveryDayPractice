/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-18 10:37:46                                                  *
 * @LastModifiedDate: 2022-12-18 10:56:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数 n 。

// 请你将 n 的值替换为 n 的 质因数 之和，重复这一过程。

// 注意，如果 n 能够被某个质因数多次整除，则在求和时，应当包含这个质因数同样次数。
// 返回 n 可以取到的最小值。

/**
 * @param {number} n
 * @return {number}
 */
var smallestValue = function (n) {
  while (!isFactor(n)) {
    let cur = getFactorsSum(n);
    if (cur === n) {
      return cur;
    }
    n = cur;
  }
  return n;
};

// 判断是否是质数
var isFactor = function (n) {
  if (n <= 3) {
    return true;
  }
  const sqrt = Math.sqrt(n);
  for (let i = 2; i <= sqrt; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
const Factors = [];
for (let i = 2; i < 100000; i++) {
  if (isFactor(i)) {
    Factors.push(i);
  }
}
// 获取质因数之和
var getFactorsSum = function (n) {
  let res = 0;
  let k = 0;
  while (n !== 1) {
    while (n % Factors[k] === 0) {
      n /= Factors[k];
      res += Factors[k];
    }
    k++;
  }
  return res;
};
