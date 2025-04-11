/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-04-11 22:58:01                                                  *
 * @LastModifiedDate: 2025-04-11 23:19:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个正整数 low 和 high 。

// 对于一个由 2 * n 位数字组成的整数 x ，如果其前 n 位数字之和与后 n 位数字之和相等，则认为这个数字是一个对称整数。

// 返回在 [low, high] 范围内的 对称整数的数目 。

/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
  let res = 0;
  for (let i = low; i <= high; i++) {
    if (isSym(i)) res++;
  }
  return res;
};

function isSym(num) {
  const str = num.toString();
  const n = str.length;
  if (n % 2 === 1) return false;
  let left = 0;
  let right = 0;
  for (let i = 0; i < n / 2; i++) {
    left += parseInt(str[i]);
    right += parseInt(str[n - i - 1]);
  }
  return left === right;
}
