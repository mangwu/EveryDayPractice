/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-17 09:01:01                                                  *
 * @LastModifiedDate: 2022-11-17 09:38:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给定字符串 s 和字符串数组 words, 返回  words[i] 中是s的子序列的单词个数 。

// 字符串的 子序列 是从原始字符串中生成的新字符串，可以从中删去一些字符(可以是none)，而不改变其余字符的相对顺序。

// 例如， “ace” 是 “abcde” 的子序列。

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  let ans = 0;
  const n = s.length;
  const hash = new Map();
  for (let i = 0; i < n; i++) {
    hash.has(s[i]) ? hash.get(s[i]).push(i) : hash.set(s[i], [1, i]);
  }
  for (const word of words) {
    if (isMatch(hash, word)) {
      ans++;
    }
  }
  return ans;
};
// log(m) * n   n为words中所有字符长度
var isMatch = function (hash, word) {
  for (const [_key, value] of hash) {
    value[0] = 1;
  }
  let pre = -1;
  for (const ch of word) {
    let value = hash.get(ch);
    if (value) {
      // 进行二分查找
      let left = value[0];
      let right = value.length;
      // 找到第一个比pre大的数
      while (left < right) {
        let mid = (left + right) >> 1;
        if (value[mid] > pre) {
          right = mid;
        } else {
          left = mid + 1;
        }
      }
      value[0] = right + 1;
      if (right < value.length) {
        pre = value[right];
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

// ,"sdoqhd"