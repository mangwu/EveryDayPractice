/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-14 10:30:33                                                  *
 * @LastModifiedDate: 2023-05-14 11:01:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var circularGameLosers = function (n, k) {
  const set = new Set();
  let cur = 1;
  let i = 1;
  while (!set.has(cur)) {
    set.add(cur);
    cur += k * i;
    cur = ((cur - 1) % n) + 1;
    i++;
  }
  const arr = [];
  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      arr.push(i);
    }
  }
  return arr;
};
