/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-31 23:30:55                                                  *
 * @LastModifiedDate: 2022-03-31 23:37:48                                      *
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
 * @return {boolean}
 */
var isHappy = function (n) {
  let str = n.toString();
  let num = 0;
  const set = new Set();
  set.add(n);
  while (num !== 1) {
    num = 0;
    for (const ch of str) {
      num += Math.pow(parseInt(ch), 2);
    }
    if (set.has(num)) {
      return false;
    }
    set.add(num);
    str = num.toString();
  }
  return true;
};
