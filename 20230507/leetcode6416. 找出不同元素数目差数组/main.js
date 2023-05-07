/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-07 10:30:38                                                  *
 * @LastModifiedDate: 2023-05-07 11:07:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的数组 nums ，数组长度为 n 。

// nums 的 不同元素数目差 数组可以用一个长度为 n 的数组 diff 表示，其中 diff[i] 等于前缀 nums[0, ..., i] 中不同元素的数目 减去 后缀 nums[i + 1, ..., n - 1] 中不同元素的数目。

// 返回 nums 的 不同元素数目差 数组。

// 注意 nums[i, ..., j] 表示 nums 的一个从下标 i 开始到下标 j 结束的子数组（包含下标 i 和 j 对应元素）。特别需要说明的是，如果 i > j ，则 nums[i, ..., j] 表示一个空子数组。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function (nums) {
  const hash = new Map();
  for (const num of nums) {
    if (hash.has(num)) {
      hash.set(num, hash.get(num) + 1);
    } else {
      hash.set(num, 1);
    }
  }
  const set = new Set();
  const ans = [];
  for (const num of nums) {
    set.add(num);
    const rightNum = hash.get(num);
    if (rightNum === 1) {
      hash.delete(num);
    } else {
      hash.set(num, rightNum - 1);
    }
    ans.push(set.size - hash.size);
  }
  return ans;
};
