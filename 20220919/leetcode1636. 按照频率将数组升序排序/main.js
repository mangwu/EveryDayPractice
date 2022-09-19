/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-19 09:09:31                                                  *
 * @LastModifiedDate: 2022-09-19 09:14:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一个整数数组 nums ，请你将数组按照每个值的频率 升序 排序。
// 如果有多个值的频率相同，请你按照数值本身将它们 降序 排序。

// 请你返回排序后的数组。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const hash = new Map();
  for (const num of nums) {
    if (hash.has(num)) {
      hash.set(num, hash.get(num) + 1);
    } else {
      hash.set(num, 1);
    }
  }
  nums.sort((a, b) => {
    const numa = hash.get(a);
    const numb = hash.get(b);
    if (numa !== numb) {
      return numa - numb;
    }
    return b - a;
  });
  return nums;
};
