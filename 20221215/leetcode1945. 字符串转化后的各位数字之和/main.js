/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-15 09:59:56                                                  *
 * @LastModifiedDate: 2022-12-15 10:25:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由小写字母组成的字符串 s ，以及一个整数 k 。

// 首先，用字母在字母表中的位置替换该字母，将 s 转化 为一个整数（也就是，'a' 用 1 替换，'b' 用 2 替换，... 'z' 用 26 替换）。接着，将整数 转换 为其 各位数字之和 。共重复 转换 操作 k 次 。

// 例如，如果 s = "zbax" 且 k = 2 ，那么执行下述步骤后得到的结果是整数 8 ：

// 转化："zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
// 转换 #1：262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
// 转换 #2：17 ➝ 1 + 7 ➝ 8
// 返回执行上述操作后得到的结果整数。
const START = "a".charCodeAt();
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let res = 0;
  for (const ch of s) {
    let cur = ch.charCodeAt() - START + 1;
    if (cur >= 10) {
      res += Math.floor(cur / 10);
      cur = cur % 10;
    }
    res += cur;
  }
  k--;
  while (k) {
    res = sumOfNum(res);
    k--;
    if (res < 10) {
      return res;
    }
  }
  return res;
};
/**
 * @description 获取每位之和
 * @param {number} num 数字
 */
var sumOfNum = (num) => {
  const str = num.toString();
  let ans = 0;
  for (const ch of str) {
    ans += parseInt(ch);
  }
  return ans;
};
