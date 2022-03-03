/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-03 08:48:05                                                  *
 * @LastModifiedDate: 2022-03-03 09:12:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给定一个非负整数 num，反复将各个位上的数字相加，直到结果为一位数。返回这个结果。
// 38 => 11 => 2

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  // 转化为字符串，然后循环相加即可
  let str = num.toString();
  let sum = num;
  while (str.length > 1) {
    sum = str.split("").reduce((pre, cur) => parseInt(pre) + parseInt(cur));
    str = sum.toString();
  }
  return sum;
};

// 对于任意位数，有如下规则
// 10^n * a1 + 10^n-1 * a2 .... an+1
// = (n)个9 * a1 + (n - 1)个9 * a2 + ..... 9 * an + a1 + a2 + a3 + .... + an+1
// 所以求个位数相加，就是将原始数mod 9 就得到了相应的结果，因为和有可能为9，而9%9 == 0，所以在结果为0时要返回9

/**
 * @param {number} num
 * @return {number}
 */
var addDigits2 = function (num) {
  const root = num % 9;
  if (num > 9) {
    // root为0时返回9
    return root ? root : 9;
  }
  return num;
};
