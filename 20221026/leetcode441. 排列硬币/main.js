/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-26 20:10:50                                                  *
 * @LastModifiedDate: 2022-10-26 20:24:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  n = 2 * n;
  const sqrtNum = Math.floor(Math.sqrt(n));
  if (sqrtNum * (sqrtNum + 1) > n) {
    return sqrtNum - 1;
  } else {
    return sqrtNum;
  }
};

// i(i + 1) + x = 2 * n
