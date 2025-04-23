/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-04-23 21:52:46                                                  *
 * @LastModifiedDate: 2025-04-23 22:00:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n 。请你先求出从 1 到 n 的每个整数 10 进制表示下的数位和（每一位上的数字相加），然后把数位和相等的数字放到同一个组中。

// 请你统计每个组中的数字数目，并返回数字数目并列最多的组有多少个。
/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  const hash = new Map();
  let res = 0;
  let max = 0;
  for (let i = 1; i <= n; i++) {
    const key = computedDigitNumSum(i);
    hash.set(key, (hash.get(key) || 0) + 1);
    if (hash.get(key) > max) {
      res = 1;
      max = hash.get(key);
    } else if (hash.get(key) == max) {
      res++;
    }
  }
  return res;
};

function computedDigitNumSum(num) {
  let res = 0;
  while (num) {
    res += num % 10;
    num = Math.floor(num / 10);
  }
  return res;
}
