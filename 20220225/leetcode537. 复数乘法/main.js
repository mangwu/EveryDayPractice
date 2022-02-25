/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-25 10:57:18                                                  *
 * @LastModifiedDate: 2022-02-25 11:08:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 复数 可以用字符串表示，遵循 "实部+虚部i" 的形式，并满足下述条件：

// 实部 是一个整数，取值范围是 [-100, 100]
// 虚部 也是一个整数，取值范围是 [-100, 100]
// i2 == -1
// 给你两个字符串表示的复数 num1 和 num2 ，请你遵循复数表示形式，返回表示它们乘积的字符串。

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
  const arr1 = num1.split("+");
  const arr2 = num2.split("+");
  console.log(arr1, arr2);
  let real = arr1[0] * arr2[0] - parseInt(arr1[1]) * parseInt(arr2[1]);
  console.log(real);
  let imag = arr1[0] * parseInt(arr2[1]) + arr2[0] * parseInt(arr1[1]);
  return real + "+" + imag + "i";
};

complexNumberMultiply("3+25i", "-58+-1i");
