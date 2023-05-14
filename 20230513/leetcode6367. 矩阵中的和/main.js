/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-13 22:32:22                                                  *
 * @LastModifiedDate: 2023-05-13 22:38:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的二维整数数组 nums 。一开始你的分数为 0 。你需要执行以下操作直到矩阵变为空：

// 矩阵中每一行选取最大的一个数，并删除它。如果一行中有多个最大的数，选择任意一个并删除。
// 在步骤 1 删除的所有数字中找到最大的一个数字，将它添加到你的 分数 中。
// 请你返回最后的 分数 。

/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function (nums) {
  for (const num of nums) {
    num.sort((a, b) => a - b);
  }
  let res = 0;
  const m = nums[0].length;
  for (let i = 0; i < m; i++) {
    let curMax = 0;
    for (const num of nums) {
      curMax = Math.max(curMax, num.pop());
    }
    res += curMax;
  }
  return res;
};

// [[7,2,1,5,6],[6,4,2,1,5],[6,5,3,8,1],[3,2,1,4,5]]
// 1256  1245 1356 1234   8
// 125   124  135  123    8+6
// 12   12    13    12    14 + 5
// 1   1  1  1   19 + 3
// 0 0 0 0 22 + 1