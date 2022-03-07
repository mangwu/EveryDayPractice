/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-07 08:53:52                                                  *
 * @LastModifiedDate: 2022-03-07 09:16:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个整数 num，将其转化为 7 进制，并以字符串形式输出。

// 120 => 2 * 7 * 7 + 3 * 7 + 1 => 231
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  // 如果是负数先转化为正数
  let isNegtive = num < 0;
  if (isNegtive) {
    num = Math.abs(num);
  }
  // 余数
  let mod = num % 7;
  // 字符答案
  let ans = mod.toString();
  // 剩余数
  let rest = num - mod;
  // 基数
  let n = 2;
  while (rest > 0) {
    // 当剩余数大于0时循环
    mod = rest % Math.pow(7, n);
    ans = mod / Math.pow(7, n - 1) + ans;
    rest = rest - mod;
    n++;
  }
  console.log(ans);
  return isNegtive ? "-" + ans : ans;
};

convertToBase7(-0);

/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  // 使用JavaScript自带API
  return num.toString(7);
};
