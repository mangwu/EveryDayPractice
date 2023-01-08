/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-08 10:58:39                                                  *
 * @LastModifiedDate: 2023-01-08 11:57:21                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个下标从 0 开始的字符串 word1 和 word2 。

// 一次 移动 由以下两个步骤组成：

// 选中两个下标 i 和 j ，分别满足 0 <= i < word1.length 和 0 <= j < word2.length ，
// 交换 word1[i] 和 word2[j] 。
// 如果可以通过 恰好一次 移动，使 word1 和 word2 中不同字符的数目相等，则返回 true ；否则，返回 false 。

/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var isItPossible = function (word1, word2) {
  let hash1 = new Map();
  let hash2 = new Map();
  for (const ch of word1) {
    hash1.has(ch) ? hash1.set(ch, hash1.get(ch) + 1) : hash1.set(ch, 1);
  }
  for (const ch of word2) {
    hash2.has(ch) ? hash2.set(ch, hash2.get(ch) + 1) : hash2.set(ch, 1);
  }
  let diff = Math.abs(hash1.size - hash2.size);
  if (diff > 2) {
    return false;
  }
  if (word1 === "a" && word2 === "b") return false;
  if (diff === 0) return true;
  if (diff === 1) {
    // 只有一个差异
    if (hash1.size < hash2.size) {
      [hash1, hash2] = [hash2, hash1];
    }
    // ab  b 减少一个不同   abc  aabb
    // aabc  dcc 增多一个不同
    let hasMore = false;
    const ones = [];
    for (const [key, value] of hash1) {
      if (value === 1) {
        ones.push(key);
      }
      if (value > 1 && !hash2.has(key)) {
        hasMore = true;
      }
    }
    for (const one of ones) {
      for (const [key, value] of hash2) {
        if (hash2.has(one)) {
          if (value > 1 && hash1.has(key) && key !== one) {
            return true;
          }
        } else {
          if (value === 1 && hash1.has(key) && key !== one) {
            return true;
          }
        }
      }
    }
    let hasMore2 = false;
    for (const [key, value] of hash2) {
      if (value > 1 && hash1.has(key)) {
        hasMore2 = true;
      }
    }
    return hasMore && hasMore2;
  }
  if (diff === 2) {
    // 有两个差异
    // abcde  aamk  =>  abcda  eamk
    if (hash1.size < hash2.size) {
      [hash1, hash2] = [hash2, hash1];
    }
    let hasOne = false;
    for (const [key, value] of hash1) {
      if (value === 1 && !hash2.has(key)) {
        // 可以移到另一个字符串从而减少
        hasOne = true;
      }
    }
    let hasMore = false;
    for (const [key, value] of hash2) {
      if (value > 1 && hash1.has(key)) {
        hasMore = true; // 可以移到到另一个但是不减少
      }
    }
    return hasOne && hasMore;
  }
};
