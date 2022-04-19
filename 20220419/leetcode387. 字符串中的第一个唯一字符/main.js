/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-19 09:39:16                                                  *
 * @LastModifiedDate: 2022-04-19 09:59:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // hash表
  const hash = new Map();
  const len = s.length;
  for (let i = 0; i < len; i++) {
    let num = hash.get(s[i]);
    if (num) {
      num[0]++;
    } else {
      num = [1, i];
    }
    hash.set(s[i], num);
  }
  for (const [_key, value] of hash) {
    if (value[0] == 1) {
      return value[1];
    }
  }
  return -1;
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  // 在使用hash记录时，可以不必将数量和索引记录在一起，
  // 只需记录第一次的索引，当遇到第二次时将索引值修改为-1即可
  const hash = new Map();
  const len = s.length;
  for (let i = 0; i < len; i++) {
    if (hash.has(s[i])) {
      hash.set(s[i], -1);
    } else {
      hash.set(s[i], i);
    }
  }
  for (const [_key, value] of hash) {
    if (value !== -1) {
      return value;
    }
  }
  return -1;
};
