/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-04-13 23:39:48                                                  *
 * @LastModifiedDate: 2025-04-14 00:01:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number} n
 * @return {number}
 */
var countGoodNumbers = function (n) {
  const mod = 10n ** 9n + 7n;
  // 偶数位有5种情况：0 2 4 6 8（可以包含前导0）
  // 奇数位有4种情况: 2 3 5 7
  // n 为偶数，有n / 2个偶数位，n / 2个奇数位
  // n 为奇数，有(n + 1) / 2个偶数位，(n - 1) / 2个奇数位
  // 计算大数的幂可以用快速幂的方式
  const quickMul = (x, y) => {
    let res = 1n;
    let mul = x;
    while (y > 0) {
      if (y % 2n === 1n) {
        res = (res * mul) % mod;
      }
      mul = (mul * mul) % mod;
      y = y / 2n;
    }
    return res;
  };
  let even = BigInt(Math.floor((n + 1) / 2));
  let odd = BigInt(Math.floor(n / 2));
  return Number((quickMul(5n, even) * quickMul(4n, odd)) % mod);
};
