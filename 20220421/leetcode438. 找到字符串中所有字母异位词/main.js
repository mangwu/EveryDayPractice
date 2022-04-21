/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-21 16:36:21                                                  *
 * @LastModifiedDate: 2022-04-21 16:55:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。
// 不考虑答案输出的顺序。

// 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  // 因为异位词的长度是固定的，所以可以使用滑动窗口进行判断
  const lens = s.length;
  const lenp = p.length;
  if (lenp > lens) {
    return [];
  }
  const ans = [];
  const primitiveAlpha = new Array(26).fill(0)
  for (const ch of p) {
    primitiveAlpha[ch.charCodeAt() - "a".charCodeAt()]++;
  }
  const win = new Array(26).fill(0)
  for (let i = 0; i < lenp; i++) {
    win[s[i].charCodeAt() - "a".charCodeAt()]++;
  }
  if (win.toString() == primitiveAlpha.toString()) {
    ans.push(0);
  }
  for (let i = lenp; i < lens; i++) {
    win[s[i].charCodeAt() - "a".charCodeAt()]++;
    win[s[i - lenp].charCodeAt() - "a".charCodeAt()]--;
    if (win.toString() == primitiveAlpha.toString()) {
      ans.push(i - lenp + 1);
    }
  }
  return ans;
};
