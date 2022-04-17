/*
 * @Author: mangwu                                                             *
 * @File: main1.js                                                             *
 * @Date: 2022-04-16 15:07:21                                                  *
 * @LastModifiedDate: 2022-04-16 15:08:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} gem
 * @param {number[][]} operations
 * @return {number}
 */
var giveGem = function (gem, operations) {
  for (const o of operations) {
    let idx = o[0];
    let idx2 = o[1];
    // idx 赠送一半宝石给idx2
    gem[idx2] += Math.floor(gem[idx] / 2);
    gem[idx] = gem[idx] - Math.floor(gem[idx] / 2);
  }
  let max = 0;
  let min = Number.MAX_VALUE;
  for (const g of gem) {
    max = Math.max(max, g);
    min = Math.min(g, min);
  }
  return max - min;
};
