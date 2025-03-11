/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-03-10 16:55:58                                                  *
 * @LastModifiedDate: 2025-03-11 11:25:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 如果连续数字之间的差严格地在正数和负数之间交替，则数字序列称为 摆动序列 。第一个差（如果存在的话）可能是正数或负数。仅有一个元素或者含两个不等元素的序列也视作摆动序列。

// 例如， [1, 7, 4, 9, 2, 5] 是一个 摆动序列 ，因为差值 (6, -3, 5, -7, 3) 是正负交替出现的。

// 相反，[1, 4, 7, 2, 5] 和 [1, 7, 4, 5, 5] 不是摆动序列，第一个序列是因为它的前两个差值都是正数，第二个序列是因为它的最后一个差值为零。
// 子序列 可以通过从原始序列中删除一些（也可以不删除）元素来获得，剩下的元素保持其原始顺序。

// 给你一个整数数组 nums ，返回 nums 中作为 摆动序列 的 最长子序列的长度 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  const n = nums.length;
  let res = 1;
  for (let i = 1; i < n; i++) {
    if (nums[i] - nums[i - 1] !== 0) {
      // 进行摆动序列查找
      let isNeg = nums[i] - nums[i - 1] < 0;
      let j = i + 1;
      while (
        j < n &&
        nums[j] - nums[j - 1] !== 0 &&
        nums[j] - nums[j - 1] > 0 === isNeg
      ) {
        isNeg = !isNeg;
        j++;
      }
      j--;
      res = Math.max(res, j - i + 2);
      i = j;
    }
  }
  return res;
};

//
// [1,17,5,10,13,15,10,5,16,8]
//   +  - +  +  +  -  - +  -

// 上述解答理解有错，应该是摆动序列（可以不连续），而不是摆动数组

/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  // 动态规划
  const n = nums.length;
  const dp = new Array(n).fill(1).map(() => new Array(2).fill(1));
  let res = 1;
  for (let i = 1; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (nums[i] > nums[j]) {
        dp[i][0] = Math.max(dp[i][0], dp[j][1] + 1);
      } else if (nums[i] < nums[j]) {
        dp[i][1] = Math.max(dp[i][1], dp[j][0] + 1);
      }
      res = Math.max(res, dp[i][0], dp[i][1]);
    }
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  // 动态规划
  const n = nums.length;
  const dp = new Array(n).fill(1).map(() => new Array(2).fill(1));
  let res = 1;
  // dp[i][0]最后一个是上升摆动
  // dp[i][1]最后一个是下降摆动
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      dp[i][0] = Math.max(dp[i][0], dp[i - 1][1] + 1, dp[i - 1][0]);
      dp[i][1] = dp[i - 1][1];
    } else if (nums[i] < nums[i - 1]) {
      dp[i][1] = Math.max(dp[i][1], dp[i - 1][0] + 1, dp[i - 1][1]);
      dp[i][0] = dp[i - 1][0];
    } else {
      dp[i][0] = dp[i - 1][0];
      dp[i][1] = dp[i - 1][1];
    }
    res = Math.max(res, dp[i][0], dp[i][1]);
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  // 动态规划
  const n = nums.length;
  let res = 1;
  let up = 1;
  let down = 1;
  // dp[i][0]最后一个是上升摆动
  // dp[i][1]最后一个是下降摆动
  for (let i = 1; i < n; i++) {
    if (nums[i] > nums[i - 1]) {
      up = Math.max(up, down + 1);
    } else if (nums[i] < nums[i - 1]) {
      down = Math.max(down, up + 1);
    }
    res = Math.max(res, up, down);
  }
  return res;
};
