/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-16 10:37:56                                                  *
 * @LastModifiedDate: 2022-10-16 10:41:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 非负 整数 num 。
// 如果存在某个 非负 整数 k 满足 k + reverse(k) = num  ，则返回 true ；否则，返回 false 。

// reverse(k) 表示 k 反转每个数位后得到的数字。

/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function (num) {
  for (let i = 0; i <= num; i++) {
    if (i + reverseNum(i) === num) {
      return true;
    }
  }
  return false;
};

var reverseNum = function (num) {
  return parseInt(num.toString().split("").reverse().join(""));
};
