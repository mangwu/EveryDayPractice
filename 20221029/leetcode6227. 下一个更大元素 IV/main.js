/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-29 23:35:29                                                  *
 * @LastModifiedDate: 2022-10-29 23:42:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var secondGreaterElement = function (nums) {
  // 先找出第一大
  const n = nums.length;
  const stack = [];
  const res = new Array(n).fill(-1);
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[stack[stack.length - 1]] <= nums[i]) {
      stack.pop();
    }
    if (stack.length > 0) {
      res[i] = stack[stack.length - 1];
    }
    stack.push(i);
  }
  // 得到了下一个更大的元素
  
};
