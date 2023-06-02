/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-02 08:55:33                                                  *
 * @LastModifiedDate: 2023-06-02 09:05:09                                      *
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
const SET = new Set(["a", "e", "i", "o", "u"]);
/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
  // 前缀和
  const prefix = [0];
  let pre = 0;
  for (const word of words) {
    if (SET.has(word[0]) && SET.has(word[word.length - 1])) {
      pre++;
    }
    prefix.push(pre);
  }
  const ans = [];
  for (const query of queries) {
    ans.push(prefix[query[1] + 1] - prefix[query[0]]);
  }
  return ans;
};
