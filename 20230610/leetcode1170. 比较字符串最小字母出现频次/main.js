/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-11 01:32:12                                                  *
 * @LastModifiedDate: 2023-06-11 03:17:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 定义一个函数 f(s)，统计 s  中（按字典序比较）最小字母的出现频次 ，其中 s 是一个非空字符串。

// 例如，若 s = "dcce"，那么 f(s) = 2，因为字典序最小字母是 "c"，它出现了 2 次。

// 现在，给你两个字符串数组待查表 queries 和词汇表 words 。对于每次查询 queries[i] ，需统计 words 中满足 f(queries[i]) < f(W) 的 词的数目 ，W 表示词汇表 words 中的每个词。

// 请你返回一个整数数组 answer 作为答案，其中每个 answer[i] 是第 i 次查询的结果。

/**
 * @description 最新字母出现频次
 * @param {string} s
 * @return {number}
 */
function f(s) {
  const strArr = s.split("").sort();
  let res = 1;
  for (; res < strArr.length; res++) {
    if (strArr[res] !== strArr[res - 1]) break;
  }
  return res;
}

/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
var numSmallerByFrequency = function (queries, words) {
  const m = words.length;
  for (let i = 0; i < m; i++) {
    words[i] = f(words[i]);
  }
  words.sort((a, b) => a - b);
  const ans = [];
  for (const query of queries) {
    const res = f(query);
    // 找到第一个比res大的数
    let left = 0;
    let right = m - 1;
    while (left <= right) {
      let mid = (left + right) >> 1;
      if (words[mid] > res) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    ans.push(m - left);
  }
  return ans;
};
