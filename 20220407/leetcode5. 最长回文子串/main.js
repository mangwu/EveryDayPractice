/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-07 10:07:22                                                  *
 * @LastModifiedDate: 2022-04-07 11:19:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s，找到 s 中最长的回文子串

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 马拉车算法
  // 预处理
  const lens = s.length;
  // 预处理字符数组
  const strArr = ["#"];
  for (let i = 0; i < lens; i++) {
    strArr.push(s[i]);
    strArr.push("#");
  }
  // 声明当前回文子串能到达的右边界和它的中心
  let mid = 0,
    right = 0;
  // 声明最长的回文子串的中心和长度
  let maxLen = 0,
    maxLenMid = 0;
  // 声明保存每个字符中心的回文索引和长度
  const child = [];
  // 遍历处理过的字符串，以每个字符中心进行扩展
  for (let i = 0; i < strArr.length; i++) {
    // 第i个字符是否在有边界内，如果在，就选择对称字符的回文长度或者
    // 不在右边界内就赋值1
    child[i] = i < right ? Math.min(child[2 * mid - i], right - i) : 1;
    // 进行扩展，对于完全在右边界的中心字符串索引，此扩展不会被执行一次
    while (
      i - child[i] >= 0 &&
      i + child[i] < strArr.length &&
      strArr[i + child[i]] == strArr[i - child[i]]
    ) {
      child[i]++;
    }
    // 更新右边界
    if (right < child[i] + i) {
      mid = i;
      right = child[i] + i;
    }
    // 是否更新最长回文子串
    if (maxLen < child[i]) {
      maxLen = child[i];
      maxLenMid = i;
    }
  }
  return s.substring(
    (maxLenMid + 1 - maxLen) / 2,
    (maxLenMid - 1 + maxLen) / 2
  );
};

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // 马拉车算法
  // 预处理
  const lens = s.length;
  // 预处理字符数组
  let str = "#";
  for (let i = 0; i < lens; i++) {
    str = str + s[i] + "#";
  }
  // 声明当前回文子串能到达的右边界和它的中心
  let mid = 0,
    right = 0;
  // 声明最长的回文子串的中心和长度
  let maxLen = 0,
    maxLenMid = 0;
  // 声明保存每个字符中心的回文索引和长度
  const child = [];
  // 遍历处理过的字符串，以每个字符中心进行扩展
  for (let i = 0; i < str.length; i++) {
    // 第i个字符是否在有边界内，如果在，就选择对称字符的回文长度或者
    // 不在右边界内就赋值1
    child[i] = i < right ? Math.min(child[2 * mid - i], right - i) : 1;
    // 进行扩展，对于完全在右边界的中心字符串索引，此扩展不会被执行一次
    while (
      i - child[i] >= 0 &&
      i + child[i] < str.length &&
      str.charAt(i + child[i]) == str.charAt(i - child[i])
    ) {
      child[i]++;
    }
    // 更新右边界
    if (right < child[i] + i) {
      mid = i;
      right = child[i] + i;
    }
    // 是否更新最长回文子串
    if (maxLen < child[i]) {
      maxLen = child[i];
      maxLenMid = i;
    }
  }
  return s.substring(
    (maxLenMid + 1 - maxLen) / 2,
    (maxLenMid - 1 + maxLen) / 2
  );
};
