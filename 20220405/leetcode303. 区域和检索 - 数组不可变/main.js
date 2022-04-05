/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-05 02:35:54                                                  *
 * @LastModifiedDate: 2022-04-05 03:00:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个整数数组  nums，处理以下类型的多个查询:

// 计算索引 left 和 right （包含 left 和 right）之间的 nums 元素的 和 ，其中 left <= right
// 实现 NumArray 类：

// NumArray(int[] nums) 使用数组 nums 初始化对象
// int sumRange(int i, int j) 返回数组 nums 中索引 left 和 right
// 之间的元素的 总和 ，包含 left 和 right 两点
// （也就是 nums[left] + nums[left + 1] + ... + nums[right] )
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
  this.sums = [];
  let sum = 0;
  for (const num of nums) {
    sum += num;
    this.sums.push(sum);
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.sums[right] - this.sums[left] + this.nums[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
