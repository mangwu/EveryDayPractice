/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-04 23:44:28                                                  *
 * @LastModifiedDate: 2022-04-05 01:41:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const hash = new Map();
  const hash2 = new Map();
  const strArr = s.split(" ");
  const lenp = pattern.length;
  const lens = strArr.length;
  if (lenp !== lens) {
    return false;
  }
  for (let i = 0; i < lenp; i++) {
    if (hash.has(pattern[i])) {
      if (hash.get(pattern[i]) !== strArr[i]) {
        return false;
      }
    }
    if (hash2.has(strArr[i])) {
      if (hash2.get(strArr[i]) !== pattern[i]) {
        return false;
      }
      continue;
    }
    hash.set(pattern[i], strArr[i]);
    hash2.set(strArr[i], pattern[i]);
  }
  return true;
};
