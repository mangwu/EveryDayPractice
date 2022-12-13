/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-13 08:48:56                                                  *
 * @LastModifiedDate: 2022-12-13 08:52:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 全字母句 指包含英语字母表中每个字母至少一次的句子。

// 给你一个仅由小写英文字母组成的字符串 sentence ，请你判断 sentence 是否为 全字母句 。

// 如果是，返回 true ；否则，返回 false 。

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  const n = sentence.length;
  if (n < 26) {
    return false;
  }
  const set = new Set("abcdefghijklmnopqrstuvwxyz".split(""));
  for (const ch of sentence) {
    set.delete(ch);
  }
  return set.size === 0;
};
