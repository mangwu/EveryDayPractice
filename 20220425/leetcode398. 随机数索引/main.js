/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-25 10:11:29                                                  *
 * @LastModifiedDate: 2022-04-25 11:18:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个可能含有重复元素的整数数组，要求随机输出给定的数字的索引。 您可以假设给定的数字一定存在于数组中。

// 注意：
// 数组大小可能非常大。 使用太多额外空间的解决方案将不会通过测试。

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  // 使用hash表
  const hash = new Map();
  for (let i = 0; i < nums.length; i++) {
    let arr = hash.get(nums[i]);
    if (arr) {
      arr.push(i);
    } else {
      arr = [i];
    }
    hash.set(nums[i], arr);
  }
  this.hash = hash;
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  const arr = this.hash.get(target);
  let len = arr.length;
  let random = Math.floor(Math.random() * len);
  return arr[random];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  // 使用hash表
  this.nums = nums;
};

/**
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  let ans = 0;
  for (let i = 0, cnt = 0; i < this.nums.length; i++) {
    if (this.nums[i] == target) {
      cnt++;
      if (Math.floor(Math.random() * cnt) === 0) {
        ans = i;
      }
    }
  }
  return ans;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
