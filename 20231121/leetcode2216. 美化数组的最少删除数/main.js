/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-11-21 09:04:49                                                  *
 * @LastModifiedDate: 2023-11-21 10:02:33                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums ，如果满足下述条件，则认为数组 nums 是一个 美丽数组 ：

// nums.length 为偶数
// 对所有满足 i % 2 == 0 的下标 i ，nums[i] != nums[i + 1] 均成立
// 注意，空数组同样认为是美丽数组。

// 你可以从 nums 中删除任意数量的元素。当你删除一个元素时，被删除元素右侧的所有元素将会向左移动一个单位以填补空缺，而左侧的元素将会保持 不变 。

// 返回使 nums 变为美丽数组所需删除的 最少 元素数目。

/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function (nums) {
  // dp[i] 以当前元素为结尾的最长美丽数组(不满足偶数个条件)
  const n = nums.length;
  if (n <= 1) return n;
  const dp = new Array(n).fill(0).map((_v) => new Array(2).fill(-1));
  dp[0][0] = 1; // 长度
  dp[0][1] = [-1]; // 上一个元素
  dp[1][0] = 2;
  dp[1][1] = [nums[0]]; // 可能有多个
  let ans = 2;
  for (let i = 2; i < n; i++) {
    let pre1 = dp[i - 1];
    let pre2 = dp[i - 2];
    // 如果选取pre1：
    let cur1 = pre1[0] + 1;
    let ele1 = nums[i - 1];
    if (cur1 % 2 === 1 && pre1[1].every((v) => v === nums[i])) {
      // 需要进行删除操作
      cur1--;
      ele1 = pre1[1];
    }
    let cur2 = pre2[0] + 1;
    let ele2 = nums[i - 2];
    if (cur2 % 2 === 1 && pre2[1].every((v) => v === nums[i])) {
      // 需要进行删除操作
      cur2--;
      ele2 = pre2[1];
    }
    if (cur1 > cur2) {
      dp[i][0] = cur1;
      dp[i][1] = [ele1];
    } else if (cur1 < cur2) {
      dp[i][0] = cur2;
      dp[i][1] = [ele2];
    } else {
      dp[i][0] = cur1;
      dp[i][1] = [ele1, ele2];
    }
    if (dp[i][0] % 2 === 0) {
      ans = Math.max(ans, dp[i][0]);
    }
  }
  return ans;
};
// 1 2 1
// [1,1,2,2,2,2,3,3,3,3,3,4,4,4,4]
// 1 2 2 2 3 3 4 4 4

// [1,1,2,3,2,4,3,8,3,2,3,1,4,3,4]

/**
 * @param {number[]} nums
 * @return {number}
 */
var minDeletion = function (nums) {
  // dp[i] 以当前元素为结尾的最长美丽数组(不满足偶数个条件)
  const n = nums.length;
  if (n <= 1) return n;
  const dp = new Array(n).fill(0);
  dp[0] = 1; // 长度
  dp[1] = nums[0] === nums[1] ? 1 : 2;
  let ans = dp[1] === 1 ? 0 : dp[1];
  for (let i = 2; i < n; i++) {
    let pre1 = dp[i - 1];
    let cur1 = pre1 + 1;
    let pre2 = dp[i - 2];
    let cur2 = pre2 + 1;
    if (pre1 % 2 === 1 && nums[i - 1] === nums[i]) {
      // 需要删除
      cur1--;
    }
    if (pre2 % 2 === 1 && nums[i - 2] === nums[i]) {
      // 需要删除
      cur2--;
    }
    dp[i] = Math.max(cur1, cur2);
    if (dp[i] % 2 === 0) {
      ans = Math.max(ans, dp[i]);
    }
  }
  return n - ans;
};
