/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-02 14:57:16                                                  *
 * @LastModifiedDate: 2022-04-02 15:20:21                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  // nums[0]和nums.slice(1)的结果
  const len = nums.length;
  if (len == 1) {
    return [[nums[0]]];
  }
  let set = new Set();
  for (const numarr of permuteUnique(nums.slice(1))) {
    // 插入到numarr中
    for (let i = 0; i <= numarr.length; i++) {
      const item = numarr.slice();
      item.splice(i, 0, nums[0]);
      set.add(JSON.stringify(item));
    }
  }
  return [...set].map((v) => JSON.parse(v));
};
