/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-11 10:35:47                                                  *
 * @LastModifiedDate: 2022-09-11 10:56:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，返回出现最频繁的偶数元素。

// 如果存在多个满足条件的元素，只需要返回 最小 的一个。如果不存在这样的元素，返回 -1 。
/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  const hash = new Map();
  let ans = Infinity;
  let max = 0;
  for (const num of nums) {
    if (num % 2 == 0) {
      if (hash.has(num)) {
        let k = hash.get(num);
        hash.set(num, k + 1);
        if (k + 1 > max) {
          ans = num;
          max = k + 1;
        } else if (k + 1 == max) {
          ans = Math.min(ans, num);
        }
      } else {
        hash.set(num, 1);
        if (1 > max) {
          ans = num;
          max = 1;
        } else if (1 == max) {
          ans = Math.min(ans, num);
        }
      }
    }
  }
  return ans !== Infinity ? ans : -1;
};
