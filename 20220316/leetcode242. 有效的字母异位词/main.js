/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-16 19:59:05                                                  *
 * @LastModifiedDate: 2022-03-16 20:02:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 二者的长度一定相等
  if (s.length !== t.length) {
    return false;
  }
  // 构造两个保存字母的数组
  const alph1 = new Array(26).fill(0);
  for (const ch of s) {
    alph1[ch.charCodeAt() - "a".charCodeAt()]++;
  }
  const alph2 = new Array(26).fill(0);
  for (const ch of t) {
    alph2[ch.charCodeAt() - "a".charCodeAt()]++;
  }
  return alph1.toString() == alph2.toString();
};
