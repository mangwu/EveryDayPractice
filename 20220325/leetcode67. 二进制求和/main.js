/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-25 14:56:02                                                  *
 * @LastModifiedDate: 2022-03-25 15:37:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个二进制字符串，返回它们的和（用二进制表示）。

// 输入为 非空 字符串且只包含数字 1 和 0。

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // 2进制转化为十进制后相加
  let ans = parseInt(a, 2) + parseInt(b, 2);
  // 将结果转化为二进制 计算结果可能会溢出(如果a，b很长的话)
  return ans.toString(2);
};

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // 遍历得到结果
  const lena = a.length;
  const lenb = b.length;
  const divider = lena - lenb;
  if (lena < lenb) {
    return addBinary(b, a);
  }
  a = a.split("");
  let carry = 0;
  for (let i = lena - 1; i >= 0 || (carry && i > 0); i--) {
    let bval = b[i - divider] !== undefined ? parseInt(b[i - divider]) : 0;
    // console.log(bval);
    let sum = carry + bval + parseInt(a[i]);
    carry = Math.floor(sum / 2);
    a[i] = sum % 2;
  }
  if (carry) {
    a = [1].concat(a);
  }
  return a.join("");
};

addBinary("111111111111111", "111111111111111");
