/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-02-06 21:57:45                                                  *
 * @LastModifiedDate: 2024-02-06 22:51:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 小扣当前位于魔塔游戏第一层，共有 N 个房间，编号为 0 ~ N-1。每个房间的补血道具/怪物对于血量影响记于数组 nums，其中正数表示道具补血数值，即血量增加对应数值；负数表示怪物造成伤害值，即血量减少对应数值；0 表示房间对血量无影响。

// 小扣初始血量为 1，且无上限。假定小扣原计划按房间编号升序访问所有房间补血/打怪，为保证血量始终为正值，小扣需对房间访问顺序进行调整，每次仅能将一个怪物房间（负数的房间）调整至访问顺序末尾。请返回小扣最少需要调整几次，才能顺利访问所有房间。若调整顺序也无法访问完全部房间，请返回 -1。

/**
 * @param {number[]} nums
 * @return {number}
 */
var magicTower = function (nums) {
  // 如果nums之和小于0(因为初始血量为1)，那么怎么调整都不行
  const sum = nums.reduce((pre, cur) => pre + cur, 0);
  if (sum < 0) return -1;
  const n = nums.length;
  const dp = new Array(n).fill(0).map((v) => new Array(2).fill(-1));
  // dp[i][0] 是不移动本数的结果，dp[i][1] 是移动本数的结果
  if (nums[0] >= 0) {
    dp[0][0] = [0, nums[0] + 1]; // 移动次数 和 当前血量
    dp[0][1] = [1, 1];
  } else {
    dp[0][0] = [Infinity, nums[0] + 1];
    dp[0][1] = [1, 1];
  }
  for (let i = 1; i < n; i++) {
    const [[num1, sum1], [num2, sum2]] = dp[i - 1];
    // 本数不移动
    const curSum11 = sum1 + nums[i];
    const curSum12 = sum2 + nums[i];
    if (curSum11 <= 0 && curSum12 <= 0) {
      dp[i][0] = [Infinity, Math.max(curSum11, curSum12)];
    } else if (curSum12 <= 0) {
      dp[i][0] = [num1, curSum11];
    } else if (curSum11 <= 0) {
      dp[i][0] = [num2, curSum12];
    } else {
      if (num1 < num2) {
        dp[i][0] = [num1, curSum11];
      } else if (num1 > num2) {
        dp[i][0] = [num2, curSum12];
      } else {
        dp[i][0] = [num1, Math.max(curSum11, curSum12)];
      }
    }
    // 本数移动，和就是sum1和sum2
    const curNum1 = num1 + 1;
    const curNum2 = num2 + 1;
    if (curNum1 < curNum2) {
      dp[i][1] = [curNum1, sum1];
    } else if (curNum1 > curNum2) {
      dp[i][1] = [curNum2, sum2];
    } else {
      dp[i][1] = [curNum1, Math.max(sum1, sum2)];
    }
  }
  console.log(dp);
  return Math.min(dp[n - 1][0][0], dp[n - 1][1][0]);
};

// 上述动态规划解答错误，例如[5,-4,1,-2,-2,-2,4]
// 