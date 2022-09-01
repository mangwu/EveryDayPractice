/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-01 15:43:52                                                  *
 * @LastModifiedDate: 2022-09-01 15:45:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 桌上有 n 堆力扣币，每堆的数量保存在数组 coins 中。
// 我们每次可以选择任意一堆，拿走其中的一枚或者两枚，求拿完所有力扣币的最少次数。

/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
  let ans = 0;
  for (const coin of coins) {
    ans += Math.floor((coin + 1) / 2);
  }
  return ans;
};
