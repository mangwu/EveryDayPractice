/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-30 11:12:04                                                  *
 * @LastModifiedDate: 2023-07-30 11:48:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你三个字符串 a ，b 和 c ， 你的任务是找到长度 最短 的字符串，且这三个字符串都是它的 子字符串 。
// 如果有多个这样的字符串，请你返回 字典序最小 的一个。

// 请你返回满足题目要求的字符串。

// 注意：

// 两个长度相同的字符串 a 和 b ，如果在第一个不相同的字符处，a 的字母在字母表中比 b 的字母 靠前 ，那么字符串 a 比字符串 b 字典序小 。
// 子字符串 是一个字符串中一段连续的字符序列。

/**
 * @param {string} a
 * @param {string} b
 * @param {string} c
 * @return {string}
 */
var minimumString = function (a, b, c) {
  const res = [];
  const ab = getPublicStr(a, b);
  if (ab.indexOf(c) !== -1) res.push(ab);
  const ac = getPublicStr(a, c);
  if (ac.indexOf(b) !== -1) res.push(ac);
  const ba = getPublicStr(b, a);
  if (ba.indexOf(c) !== -1) res.push(ba);
  const bc = getPublicStr(b, c);
  if (bc.indexOf(a) !== -1) res.push(bc);
  const ca = getPublicStr(c, a);
  if (ca.indexOf(b) !== -1) res.push(ca);
  const cb = getPublicStr(c, b);
  if (cb.indexOf(a) !== -1) res.push(cb);

  // abc
  res.push(getPublicStr(ab, c));
  // acb
  res.push(getPublicStr(ac, b));
  // bac
  res.push(getPublicStr(ba, c));
  // bca
  res.push(getPublicStr(bc, a));
  // cab
  res.push(getPublicStr(ca, b));
  // cba
  res.push(getPublicStr(cb, a));
  // 特殊情况
  if (a.indexOf(b) !== -1 && a.indexOf(c) !== -1) res.push(a);
  if (b.indexOf(a) !== -1 && b.indexOf(c) !== -1) res.push(b);
  if (c.indexOf(a) !== -1 && c.indexOf(b) !== -1) res.push(c);
  res.sort((a, b) => {
    if (a.length !== b.length) return a.length - b.length;
    return a < b ? -1 : a == b ? 0 : 1;
  });
  console.log(res);
  return res[0];
};

var getPublicStr = function (str1, str2) {
  const len1 = str1.length;
  for (let i = 0; i < len1; i++) {
    // str1 abc
    // str2  bcde
    if (str2.indexOf(str1.slice(i, len1)) === 0) {
      return str1.slice(0, i) + str2;
    }
  }
  return str1 + str2;
};
