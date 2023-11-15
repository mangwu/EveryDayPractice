/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-11-15 09:06:37                                                  *
 * @LastModifiedDate: 2023-11-15 09:10:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 和一个整数 k 。你需要执行以下操作 恰好 k 次，最大化你的得分：

// 从 nums 中选择一个元素 m 。
// 将选中的元素 m 从数组中删除。
// 将新元素 m + 1 添加到数组中。
// 你的得分增加 m 。
// 请你返回执行以上操作恰好 k 次后的最大得分。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  let max = Math.max.apply(null, nums);
  return ((max + max + k - 1) * k) / 2;
};
