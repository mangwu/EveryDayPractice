/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-18 20:49:51                                                  *
 * @LastModifiedDate: 2022-08-18 21:21:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 数字以0123456789101112131415…的格式序列化到一个字符序列中。在这个序列中，第5位（从下标0开始计数）是5，
// 第13位是1，第19位是4，等等。

// 请写一个函数，求任意第n位对应的数字。

/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function (n) {
  if (n <= 9) {
    return n;
  }
  // 一个十叉树的bfs遍历
  let pre = 10;
  let idx = 1;
  while (n >= pre) {
    n = n - pre;
    idx++;
    pre = 9 * Math.pow(10, idx - 1) * idx;
  }
  // 是idx位数的第n个
  let num = Math.pow(10, idx - 1) + Math.floor(n / idx);
  // 是num中的第 n % idx位
  return num.toString()[n % idx];
};

//  root
//0 1 2 3 4 5 6 7 8 9 10
//10 11 12 ... 99
//101
//        0
//    1 2 3 4 5 6 7 8 9
//  10 11 12 13 14 15 16..19 20 21 22 23 24 25 26 27...99
