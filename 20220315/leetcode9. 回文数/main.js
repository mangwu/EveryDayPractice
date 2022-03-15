/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-15 19:30:20                                                  *
 * @LastModifiedDate: 2022-03-15 19:41:52                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 例如，121 是回文，而 123 不是。

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  x = x.toString();
  const len = x.length;
  let idx = 0;
  while (idx < len / 2) {
    if (x[idx] !== x[len - idx - 1]) {
      return false;
    }
    idx++;
  }
  return true;
};

// 不使用字符串转化就需要将字符每次%10,获得最后一位
// 当获得后面的len / 2位数字后，构成一个数字判断和剩余数字是否相等即可

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  // 负数，最后一位为0(不包括0)
  if (x < 0 || (x % 10 == 0 && x !== 0)) {
    return false;
  }
  // 开始转化
  let reverseNum = 0;
  while (x > reverseNum) {
    // 前面的数乘10加上个位数
    reverseNum = reverseNum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  // 需要考虑奇数个的情况如12321 x最终为12 reverseNum = 123
  return x == reverseNum || x == Math.floor(reverseNum / 10);
};
