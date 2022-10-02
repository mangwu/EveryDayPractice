/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-01 22:30:40                                                  *
 * @LastModifiedDate: 2022-10-01 22:58:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function (word) {
  const hash = new Map();
  let max = 0;
  for (const ch of word) {
    hash.has(ch) ? hash.set(ch, hash.get(ch) + 1) : hash.set(ch, 1);
    if (max < hash.get(ch)) {
      max = hash.get(ch);
    }
  }
  if (max == 1 || max == word.length) {
    return true;
  }
  let min = Infinity;
  let minNum = 0;
  let maxNum = 0;
  for (const [key, value] of hash) {
    if (value == max) {
      maxNum++;
    }
    if (value < min) {
      min = value;
      minNum = 0;
    }
    if (value === min) {
      minNum++;
    }
  }
  if (minNum + maxNum !== hash.size) {
    return false;
  }
  // 一个最大值，其他都行最小值
  if (max === min + 1 && maxNum === 1 && minNum === hash.size - 1) {
    return true;
  }
  // 最小值为1，且只有一个，其他相同
  if (maxNum == hash.size - 1 && min === 1 && minNum == 1) {
    return true;
  }
  return false;
};
