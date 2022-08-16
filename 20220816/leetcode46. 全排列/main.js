/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-16 11:14:52                                                  *
 * @LastModifiedDate: 2022-08-16 13:49:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [[nums[0]]];
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    let cur = [];
    for (const item of res) {
      const len = item.length;
      for (let j = 0; j <= len; j++) {
        const copy = item.slice();
        copy.splice(j, 0, nums[i]);
        cur.push(copy);
      }
    }
    res = cur;
  }
  return res;
};

// 1
// 21 12
// 321 231 213 312 132 123
// 4321 3421
