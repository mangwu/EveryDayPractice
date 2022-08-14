/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-14 11:32:52                                                  *
 * @LastModifiedDate: 2022-08-14 11:57:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 如果一个正整数每一个数位都是 互不相同 的，我们称它是 特殊整数 。

// 给你一个 正 整数 n ，请你返回区间 [1, n] 之间特殊整数的数目。

const res = [9];
for (let i = 1; i < 9; i++) {
  res[i] = res[i] * (10 - i);
}
/**
 * @param {number} n
 * @return {number}
 */
var countSpecialNumbers = function (n) {
  // 一位数 C(1,9) = 9
  // 两位数 C(1,9)C(1,9) = 81
  // 三位数 C(1,9)C(1,9)C(1,8) = 81 * 8
  if (n <= 10) {
    return n;
  }
  const str = n.toString();
  let ans = 0;
  for (let i = 0; i < str.length - 1; i++) {
    ans += res[i];
  }
  // 
};
// 90 + C(2,1) * 8 + 4 
