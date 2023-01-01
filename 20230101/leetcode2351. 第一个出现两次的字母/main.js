/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-01 08:20:39                                                  *
 * @LastModifiedDate: 2023-01-01 08:22:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由小写英文字母组成的字符串 s ，请你找出并返回第一个出现 两次 的字母。

// 注意：

// 如果 a 的 第二次 出现比 b 的 第二次 出现在字符串中的位置更靠前，则认为字母 a 在字母 b 之前出现两次。
// s 包含至少一个出现两次的字母。

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function (s) {
  const set = new Set();
  for (const ch of s) {
    if (set.has(ch)) {
      return ch;
    }
    set.add(ch);
  }
};
