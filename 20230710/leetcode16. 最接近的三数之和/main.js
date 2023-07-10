/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-10 08:44:11                                                  *
 * @LastModifiedDate: 2023-07-10 09:06:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

// 返回这三个数的和。

// 假定每组输入只存在恰好一个解。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const n = nums.length;
  nums.sort((a, b) => a - b);
  let res = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < n - 2; i++) {
    if (nums[i] === nums[i - 1]) continue;
    let k = n - 1;
    const sub = target - nums[i];
    for (let j = i + 1; j < k; j++) {
      if (j !== i + 1 && nums[j] === nums[j - 1]) continue;
      while (j < k && nums[j] + nums[k] > sub) {
        res = getRes(nums, i, j, k, target, res);
        k--;
      }
      if (j < k) {
        res = getRes(nums, i, j, k, target, res);
      }
    }
  }
  return res;
};

function getRes(nums, i, j, k, target, res) {
  const curSum = nums[i] + nums[j] + nums[k];
  const curSub = Math.abs(curSum - target);
  const resSub = Math.abs(res - target);
  if (curSub < resSub) return curSum;
  return res;
}
