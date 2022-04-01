/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-01 22:15:47                                                  *
 * @LastModifiedDate: 2022-04-01 22:59:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  // 暴力解法
  // 迭代
  // 子集中的每个元素有都两种状态，即被选中合未被选中 0 1
  // 使用二级制进行迭代如 1010 表示第2个元素和第4个元素被选中，而其它为未选中
  const len = nums.length;
  const set = new Set();
  for (let i = 0; i < Math.pow(2, len); i++) {
    const sub = [];
    for (let j = 0; j < len; j++) {
      // 如果是重复元素则需要丢弃
      if ((i & (1 << j)) !== 0) {
        sub.push(nums[j]);
      }
    }
    set.add(JSON.stringify(sub.sort((a, b) => a - b)));
  }
  const ans = [...set].map((v) => JSON.parse(v));
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  // 暴力解法
  // 迭代,不使用set去除重复元素，
  // 先将nums进行排序，然后在被选中元素中进行判断
  // 如果前面一个是相同且未被选中就退出循环，不push本次结果
  const len = nums.length;
  nums.sort((a, b) => a - b);
  const ans = [];
  for (let i = 0; i < Math.pow(2, len); i++) {
    const sub = [];
    let flag = false;
    for (let j = 0; j < len; j++) {
      // 如果是重复元素则需要丢弃
      if ((i & (1 << j)) !== 0) {
        // 前面一个元素相同且未被选中
        if (j > 0 && nums[j] == nums[j - 1] && ((i >> (j - 1)) & 1) == 0) {
          flag = true;
          break;
        }
        sub.push(nums[j]);
      }
    }
    if (!flag) {
      ans.push(sub);
    }
  }
  return ans;
};
