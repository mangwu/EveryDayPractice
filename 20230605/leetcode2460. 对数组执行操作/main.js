/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-05 08:57:57                                                  *
 * @LastModifiedDate: 2023-06-05 09:03:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的数组 nums ，数组大小为 n ，且由 非负 整数组成。

// 你需要对数组执行 n - 1 步操作，其中第 i 步操作（从 0 开始计数）要求对 nums 中第 i 个元素执行下述指令：

// 如果 nums[i] == nums[i + 1] ，则 nums[i] 的值变成原来的 2 倍，nums[i + 1] 的值变成 0 。否则，跳过这步操作。
// 在执行完 全部 操作后，将所有 0 移动 到数组的 末尾 。

// 例如，数组 [1,0,2,0,0,1] 将所有 0 移动到末尾后变为 [1,2,1,0,0,0] 。
// 返回结果数组。

// 注意 操作应当 依次有序 执行，而不是一次性全部执行。
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    if (nums[i - 1] === nums[i]) {
      nums[i - 1] *= 2;
      nums[i] = 0;
    }
  }
  const ans = new Array(n).fill(0);
  for (let i = 0, j = 0; i < n; i++) {
    if (nums[i] !== 0) {
      ans[j] = nums[i];
      j++;
    }
  }
  return ans;
};
