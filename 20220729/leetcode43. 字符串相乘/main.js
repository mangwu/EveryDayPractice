/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-29 11:01:54                                                  *
 * @LastModifiedDate: 2022-07-29 13:48:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

// 注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  const len1 = num1.length;
  const len2 = num2.length;
  if (len1 < len2) {
    return multiply(num2, num1);
  }
  // 单个乘数
  const prods = new Array(len2).fill(0);
  for (let i = 0; i < len2; i++) {
    // num2[i] * num1
    let carry = 0;
    let res = "";
    for (let j = len1 - 1; j >= 0; j--) {
      let prod = num2[i] * num1[j] + carry;
      res = (prod % 10) + res;
      carry = Math.floor(prod / 10);
    }
    if (carry) {
      res = carry + res;
    }
    res = res + "0".repeat(len2 - i - 1);
    prods.push(res);
  }
  // 计算prods之和
  return prods.reduce((pre, cur) => {
    const len = cur.length;
    const lenp = pre.length;
    let idx = lenp - 1;
    let newValue = "";
    let carry = 0;
    for (let i = len - 1; i >= 0; i--) {
      let sum = parseInt(cur[i]) + parseInt(pre[idx]) + carry;
      newValue = (sum % 10) + newValue;
      carry = Math.floor(sum / 10);
      idx--;
    }
    for (; idx >= 0; idx--) {
      let sum = parseInt(pre[idx]) + carry;
      newValue = (sum % 10) + newValue;
      carry = Math.floor(sum / 10);
    }
    if (carry) {
      newValue = carry + newValue;
    }
    return newValue;
  });
};
