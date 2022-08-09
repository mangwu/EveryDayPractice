/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-09 17:26:33                                                  *
 * @LastModifiedDate: 2022-08-09 17:35:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // hash表法
  const hash = new Map();
  for (const num of nums) {
    if (hash.has(num)) {
      hash.set(num, hash.get(num) + 1);
    } else {
      hash.set(num, 1);
    }
  }
  for (const [key, val] of hash) {
    if (val == 1) {
      return key;
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 位运算
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    let sum = 0;
    for (const num of nums) {
      if ((num & (1 << i)) !== 0) {
        sum++;
      }
    }
    if (sum % 3 == 1) {
      ans += Math.pow(2, i);
    }
  }
  return ans;
};
