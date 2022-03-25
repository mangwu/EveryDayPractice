/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-25 14:02:37                                                  *
 * @LastModifiedDate: 2022-03-25 14:47:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

// 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

// 你可以假设除了整数 0 之外，这个整数不会以零开头。

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let len = digits.length;
  // 从最后一位开始
  let idx = len - 1;
  // 进位
  let carry = 0;
  while ((idx == len - 1 || carry) && idx >= 0) {
    let plus = digits[idx] + 1;
    carry = Math.floor(plus / 10);
    digits[idx] = plus % 10;
    idx--;
  }
  if (carry) {
    digits = [1].concat(digits);
  }
  return digits;
};
