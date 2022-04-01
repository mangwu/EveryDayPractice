/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-01 16:35:57                                                  *
 * @LastModifiedDate: 2022-04-01 17:18:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // 暴力解法
  const len = nums.length;
  const ans = [[]];
  let preset = new Set();
  preset.add(new Set());
  // 可以根据前面的选择不一样的
  for (let i = 1; i <= len; i++) {
    let subset = [];
    const curSet = new Set();
    for (const item of preset) {
      // 选择i个的子集
      for (let j = 0; j < len; j++) {
        if (!item.has(nums[j])) {
          // 没有就添加
          subset.push([nums[j], ...item]);
        }
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  // 暴力解法
  // 递归解法
  // nums的所有子集等于每个单独的子集合nums.slice(1)的子集
  const len = nums.length;
  if (len == 1) {
    return [[], [nums[0]]];
  }
  let subset = subsets(nums.slice(1));
  let ans = [];
  for (const sub of subset) {
    ans.push([...sub, nums[0]]);

    ans.push(sub);
  }
  return ans;
};
