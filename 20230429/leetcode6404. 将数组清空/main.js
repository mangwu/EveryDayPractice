/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-29 22:53:46                                                  *
 * @LastModifiedDate: 2023-04-29 22:55:35                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


// 给你一个包含若干 互不相同 整数的数组 nums ，你需要执行以下操作 直到数组为空 ：

// 如果数组中第一个元素是当前数组中的 最小值 ，则删除它。
// 否则，将第一个元素移动到数组的 末尾 。
// 请你返回需要多少个操作使 nums 为空。

/**
 * @param {number[]} nums
 * @return {number}
 */
var countOperationsToEmptyArray = function(nums) {
  const copy = nums.slice().sort((a, b) => a - b);
  
};