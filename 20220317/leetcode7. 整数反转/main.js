/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-17 19:26:41                                                  *
 * @LastModifiedDate: 2022-03-17 20:10:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

// 如果反转后整数超过 32 位的有符号整数的范围 [−2^31,  2^31 − 1] ，就返回 0。

// 假设环境不允许存储 64 位整数（有符号或无符号）。

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // 翻转不是翻转二级制字符，而是十进制的翻转
  let ans;
  if (x >= 0) {
    ans = parseInt(x.toString().split("").reverse().join(""));
  } else {
    ans = parseInt(
      "-" + x.toString().substring(1).split("").reverse().join("")
    );
  }
  if (ans > Math.pow(2, 31) - 1 || ans < 0 - Math.pow(2, 31)) {
    return 0;
  }
  return ans;
};

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  // 不转化为字符串，使用纯数字计算
  let isNegtive = x < 0;
  if (isNegtive) {
    x = -x;
  }
  let idx = 1;
  sum = 0;
  while (x) {
    // 队尾数字
    let tail = x % 10;
    sum = sum * 10 + tail;
    x = Math.floor(x / 10);
  }

  const ans = isNegtive ? 0 - sum : sum;
  if (ans > Math.pow(2, 31) - 1 || ans < 0 - Math.pow(2, 31)) {
    return 0;
  }
  return ans;
};
