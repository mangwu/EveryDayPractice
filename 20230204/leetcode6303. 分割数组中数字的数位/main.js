/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-04 22:30:17                                                  *
 * @LastModifiedDate: 2023-02-04 22:36:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数数组 nums ，请你返回一个数组 answer ，你需要将 nums 中每个整数进行数位分割后，按照 nums 中出现的 相同顺序 放入答案数组中。

// 对一个整数进行数位分割，指的是将整数各个数位按原本出现的顺序排列成数组。

// 比方说，整数 10921 ，分割它的各个数位得到 [1,0,9,2,1] 。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  const ans = [];
  for (let num of nums) {
    for (const ch of num.toString()) {
      ans.push(parseInt(ch));
    }
  }
  return ans;
};
