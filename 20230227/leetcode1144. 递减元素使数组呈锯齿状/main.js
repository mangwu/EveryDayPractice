/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-27 09:26:39                                                  *
 * @LastModifiedDate: 2023-02-27 14:27:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums，每次 操作 会从中选择一个元素并 将该元素的值减少 1。

// 如果符合下列情况之一，则数组 A 就是 锯齿数组：

// 每个偶数索引对应的元素都大于相邻的元素，即 A[0] > A[1] < A[2] > A[3] < A[4] > ...
// 或者，每个奇数索引对应的元素都大于相邻的元素，即 A[0] < A[1] > A[2] < A[3] > A[4] < ...
// 返回将数组 nums 转换为锯齿数组所需的最小操作次数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function (nums) {
  // 两种锯齿方式，进行计算得到后进行比较接口
  let res1 = 0;
  let res2 = 0;
  const n = nums.length;
  const m = nums.slice();
  const copyNums = nums.slice();
  for (let i = 1; i < n; i++) {
    if (i % 2 === 1) {
      if (nums[i] <= nums[i - 1]) {
        res1 += nums[i - 1] + 1 - nums[i];
        nums[i] = nums[i - 1] + 1;
      }
      if (copyNums[i] >= copyNums[i - 1]) {
        res2 += copyNums[i] - copyNums[i - 1] + 1;
        copyNums[i] = copyNums[i - 1] - 1;
      }
    } else {
      if (nums[i] >= nums[i - 1]) {
        res1 += nums[i] - nums[i - 1] + 1;
        nums[i] = nums[i - 1] - 1;
      }
      if (copyNums[i] <= copyNums[i - 1]) {
        res2 += copyNums[i - 1] + 1 - copyNums[i];
        copyNums[i] = copyNums[i - 1] + 1;
      }
    }
  }
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.abs(copyNums[i] - m[i]);
  }
  return Math.min(res1, res2);
};
// 无法将元素增大，所以上述解答错误

// [1,2,1,1,1,2,3,2,5,8,6,9,4,1,2,5,5,8,9,11,23,2,1,2,4,5,8,6,2]
// [1,0,1,0,1,0,3,2,5,4,6,5,6, 1, 2, 1, 5, 4,9, 8, 23, 2, 3, 2, 4, 3, 8,6, 7]
//    3   1   2       4   4

/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function (nums) {
  // 两种锯齿方式，进行计算得到后进行比较接口
  let res1 = 0;
  let res2 = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    let left = i > 0 ? nums[i - 1] : Infinity;
    let right = i < n - 1 ? nums[i + 1] : Infinity;
    let cur = Math.min(left, right) - 1;
    if (i % 2 == 0) {
      // 偶数位变小
      res1 += nums[i] <= cur ? 0 : nums[i] - cur;
    } else {
      // 奇数位变小
      res2 += nums[i] <= cur ? 0 : nums[i] - cur;
    }
  }
  return Math.min(res1, res2);
};
