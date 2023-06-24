/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-24 22:30:29                                                  *
 * @LastModifiedDate: 2023-06-24 22:39:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


// 给你一个下标从 0 开始的数组 words ，数组中包含 互不相同 的字符串。

// 如果字符串 words[i] 与字符串 words[j] 满足以下条件，我们称它们可以匹配：

// 字符串 words[i] 等于 words[j] 的反转字符串。
// 0 <= i < j < words.length
// 请你返回数组 words 中的 最大 匹配数目。

// 注意，每个字符串最多匹配一次。

/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  const hash = new Map();
  let res = 0;
  for (const word of words) {
    const reverseWord = word.split("").reverse().join("");
    if (hash.has(reverseWord)) {
      res++;
      let cur = hash.get(reverseWord);
      if (cur === 1) hash.delete(reverseWord)
      else hash.set(reverseWord, cur - 1);
    } else {
      hash.set(word, (hash.get(word) || 0) + 1)
    }
  }
  return res;
};