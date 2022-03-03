/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-03 10:00:09                                                  *
 * @LastModifiedDate: 2022-03-03 11:09:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个字符串 s1 和 s2 ，写一个函数来判断 s2 是否包含 s1 的排列。如果是，返回 true ；否则，返回 false 。

// 换句话说，s1 的排列之一是 s2 的 子串 。

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // 即，如果s2中的子串有s1的排列就可以返回true
  // 使用滑动窗口,
  const len1 = s1.length;
  const len2 = s2.length;
  if (len1 > len2) {
    return false;
  }
  s1 = s1.split("").sort().join("");
  for (let i = len1 - 1; i < len2; i++) {
    let str = s2
      .substring(i - len1 + 1, i + 1)
      .split("")
      .sort()
      .join("");
    if (str == s1) {
      return true;
    }
  }
  return false;
};
// 上述每次都要使用sort进行排序比较，过于耗费时间
// 通过hash可以记录s1的字符和数量，通过遍历s2的子字符串来判断是否互为乱序
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion2 = function (s1, s2) {
  // 即，如果s2中的子串有s1的排列就可以返回true
  // 使用滑动窗口,
  const len1 = s1.length;
  const len2 = s2.length;
  if (len1 > len2) {
    return false;
  }
  const hash1 = new Map();
  for (const ch of s1) {
    if (hash1.has(ch)) {
      hash1.set(ch, hash1.get(ch) + 1);
    } else {
      hash1.set(ch, 1);
    }
  }
  for (let i = len1 - 1; i < len2; i++) {
    const hash2 = new Map(hash1);
    let str = s2.substring(i - len1 + 1, i + 1);
    let isSame = true;
    for (let j = 0; j < len1; j++) {
      if (!hash2.has(str[j])) {
        // 没有，i直接跳转到 i + j
        i = i + j;
        isSame = false;
        break;
      } else {
        const a = hash2.get(str[j]);
        if (a <= 0) {
          isSame = false;
          break;
        }
        hash2.set(str[j], a - 1);
      }
    }
    if (isSame) {
      return true;
    }
  }
  return false;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion3 = function (s1, s2) {
  // 更进一步，因为字符串中只有26个小写字符
  // 所以可以利用数组保存，同时，比较时直接将保存两个字符串的数组进行转化为字符比较即可， 无需进行遍历
  const len1 = s1.length;
  const len2 = s2.length;
  if (len1 > len2) {
    return false;
  }
  const alph1 = new Array(26).fill(0);
  const alph2 = new Array(26).fill(0);
  // 保存前len1个字符
  for (let i = 0; i < len1; i++) {
    alph1[s1[i].charCodeAt() - "a".charCodeAt()]++;
    alph2[s2[i].charCodeAt() - "a".charCodeAt()]++;
  }
  // 比较
  if (alph1.toString() == alph2.toString()) {
    return true;
  }
  // 开始遍历s2
  for (let i = len1; i < len2; i++) {
    alph2[s2[i].charCodeAt() - "a".charCodeAt()]++;
    alph2[s2[i - len1].charCodeAt() - "a".charCodeAt()]--;
    if (alph1.toString() == alph2.toString()) {
      return true;
    }
  }
  return false;
};
