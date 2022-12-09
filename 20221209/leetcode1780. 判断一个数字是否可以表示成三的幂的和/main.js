/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-09 09:06:54                                                  *
 * @LastModifiedDate: 2022-12-09 09:10:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 n ，如果你可以将 n 表示成若干个不同的三的幂之和，请你返回 true ，否则请返回 false 。

// 对于一个整数 y ，如果存在整数 x 满足 y == 3x ，我们称这个整数 y 是三的幂。
/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
  // 3进制
  // 把n转换为对应的3进制字符串，字符串中没有2就能勇3的幂表示
  return n.toString(3).indexOf("2") == -1;
};
