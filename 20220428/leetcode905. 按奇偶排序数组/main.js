/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-28 11:07:59                                                  *
 * @LastModifiedDate: 2022-04-28 11:15:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给你一个整数数组 nums，将 nums 中的的所有偶数元素移动到数组的前面，后跟所有奇数元素。

// 返回满足此条件的 任一数组 作为答案。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  while (left < right) {
    // 奇数移到后面
    if (nums[left] % 2 == 1) {
      while (nums[right] % 2 == 1 && right > left) {
        right--;
      }
      if (right <= left) {
        break;
      } else {
        [nums[left], nums[right]] = [nums[right], nums[left]];
      }
    }
    left++;
  }
  return nums;
};
