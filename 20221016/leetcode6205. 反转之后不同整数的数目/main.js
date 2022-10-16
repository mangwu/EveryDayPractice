/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-16 10:32:20                                                  *
 * @LastModifiedDate: 2022-10-16 10:37:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个由 正 整数组成的数组 nums 。

// 你必须取出数组中的每个整数，反转其中每个数位，并将反转后得到的数字添加到数组的末尾。这一操作只针对 nums 中原有的整数执行。

// 返回结果数组中 不同 整数的数目。

/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function (nums) {
  const ans = [];
  for (const num of nums) {
    ans.push(parseInt(num.toString().split("").reverse().join("")));
  }

  return new Set(nums.concat(ans)).size;
};
