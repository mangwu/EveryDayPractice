/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-18 14:11:02                                                  *
 * @LastModifiedDate: 2022-08-18 16:45:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 输入一个整数 n ，求1～n这n个整数的十进制表示中1出现的次数。

// 例如，输入12，1～12这些整数中包含1 的数字有1、10、11和12，1一共出现了5次。

/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {};

// 1位数: 1
// 两位数: 9 + 8 + 2 => 1a + b1 + 11   =>  a不能为1 b不能为0 1
// 三位数：81 + 9*8 + 9 * 8 + 2 * (9 + 9 + 8) + 3 => 1aa + b1a + ba1 + 11a + 1a1 + b11 + 111
// 四位数：729 + 9*9*8*3 + 2 * ()

/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  if (n <= 9) {
    return 1;
  }
  const strNum = n.toString();
  const rest = countDigitOne(parseInt(strNum.substring(1)));
  return (
    DIGITS[strNum.length - 1] +
    Math.pow(10, strNum.length - 1) +
    rest * parseInt(strNum[0])
  );
};

// 9  => 9 => 9  => 各个数字一个，0 0个
// 99 => 9 + 90 * 2 => 189 => 各个数字20个 0 9个
// 999 => 9 + 90 * 2 + 900 * 3 => 2889 => 各个数字 300个 0 189个
// 9999 => 2889 + 9000 * 4 => 38889 => 各个数字 4000个 0 2889个
// 99999 => 38889 + 90000 * 5 => 488889 => 各个数字50000个 0 38889个
// n个9 => f(n-1) + 9 * (10 ^ (n - 1)) * n => 各个数字(n - 1)) * n个 0 f(n-1)个

// 199 => 1 99内的1的个数为 20 100 ~ 199 的1的个数为1 * (100 - 20) + 20 * 2
// 1999 => 1 999 内的1的个数为300 1000 ~ 1999 的1的个数为 1 * (1000 - 300) + 300 * 2
// 2999 => 1 999(300) 1000 ~ 2999 (1000 - 300) + 300 * 3
const DIGITS = new Array(10).fill(0);
for (let i = 1; i < 10; i++) {
  DIGITS[i] = Math.pow(10, i - 1) * i;
}
