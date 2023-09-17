/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-16 22:44:40                                                  *
 * @LastModifiedDate: 2023-09-16 23:25:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的 非递减 整数数组 nums 。

// 你可以执行以下操作任意次：

// 选择 两个 下标 i 和 j ，满足 i < j 且 nums[i] < nums[j] 。
// 将 nums 中下标在 i 和 j 处的元素删除。剩余元素按照原来的顺序组成新的数组，下标也重新从 0 开始编号。
// 请你返回一个整数，表示执行以上操作任意次后（可以执行 0 次），nums 数组的 最小 数组长度。

/**
 * @param {number[]} nums
 * @return {number}
 */
var minLengthAfterRemovals = function (nums) {
  // 最大相同元素是否超过一半
  // 如果没有超过一半，则最终答案就是nums.length % 2;
  // 超过了一半再另行计算
  const hash = new Map();
  let maxNum = 1;
  for (const num of nums) {
    hash.set(num, (hash.get(num) | 0) + 1);
    maxNum = Math.max(maxNum, hash.get(num));
  }
  const n = nums.length;
  if (maxNum <= Math.ceil(n / 2)) return n % 2;
  return maxNum - (n - maxNum);
};
