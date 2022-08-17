/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-17 09:14:52                                                  *
 * @LastModifiedDate: 2022-08-17 09:16:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  return new Array(Math.pow(10, n) - 1).fill(0).map((_v, i) => i + 1);
};
