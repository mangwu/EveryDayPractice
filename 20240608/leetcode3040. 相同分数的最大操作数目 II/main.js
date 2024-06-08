/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-06-08 22:35:36                                                  *
 * @LastModifiedDate: 2024-06-08 22:53:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，如果 nums 至少 包含 2 个元素，你可以执行以下操作中的 任意 一个：

// 选择 nums 中最前面两个元素并且删除它们。
// 选择 nums 中最后两个元素并且删除它们。
// 选择 nums 中第一个和最后一个元素并且删除它们。
// 一次操作的 分数 是被删除元素的和。

// 在确保 所有操作分数相同 的前提下，请你求出 最多 能进行多少次操作。

// 请你返回按照上述要求 最多 可以进行的操作次数。
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function (nums) {
  const n = nums.length;
  const set = new Set([
    nums[0] + nums[1],
    nums[0] + nums[n - 1],
    nums[n - 1] + nums[n - 2],
  ]);
  return Math.max.apply(
    null,
    [...set].map((v) => help(nums, v))
  );
};

function help(nums, target) {
  const n = nums.length;
  const cache = new Array(n).fill(-1).map((v) => new Array(n).fill(-1));
  const dfs = (left, right, target) => {
    if (left >= right) return 0;
    if (cache[left][right] !== -1) return cache[left][right];
    let res = 0;
    if (nums[left] + nums[right] === target) {
      res = Math.max(dfs(left + 1, right - 1, target) + 1, res);
    }
    if (nums[left] + nums[left + 1] === target && left + 1 !== right) {
      res = Math.max(dfs(left + 2, right, target) + 1, res);
    }
    if (nums[right] + nums[right - 1] === target && right - 1 !== left) {
      res = Math.max(dfs(left, right - 2, target) + 1, res);
    }
    cache[left][right] = res;
    return res;
  };
  const ans = dfs(0, n - 1, target);
  return ans;
}
