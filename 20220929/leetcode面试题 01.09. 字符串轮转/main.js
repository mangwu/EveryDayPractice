/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-29 09:13:59                                                  *
 * @LastModifiedDate: 2022-09-29 09:33:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 字符串轮转。给定两个字符串s1和s2，
// 请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）。

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function (s1, s2) {
  const n1 = s1.length;
  const n2 = s2.length;
  if (n1 !== n2) {
    return false;
  }
  if (s1 == s2) {
    return true;
  }
  for (let j = 0; j < n2; j++) {
    if (s1[0] === s2[j]) {
      if (s1 === s2.substring(j) + s2.substring(0, j)) {
        return true;
      }
    }
  }
  return false;
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function (s1, s2) {
  // 翻倍s1,然后进行查找
  return s1.length === s2.length && (s1 + s1).indexOf(s2) !== -1;
};
