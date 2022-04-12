/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-12 23:29:34                                                  *
 * @LastModifiedDate: 2022-04-12 23:40:34                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，设计算法来打乱一个没有重复元素的数组。打乱后，数组的所有排列应该是 等可能 的。

// 实现 Solution class:

// Solution(int[] nums) 使用整数数组 nums 初始化对象
// int[] reset() 重设数组到它的初始状态并返回
// int[] shuffle() 返回数组随机打乱后的结果

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.primaryNums = nums;
  this.set = new Set(new Array(nums.length).fill(0).map((_v, i) => i));
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.primaryNums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  // 打乱
  const set = new Set(this.set);
  let len = set.size;
  const ans = [];
  while (len > 0) {
    let rand = Math.floor(Math.random(0, 1) * len);
    let arr = [...set];
    ans.push(this.primaryNums[arr[rand]]);
    set.delete(arr[rand]);
    len--;
  }
  return ans;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
