/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-12 09:34:31                                                  *
 * @LastModifiedDate: 2023-07-12 09:46:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数 n 。n 中的每一位数字都会按下述规则分配一个符号：

// 最高有效位 上的数字分配到 正 号。
// 剩余每位上数字的符号都与其相邻数字相反。
// 返回所有数字及其对应符号的和。

/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
  const str = n.toString();
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) res += parseInt(str[i]);
    else res -= parseInt(str[i]);
  }
  return res;
};
