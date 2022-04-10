/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-08 23:09:00                                                  *
 * @LastModifiedDate: 2022-04-08 23:19:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 使用下面描述的算法可以扰乱字符串 s 得到字符串 t ：
// 如果字符串的长度为 1 ，算法停止
// 如果字符串的长度 > 1 ，执行下述步骤：
// 在一个随机下标处将字符串分割成两个非空的子字符串。
// 即，如果已知字符串 s ，则可以将其分成两个子字符串 x 和 y ，且满足 s = x + y 。
// 随机 决定是要「交换两个子字符串」还是要「保持这两个子字符串的顺序不变」。
// 即，在执行这一步骤之后，s 可能是 s = x + y 或者 s = y + x 。
// 在 x 和 y 这两个子字符串上继续从步骤 1 开始递归执行此算法。
// 给你两个 长度相等 的字符串 s1 和 s2，判断 s2 是否是 s1 的扰乱字符串。
// 如果是，返回 true ；否则，返回 false 。

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  const len1 = s1.length;
  const len2 = s2.length;
  if (len1 !== len2) {
    return false;
  }
  if (s1 == s2) {
    return true;
  }
  let allSets = new Set();
  for (const i = 1; i < len1; i++) {

  }
};
