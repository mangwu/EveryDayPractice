/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-22 10:40:13                                                  *
 * @LastModifiedDate: 2023-01-22 10:50:14                                      *
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
  let negtive = false;
  let res = 0;
  for (const ch of n.toString()) {
    if (negtive) {
      res -= parseInt(ch);
    } else {
      res += parseInt(ch);
    }
    negtive = !negtive;
  }
  return res;
};
