/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-27 18:25:32                                                  *
 * @LastModifiedDate: 2022-04-27 18:31:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。

// 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let idx = 1;
  let pre = nums[0];
  let cnts = 1;
  while (idx < nums.length) {
    if (nums[idx] !== pre) {
      pre = nums[idx];
      cnts = 1;
      idx++;
    } else {
      cnts++;
      if (cnts >= 3) {
        cnts--;
        nums.splice(idx, 1);
      } else {
        idx++;
      }
    }
  }
  return nums.length;
};
