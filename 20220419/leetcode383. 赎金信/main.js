/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-19 10:08:37                                                  *
 * @LastModifiedDate: 2022-04-19 10:12:42                                      *
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
  if (ransomNote.length > magazine.length) {
    return false;
  }
  const a = new Array(26).fill(0);
  for (const ch of magazine) {
    a[ch.charCodeAt() - "a".charCodeAt()]++;
  }
  for (const ch of ransomNote) {
    let num = a[ch.charCodeAt() - "a".charCodeAt()]--;
    if (num == 0) {
      return false;
    }
  }
  return true;
};
