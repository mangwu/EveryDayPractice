/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-17 16:58:59                                                  *
 * @LastModifiedDate: 2025-02-17 17:01:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let pre1 = 0;
  let pre2 = 1;
  for (let i = 1; i <= n; i++) {
    const cur = pre1 + pre2;
    pre1 = pre2;
    pre2 = cur;
  }
  return pre2;
};
