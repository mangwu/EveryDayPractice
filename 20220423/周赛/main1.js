/*
 * @Author: mangwu                                                             *
 * @File: main1.js                                                             *
 * @Date: 2022-04-23 15:03:36                                                  *
 * @LastModifiedDate: 2022-04-23 15:08:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} time
 * @param {number[][]} fruits
 * @param {number} limit
 * @return {number}
 */
var getMinimumTime = function (time, fruits, limit) {
  let ans = 0;
  for (const f of fruits) {
    let num = f[1] <= limit ? 1 : Math.floor((f[1] - 1) / limit) + 1;
    ans += num * time[f[0]];
  }
  return ans;
};
