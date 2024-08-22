/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-06-15 22:06:05                                                  *
 * @LastModifiedDate: 2024-06-15 22:57:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 和一个 非负 整数 k 。

// 在一步操作中，你可以执行下述指令：

// 在范围 [0, nums.length - 1] 中选择一个 此前没有选过 的下标 i 。
// 将 nums[i] 替换为范围 [nums[i] - k, nums[i] + k] 内的任一整数。
// 数组的 美丽值 定义为数组中由相等元素组成的最长子序列的长度。

// 对数组 nums 执行上述操作任意次后，返回数组可能取得的 最大 美丽值。

// 注意：你 只 能对每个下标执行 一次 此操作。

// 数组的 子序列 定义是：经由原数组删除一些元素（也可能不删除）得到的一个新数组，且在此过程中剩余元素的顺序不发生改变。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function (nums, k) {
  let res = 1;
  const min = Math.min.apply(null, nums);
  nums = nums.map((v) => v + k - min);
  const max = Math.max.apply(null, nums) + k;
  const arr = new Array(max + 2).fill(0);
  for (const num of nums) {
    arr[num + k + 1]--;
    arr[num - k]++;
  }
  let sum = 0;
  for (const num of arr) {
    sum += num;
    res = Math.max(res, sum);
  }
  return res;
};

// 2
// 2 4 3 5 4 3

// -1 0 1 2 3 4 5 6 7
// -1         1
