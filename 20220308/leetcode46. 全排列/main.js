/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-08 10:36:00                                                  *
 * @LastModifiedDate: 2022-03-08 10:53:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // 有nums.length!的排列方式
  // n! = n * (n - 1) * (n - 2) ... 1
  // 所以可以使用递归
  if (nums.length == 1) {
    return [nums.slice()];
  }
  const ans = [];
  // 递归
  for (let i = 0; i < nums.length; i++) {
    const newArr = nums.slice();
    newArr.splice(i, 1);
    const preAns = permute(newArr);
    for (const pre of preAns) {
      pre.push(nums[i]);
      ans.push(pre);
    }
  }
  return ans;
};
permute([1, 2, 3]);
