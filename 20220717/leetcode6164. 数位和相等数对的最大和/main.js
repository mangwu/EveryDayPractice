/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-17 10:37:26                                                  *
 * @LastModifiedDate: 2022-07-17 10:44:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的数组 nums ，数组中的元素都是 正 整数。请你选出两个下标 i 和 j（i != j），
// 且 nums[i] 的数位和 与  nums[j] 的数位和相等。

// 请你找出所有满足条件的下标 i 和 j ，找出并返回 nums[i] + nums[j] 可以得到的 最大值 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  nums.sort((a, b) => a - b);
  const hash = new Map();
  for (const num of nums) {
    const k = getDigitalAnd(num);
    if (hash.has(k)) {
      const arr = hash.get(k);
      arr.push(num);
      hash.set(k, arr);
    } else {
      hash.set(k, [num]);
    }
  }
  let ans = -1;
  for (const [key, val] of hash) {
    const n = val.length;
    if (n >= 2) {
      ans = Math.max(val[n - 1] + val[n - 2], ans);
    }
  }
  return ans;
};

var getDigitalAnd = (num) => {
  let ans = 0;
  while (num > 0) {
    ans += num % 10;
    num = Math.floor(num / 10);
  }
  return ans;
};
