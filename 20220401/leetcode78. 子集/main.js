/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-01 16:35:57                                                  *
 * @LastModifiedDate: 2022-04-01 17:34:41                                      *
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
  // 迭代
  // 子集中的每个元素有都两种状态，即被选中合未被选中 0 1
  // 使用二级制进行迭代如 1010 表示第2个元素和第4个元素被选中，而其它为未选中
  const len  = nums.length;
  let ans = [];
  for(let i = 0; i < Math.pow(2, len); i++) {
    const sub = [];
    let j = i;
    while(j > 0) {
      
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
