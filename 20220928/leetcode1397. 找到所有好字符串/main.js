/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-28 09:54:30                                                  *
 * @LastModifiedDate: 2022-09-28 10:11:04                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个长度为 n 的字符串 s1 和 s2 ，以及一个字符串 evil 。请你返回 好字符串 的数目。

// 好字符串 的定义为：它的长度为 n ，字典序大于等于 s1 ，字典序小于等于 s2 ，且不包含 evil 为子字符串。

// 由于答案可能很大，请你返回答案对 10^9 + 7 取余的结果。

/**
 * @param {number} n
 * @param {string} s1
 * @param {string} s2
 * @param {string} evil
 * @return {number}
 */
var findGoodStrings = function (n, s1, s2, evil) {
  // 首先获取s1和s2开头重复的字符串
  let same = "";
  for (let i = 0; i < n; i++) {
    if (s1[i] === s2[i]) {
      same = same + s1[i];
    } else {
      break;
    }
  }
  if (same.includes(evil)) return 0;
  const str = s1.slice(same.length);
  const dp = 
};
