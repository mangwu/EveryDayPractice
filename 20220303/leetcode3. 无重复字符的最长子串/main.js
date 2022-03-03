/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-03 09:15:46                                                  *
 * @LastModifiedDate: 2022-03-03 09:26:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// aadcbde => 最长子串 cbde

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 最长子串是连续的子字符串
  // 使用滑动窗口，保存前面的不重复字符串，如果遇到重复的，
  // 就将窗口左侧缩小
  let win = [];
  // 保存最长长度
  let max = 0;
  for (const ch of s) {
    // 查找是否存在
    const idx = win.indexOf(ch);
    if (idx === -1) {
      // 不存在重复
      win.push(ch);
      if (win.length > max) {
        max = win.length;
      }
    } else {
      // 存在重复 修剪前面的idx+1个元素
      win = win.slice(idx + 1);
      win.push(ch);
    }
  }
  return max;
};
