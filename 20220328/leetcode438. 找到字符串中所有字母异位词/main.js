/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-28 09:24:12                                                  *
 * @LastModifiedDate: 2022-03-28 15:58:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

// 异位词 指由相同字母重排列形成的字符串（包括相同的字符串）。

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  // 使用滑动窗口, 定义一个26位的窗口，保证只有其中的数组之和位p的长度
  const lens = s.length;
  const lenp = p.length;
  if (lenp > lens) {
    return [];
  }
  // 记录p中的字母个数的窗口
  const alpha = new Array(26).fill(0);
  // 记录s的滑动窗口
  const win = new Array(26).fill(0);
  const ans = [];
  for (let i = 0; i < lenp; i++) {
    alpha[p[i].charCodeAt() - "a".charCodeAt()]++;
    win[s[i].charCodeAt() - "a".charCodeAt()]++;
  }
  if (alpha.toString() == win.toString()) {
    ans.push(0);
  }
  for (let j = lenp; j < lens; j++) {
    // 遍历s的后序
    win[s[j].charCodeAt() - "a".charCodeAt()]++;
    win[s[j - lenp].charCodeAt() - "a".charCodeAt()]--;
    if (win.toString() == alpha.toString()) {
      ans.push(j - lenp + 1);
    }
  }
  return ans;
};

// 细节优化，对比时保存两组窗口，使用了toString()，可以只是要一个窗口，和整数变量，计算窗口中不为0的部分即可
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const lens = s.length;
  const lenp = p.length;
  if (lenp > lens) {
    return [];
  }
  // 记录p中的字母个数的窗口
  const alpha = new Array(26).fill(0);
  const ans = [];
  for (let i = 0; i < lenp; i++) {
    alpha[p[i].charCodeAt() - "a".charCodeAt()]--;
    alpha[s[i].charCodeAt() - "a".charCodeAt()]++;
  }
  // 记录差别
  let diff = 0;
  // 初始时的diff
  for (let i = 0; i < 26; i++) {
    if (alpha[i] !== 0) {
      diff++;
    }
  }
  // 判断是否完全相同
  if (diff == 0) {
    ans.push(0);
  }
  // 开始滑动
  for (let i = lenp; i < lens; i++) {
    // 减去窗口第一个字符
    if (alpha[s[i - lenp].charCodeAt() - "a".charCodeAt()] == 1) {
      // 刚好只有一个差别
      diff--;
    } else if (alpha[s[i - lenp].charCodeAt() - "a".charCodeAt()] == 0) {
      // 从无差别变为有差别
      diff++;
    }
    alpha[s[i - lenp].charCodeAt() - "a".charCodeAt()]--;

    // 加上新进入的字符
    if (alpha[s[i].charCodeAt() - "a".charCodeAt()] == -1) {
      // 刚好只有一个差别
      diff--;
    } else if (alpha[s[i].charCodeAt() - "a".charCodeAt()] == 0) {
      // 从无差别变为有差别
      diff++;
    }
    alpha[s[i].charCodeAt() - "a".charCodeAt()]++;
    if (diff == 0) {
      ans.push(i - lenp + 1);
    }
  }
  return ans;
};
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  // 继续优化，不预先统计diff
  // 遍历s，把它当作"消耗品"
  // 1. 当s中的字符在窗口中存在时，就消耗窗口中的数量
  // 2. 每次消耗都要判断是否消耗了p长度的字符
  const lens = s.length;
  const lenp = p.length;
  if (lenp > lens) {
    return [];
  }
  const alpha = new Array(26).fill(0);
  for (const ch of p) {
    alpha[ch.charCodeAt() - "a".charCodeAt()]++;
  }
  const ans = [];
  // 记录窗口的头合尾
  let low = 0;
  let high = 0;
  while (high < lens) {
    if (alpha[s[high].charCodeAt() - "a".charCodeAt()] > 0) {
      // 需要消耗的字符在窗口中存在,增加high继续遍历,消耗一个字符，并判断
      alpha[s[high++].charCodeAt() - "a".charCodeAt()]--;
      if (high - low == lenp) {
        ans.push(low);
      }
    } else {
      // 需要消耗的在窗口中不存在
      alpha[s[low++].charCodeAt() - "a".charCodeAt()]++;
    }
  }
  return ans;
};
