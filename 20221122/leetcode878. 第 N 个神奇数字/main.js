/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-22 09:06:31                                                  *
 * @LastModifiedDate: 2022-11-22 09:28:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 一个正整数如果能被 a 或 b 整除，那么它是神奇的。

// 给定三个整数 n , a , b ，返回第 n 个神奇的数字。因为答案可能很大，所以返回答案 对 109 + 7 取模 后的值。
const MOD = 10 ** 9 + 7;
/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var nthMagicalNumber = function (n, a, b) {
  if (a > b) {
    return nthMagicalNumber(n, b, a);
  }
  if (b % a == 0) {
    return (a * n) % MOD;
  }
  // 求出a,b的最小公倍数以及中间的二者的倍数
  const res = commonMultiple(a, b);
  console.log(res);
  const len = res.length;
  let last = res[len - 1];
  const k = Math.floor((n - 1) / len);
  const rest = (n - 1) % len;
  return (last * k + res[rest]) % MOD;
};

var commonMultiple = function (a, b) {
  const ans = [];
  let proda = a;
  let prodb = b;
  while (proda !== prodb) {
    if (proda < prodb) {
      ans.push(proda);
      proda += a;
    } else if (prodb < proda) {
      ans.push(prodb);
      prodb += b;
    }
  }
  ans.push(proda);
  return ans;
};
// a = 2 b = 3;

// 12 16  => 48
// 12 16 24 32 36 48
// 60 64 72 80 84 96
