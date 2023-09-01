/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-01 09:04:35                                                  *
 * @LastModifiedDate: 2023-09-01 09:07:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 total ，表示你拥有的总钱数。同时给你两个整数 cost1 和 cost2 ，分别表示一支钢笔和一支铅笔的价格。你可以花费你部分或者全部的钱，去买任意数目的两种笔。

// 请你返回购买钢笔和铅笔的 不同方案数目 。

/**
 * @param {number} total
 * @param {number} cost1
 * @param {number} cost2
 * @return {number}
 */
var waysToBuyPensPencils = function (total, cost1, cost2) {
  let res = 0;
  const n = Math.floor(total / cost1);
  for (let i = 0; i <= n; i++) {
    // i只钢笔
    res += Math.floor((total - cost1 * i) / cost2) + 1;
  }
  return res;
};
