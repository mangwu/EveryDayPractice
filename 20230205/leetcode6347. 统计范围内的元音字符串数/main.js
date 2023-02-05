/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-05 10:40:25                                                  *
 * @LastModifiedDate: 2023-02-05 10:52:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的字符串数组 words 以及一个二维整数数组 queries 。

// 每个查询 queries[i] = [li, ri] 会要求我们统计在 words 中下标在 li 到 ri 范围内（包含 这两个值）并且以元音开头和结尾的字符串的数目。

// 返回一个整数数组，其中数组的第 i 个元素对应第 i 个查询的答案。

// 注意：元音字母是 'a'、'e'、'i'、'o' 和 'u' 。

/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
  const n = words.length;
  const arr = [];
  for (const word of words) {
    if (isVowel(word)) arr.push(1);
    else arr.push(0);
  }
  const prefix = [0];
  for (let i = 1; i <= n; i++) {
    prefix[i] = prefix[i - 1] + arr[i - 1];
  }
  const res = [];
  for (const querie of queries) {
    res.push(prefix[querie[1] + 1] - prefix[querie[0]]);
  }
  return res;
};
const set = new Set(["a", "e", "i", "o", "u"]);
var isVowel = function (word) {
  if (set.has(word[0]) && set.has(word[word.length - 1])) return true;
  return false;
};
