/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-12 10:30:54                                                  *
 * @LastModifiedDate: 2023-03-12 10:34:19                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的字符串数组 words 和两个整数：left 和 right 。

// 如果字符串以元音字母开头并以元音字母结尾，那么该字符串就是一个 元音字符串 ，其中元音字母是 'a'、'e'、'i'、'o'、'u' 。

// 返回 words[i] 是元音字符串的数目，其中 i 在闭区间 [left, right] 内。

/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function (words, left, right) {
  let res = 0;
  for (let i = left; i <= right; i++) {
    if (isVowel(words[i])) res++;
  }
  return res;
};
const vowels = new Set(["a", "e", "i", "o", "u"]);
var isVowel = function (word) {
  return vowels.has(word[0]) && vowels.has(word[word.length - 1]);
};
