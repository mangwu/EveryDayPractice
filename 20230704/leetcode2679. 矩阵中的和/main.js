/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-04 09:07:55                                                  *
 * @LastModifiedDate: 2023-07-04 09:13:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的二维整数数组 nums 。一开始你的分数为 0 。你需要执行以下操作直到矩阵变为空：

// 矩阵中每一行选取最大的一个数，并删除它。如果一行中有多个最大的数，选择任意一个并删除。
// 在步骤 1 删除的所有数字中找到最大的一个数字，将它添加到你的 分数 中。
// 请你返回最后的 分数 。

/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function (nums) {
  const m = nums.length;
  const n = nums[0].length;
  nums.forEach((v) => v.sort((a, b) => b - a));
  let res = 0;
  for (let i = 0; i < n; i++) {
    let cur = 0;
    for (let j = 0; j < m; j++) {
      cur = Math.max(cur, nums[j][i]);
    }
    res += cur;
  }
  return res;
};
