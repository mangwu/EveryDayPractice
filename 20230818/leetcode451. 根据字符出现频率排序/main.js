/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-18 14:36:27                                                  *
 * @LastModifiedDate: 2023-08-18 14:48:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个字符串 s ，根据字符出现的 频率 对其进行 降序排序 。一个字符出现的 频率 是它出现在字符串中的次数。

// 返回 已排序的字符串 。如果有多个答案，返回其中任何一个。

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const hash = new Map();
  for (const ch of s) hash.set(ch, (hash.get(ch) | 0) + 1);
  let res = "";
  for (const [ch, num] of [...hash].sort((a, b) => b[1] - a[1]))
    res += ch.repeat(num);
  return res;
};

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const hash = new Map();
  let maxFre = 0;
  for (const ch of s) {
    hash.set(ch, (hash.get(ch) | 0) + 1);
    maxFre = Math.max(maxFre, hash.get(ch));
  }
  const buckets = new Array(maxFre + 1).fill(0).map(() => new Array(0));
  for (const [ch, num] of hash) buckets[num].push(ch);
  let res = "";
  buckets.forEach((v, i) => v.forEach((ch) => (res = ch.repeat(i) + res)));
  return res;
};
