/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-11-22 22:50:37                                                  *
 * @LastModifiedDate: 2024-11-22 23:18:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个 正整数 l 和 r。对于任何数字 x，x 的所有正因数（除了 x 本身）被称为 x 的 真因数。

// 如果一个数字恰好仅有两个 真因数，则称该数字为 特殊数字。例如：

// 数字 4 是 特殊数字，因为它的真因数为 1 和 2。
// 数字 6 不是 特殊数字，因为它的真因数为 1、2 和 3。
// 返回区间 [l, r] 内 不是 特殊数字 的数字数量。

/**
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var nonSpecialCount = function (l, r) {
  const n = Math.floor(Math.sqrt(r));
  const primes = countPrimes(n + 1);
  let res = r - l + 1;
  console.log(primes);
  for (const prime of primes) {
    const kk = prime * prime;
    if (kk >= l && kk <= r) res--;
  }
  return res;
};

// 埃式筛法获取 1 - n之间的所有质数
var countPrimes = function (n) {
  const isPrimes = new Array(n).fill(1);
  const primes = [];
  for (let i = 2; i < n; i++) {
    if (isPrimes[i]) {
      primes.push(i);
    }
    // 将所有质数的当前倍数i设置为非质数
    for (let j = 0; j < primes.length && primes[j] * i < n; j++) {
      isPrimes[primes[j] * i] = 0;
      // a * primes[j] = i 成立时仍然继续遍历，那么
      // a * primes[j] * primes[j+1] 会被继续遍历
      // a * prime[j + 1]会遍历到primes[j]，属于无效记录
      if (i % primes[j] === 0) break;
    }
  }
  return primes;
};
