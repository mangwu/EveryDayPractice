/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-11 08:57:23                                                  *
 * @LastModifiedDate: 2022-10-11 09:09:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你长度相等的两个字符串 s1 和 s2 。一次 字符串交换 操作的步骤如下：选出某个字符串中的两个下标（不必不同），
// 并交换这两个下标所对应的字符。

// 如果对 其中一个字符串 执行 最多一次字符串交换 就可以使两个字符串相等，返回 true ；否则，返回 false 。

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) {
    return true;
  }
  // 暴力法
  const strs1 = s1.split("");
  const n = s2.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      [strs1[i], strs1[j]] = [strs1[j], strs1[i]];
      if (s2 === strs1.join("")) {
        return true;
      }
      [strs1[i], strs1[j]] = [strs1[j], strs1[i]];
    }
  }
  return false;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) {
    return true;
  }
  const n = s1.length;
  let diff = 0;
  const idx = [];
  for (let i = 0; i < n; i++) {
    if (s1[i] !== s2[i]) {
      diff++;
      idx.push(i);
      if (diff > 2) {
        return false;
      }
    }
  }
  if (diff == 1) {
    return false;
  }

  return s1[idx[0]] === s2[idx[1]] && s1[idx[1]] === s2[idx[0]];
};
