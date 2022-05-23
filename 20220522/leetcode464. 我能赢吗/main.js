/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-22 11:58:02                                                  *
 * @LastModifiedDate: 2022-05-22 14:29:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function (maxChoosableInteger, desiredTotal) {
  if (maxChoosableInteger >= desiredTotal) {
    return true;
  }
  let sum = 0;
  let min = 1;
  let max = maxChoosableInteger
  let flag = true;
  while (min < max) {
    if (maxChoosableInteger >= desiredTotal - sum) {
      return flag;
    }
    if(sum + min )
    flag = !flag;
  }
  if (sum < desiredTotal) {
    return false;
  }
};

// 要么拿最大，要么拿最小

// 40
// 1 2 3 4  5  6  7  8  10
// 1 3 6 10 15 21 28 36 46
// 1 10 2  3  9  4  5
// 1 11 13 16 25 29 
