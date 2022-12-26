/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-26 08:44:12                                                  *
 * @LastModifiedDate: 2022-12-26 08:49:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s ，返回 s 中 同构子字符串 的数目。由于答案可能很大，只需返回对 109 + 7 取余 后的结果。

// 同构字符串 的定义为：如果一个字符串中的所有字符都相同，那么该字符串就是同构字符串。

// 子字符串 是字符串中的一个连续字符序列。
const MOD = Math.pow(10, 9) + 7;
/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function (s) {
  let pre = "";
  let ans = 0;
  let cur = 1;
  for (const ch of s) {
    if (pre === ch) {
      cur++;
      ans += cur;
    } else {
      cur = 1;
      ans++;
    }
    pre = ch;
  }
  return ans % MOD;
};
