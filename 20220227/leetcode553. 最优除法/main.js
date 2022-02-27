/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-02-27 00:23:41                                                  *
 * @LastModifiedDate: 2022-02-27 00:27:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一组正整数，相邻的整数之间将会进行浮点除法操作。例如， [2,3,4] -> 2 / 3 / 4 。

// 但是，你可以在任意位置添加任意数目的括号，来改变算数的优先级。
// 你需要找出怎么添加括号，才能得到最大的结果，并且返回相应的字符串格式的表达式。
// 你的表达式不应该含有冗余的括号。

/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function (nums) {
  // 实际上考察的是数组与字符串处理，让后面的n - 1个数先除，最后用第一个数除就是最大数
  const len = nums.length;
  if (len <= 2) {
    // 对于小于等于2的数，直接方法字符串即可
    return nums.join("/");
  } else {
    return nums[0] + "/(" + nums.slice(1).join("/") + ")";
  }
};
