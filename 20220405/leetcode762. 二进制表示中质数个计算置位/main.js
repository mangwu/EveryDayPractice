/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-05 23:29:30                                                  *
 * @LastModifiedDate: 2022-04-05 23:39:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你两个整数 left 和 right ，在闭区间 [left, right] 范围内，统计并返回 计算置位位数为质数 的整数个数。

// 计算置位位数 就是二进制表示中 1 的个数。

// 例如， 21 的二进制表示 10101 有 3 个计算置位。

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  let res = 0;
  for (let i = left; i <= right; i++) {
    // 计算1的个数
    let num1 = 0;
    let n = i;
    while (n > 0) {
      if ((n & 1) == 1) {
        num1++;
      }
      n = n >> 1;
      console.log(n);
    }
    // 判断num是不是质数
    if (isPrime(num1)) {
      res++;
    }
  }
  return res;
};
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  const max = Math.sqrt(num);
  for (let i = 2; i <= max; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};
countPrimeSetBits(1,1)