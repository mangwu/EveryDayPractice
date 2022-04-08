/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-08 14:16:08                                                  *
 * @LastModifiedDate: 2022-04-08 14:42:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个字符串 s 和 t ，它们只包含小写字母。

// 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。

// 请找出在 t 中被添加的字母。

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  // 如果使用hash表 重复字符可能会导致拿不到添加的字母，如 'a' 与'aa'
  // 使用字母表即可
  const alpha = new Array(26).fill(0);
  alpha[t[0].charCodeAt() - "a".charCodeAt()] = -1;
  const len = s.length;
  for (let i = 0; i < len; i++) {
    alpha[s[i].charCodeAt() - "a".charCodeAt()]++;
    alpha[t[i + 1].charCodeAt() - "a".charCodeAt()]--;
  }
  for (let i = 0; i < 26; i++) {
    if (alpha[i]) {
      return String.fromCharCode("a".charCodeAt() + i);
    }
  }
};

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  // 不占用额外空间的方法 => 求ASCII表的和然后相减得到哪一个额外的字符的code
  let sum = 0;
  sum += t[0].charCodeAt();
  const len = s.length;
  for (let i = 0; i < len; i++) {
    sum += t[i + 1].charCodeAt();
    sum -= s[i].charCodeAt();
  }
  return String.fromCharCode(sum);
};

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  // 异或运算法，额外添加的哪一个字符个数一定为奇数
  // 奇数个符号异或运算为其本身，0与任何符号异或都是改符号，而偶数个符合异或都是0
  let ans = 0;
  const len = s.length;
  ans ^= t[len].charCodeAt();
  for (let i = 0; i < len; i++) {
    ans ^= s[i].charCodeAt();
    ans ^= t[i].charCodeAt();
  }
  return String.fromCharCode(ans);
};
