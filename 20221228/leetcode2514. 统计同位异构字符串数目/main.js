/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-28 17:30:58                                                  *
 * @LastModifiedDate: 2022-12-28 17:41:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s ，它包含一个或者多个单词。单词之间用单个空格 ' ' 隔开。

// 如果字符串 t 中第 i 个单词是 s 中第 i 个单词的一个 排列 ，那么我们称字符串 t 是字符串 s 的同位异构字符串。

// 比方说，"acb dfe" 是 "abc def" 的同位异构字符串，但是 "def cab" 和 "adc bef" 不是。
// 请你返回 s 的同位异构字符串的数目，由于答案可能很大，请你将它对 109 + 7 取余 后返回。
const MOD = 10 ** 9 + 7;
/**
 * @param {string} s
 * @return {number}
 */
var countAnagrams = function (s) {
  // too => 3! / 2! = 3
  // hot => 3!
  // 关键在于搞定除法
  // 逆元
  // a / b (mod P)
  // b^-1(mod P) 费马小定理
  // = pow(b, p-2) mod P
  // 分子分母分开算，最后再相乘
  let a = 1,
    b = 1; // a是分子，b是分母
  for (const word of s.split(" ")) {
    const aphla = new Array(26).fill(0);
    const n = word.length;
    for (let i = 0; i < n; i++) {
      a = (a * (i + 1)) % MOD;
      const idx = word[i].charCodeAt() - "a".charCodeAt();
      aphla[idx]++;
      if (aphla[idx] > 1) b = (b * aphla[idx]) % MOD;
    }
  }
  return (a * Math.pow(b, MOD - 2)) % MOD;
};
