/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-28 11:25:23                                                  *
 * @LastModifiedDate: 2022-02-28 13:53:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // 不能改变复制数组
  // 将0与后面第一个不是0的数换位置即可
  // 记录后面是否以及都为0
  let isAllZero = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      if (isAllZero) {
        break;
      }
      let j;
      for (j = i + 1; j < nums.length; j++) {
        if (nums[j] !== 0) {
          // 替换
          [nums[i], nums[j]] = [nums[j], nums[i]];
          break;
        }
      }
      // 遍历到最后一个了
      if (j == nums.length - 1) {
        isAllZero = true;
      }
    }
  }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes2 = function (nums) {
  // 关注非0元素,将非0元素转移到0的前面
  let num = 0; // 记录非0元素
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      if (num) {
        // 前面有0，左移num位
        [nums[i], nums[i - num]] = [nums[i], nums[i - num]];
      }
    } else {
      // 0个数
      num++;
    }
  }
};
// 上述记录了一个num实际上就是左指针(i - num), 而i就是右指针，即查找到非0数，就将其和左指针指向的第一个0进行替换便可
