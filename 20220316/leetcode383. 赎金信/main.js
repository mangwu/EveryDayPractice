/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-16 19:53:17                                                  *
 * @LastModifiedDate: 2022-03-16 19:56:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。

// 如果可以，返回 true ；否则返回 false 。

// magazine 中的每个字符只能在 ransomNote 中使用一次。

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // 使用一个26位数组记录每个字符出现的频率即可
  const alph = new Array(26).fill(0);
  for (const ch of magazine) {
    alph[ch.charCodeAt() - "a".charCodeAt()]++;
  }
  for (const ch of ransomNote) {
    let idx = ch.charCodeAt() - "a".charCodeAt();
    alph[idx]--;
    // 字符不够用
    if (alph[idx] < 0) {
      return false;
    }
  }
  return true;
};
