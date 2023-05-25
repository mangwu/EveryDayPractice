/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-25 08:53:33                                                  *
 * @LastModifiedDate: 2023-05-25 09:02:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串数组 words ，每一个字符串长度都相同，令所有字符串的长度都为 n 。

// 每个字符串 words[i] 可以被转化为一个长度为 n - 1 的 差值整数数组 difference[i] ，
// 其中对于 0 <= j <= n - 2 有 difference[i][j] = words[i][j+1] - words[i][j] 。
// 注意两个字母的差值定义为它们在字母表中 位置 之差，也就是说 'a' 的位置是 0 ，'b' 的位置是 1 ，'z' 的位置是 25 。

// 比方说，字符串 "acb" 的差值整数数组是 [2 - 0, 1 - 2] = [2, -1] 。
// words 中所有字符串 除了一个字符串以外 ，其他字符串的差值整数数组都相同。你需要找到那个不同的字符串。

// 请你返回 words中 差值整数数组 不同的字符串。

/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function (words) {
  const n = words.length;
  let first = getDiffArr(words[0]).toString();
  let second = getDiffArr(words[1]).toString();
  if (first === second) {
    for (let i = 2; i < n; i++) {
      const cur = getDiffArr(words[i]).toString();
      if (cur !== first) return words[i];
    }
  } else {
    const third = getDiffArr(words[2]).toString();
    return third === second ? words[0] : words[1];
  }
};

var getDiffArr = function (word) {
  const diff = [];
  const n = word.length;
  for (let i = 1; i < n; i++) {
    diff.push(word[i].charCodeAt(0) - word[i - 1].charCodeAt());
  }
  return diff;
};
