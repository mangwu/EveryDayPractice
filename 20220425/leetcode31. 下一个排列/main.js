/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-25 14:17:09                                                  *
 * @LastModifiedDate: 2022-04-25 15:21:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。

// 例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
// 整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。
// 更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，
// 那么数组的 下一个排列 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，
// 那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。

// 例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
// 类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
// 而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
// 给你一个整数数组 nums ，找出 nums 的下一个排列。

// 必须 原地 修改，只允许使用额外常数空间。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  // 字典顺序其实就是0 1 2 3 4 5 6 7 8 9 构成的十叉树
  // 转化成字符串后就能比较出字典大小顺序
  const len = nums.length;
  let hasNext = false;
  for (let i = len - 1; i >= 1; i--) {
    if (nums[i].toString() > nums[i - 1].toString()) {
      // 找到了需要进行操作的子数组头部i
      // 找到第一个最接近该元素的数组索引，替换后将子数组翻转
      hasNext = true;
      for (let j = len - 1; j >= i; j--) {
        if (nums[j].toString() > nums[i - 1].toString()) {
          // 交换
          [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];
          break;
        }
      }
      // 交换后面的子数组
      //
      for (let j = len - 1; j >= (len - 1 + i) / 2; j--) {
        [nums[i + len - j - 1], nums[j]] = [nums[j], nums[i + len - j - 1]];
      }
      break;
    }
  }
  if (!hasNext) {
    nums.reverse();
  }
};

// [10,8,11,3]
// [0,9,8,50,2,1] => [0,9,50,1,2,8]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var nextPermutation = function (nums) {
  // 字典顺序其实就是0 1 2 3 4 5 6 7 8 9 构成的十叉树
  // 转化成字符串后就能比较出字典大小顺序
  const len = nums.length;
  let hasNext = false;
  for (let i = len - 1; i >= 1; i--) {
    if (nums[i] > nums[i - 1]) {
      // 找到了需要进行操作的子数组头部i
      // 找到第一个最接近该元素的数组索引，替换后将子数组翻转
      hasNext = true;
      for (let j = len - 1; j >= i; j--) {
        if (nums[j] > nums[i - 1]) {
          // 交换
          [nums[i - 1], nums[j]] = [nums[j], nums[i - 1]];
          break;
        }
      }
      // 交换后面的子数组
      //
      for (let j = len - 1; j >= (len - 1 + i) / 2; j--) {
        [nums[i + len - j - 1], nums[j]] = [nums[j], nums[i + len - j - 1]];
      }
      break;
    }
  }
  if (!hasNext) {
    nums.reverse();
  }
};
