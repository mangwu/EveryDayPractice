/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-10 23:08:38                                                  *
 * @LastModifiedDate: 2023-06-10 23:59:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const MOD = 10 ** 9 + 7;
/**
 * @param {number[]} nums
 * @param {string} s
 * @param {number} d
 * @return {number}
 */
var sumDistance = function (nums, s, d) {
  // LR不会触发碰撞
  // RL会触发碰撞
  // 所有机器人之间的距离就是第一个机器人和最后一个机器人之间的距离
  // 将nums进行排列
  const n = nums.length;
  const arr = new Array(n).fill(0).map((_v, i) => i);
  // 按照nums进行排列
  arr.sort((a, b) => nums[a] - nums[b]);
  nums.sort((a, b) => a - b);
  // 如果 正好是 LR 则第一个和最后一个没有影响
  const first = s[arr[0]];
  const last = s[arr[n - 1]];
  if (first === "L" && last === "R") {
    return (nums[n - 1] - nums[0] + d * 2) % MOD;
  }
  if (first === "L" && last === "L") {
    // 都向左边，从最后一个开始找到第一个向右的
    let i = n - 2;
    for (; i > 0; i--) {
      if (s[arr[i]] === "R") {
        // 找到了，根据方向传递原则，中间的不会影响最终的方向
        let target = nums[n - 1] - nums[i];
        // 计算移动距离
        if (d * 2 <= target) {
          // 一直处于左移状态
          return (nums[n - 1] - nums[0]) % MOD;
        } else {
          // 有多少天处于右移状态
          d = d - target / 2;
          return (nums[n - 1] - nums[0] + d * 2) % MOD;
        }
      }
    }
    // 没有，那么全部是L，直接返回最终距离
    return (nums[n - 1] - nums[0]) % MOD;
  }
  if (first === "R" && last === "R") {
    // 都是右边
    let i = 1;
    for (; i < n - 1; i++) {
      if (s[arr[i]] === "L") {
        let target = nums[i] - nums[0];
        if (d * 2 <= target) {
          return (nums[n - 1] - nums[0]) % MOD;
        } else {
          d = d - target / 2;
          return (nums[n - 1] - nums[0] + d * 2) % MOD;
        }
      }
    }
    return (nums[n - 1] - nums[0]) % MOD;
  }
  if (first === "R" && last === "L") {
    let i = 1;
    for (; i < n; i++) {
      if (s[arr[i]] === "L") {
        break;
      }
    }
    let j = n - 2;
    for (; j >= 0; j--) {
      if (s[arr[j]] === "R") {
        break;
      }
    }
    if (i < j) {
      let targetLeft = nums[i] - nums[0];
      // 计算最终位置
      let left = nums[0];
      if (d * 2 <= targetLeft) {
        // 未碰到
        left = left + d;
      } else {
        // 碰到了
        d = d - targetLeft / 2;
        left = left + targetLeft / 2 - d;
      }
      let right = nums[n - 1];
      let targetRight = nums[n - 1] - nums[j];
      if (d * 2 <= targetRight) {
        // 未碰到
        right = left - d;
      } else {
        // 碰到了
        d = d - targetLeft / 2;
        left = left - targetLeft / 2 + d;
      }
      return (right - left) % MOD;
    } else {
      // 相当于二者相碰
      let target = nums[n - 1] - nums[0];
      if (d * 2 <= target) {
        return (nums[n - 1] - nums[0] - 2 * d) % MOD;
      } else {
        d = d - target / 2;
        return (d * 2) % MOD;
      }
    }
  }
};
// 0  0,4
// 1  1,3
// 2  2,2
// 3  1,3

// 0  0,5   -1
// 1  1,4   -2
// 2  2,3   -3
// 3  2,3   -4
// 4  1,4

// 0  0,2,4
// 1  1,1,3
// 2  0,2,2
// 3 -1,3,3

// 0  0,1,4
// 1  0,1,3
// 2 -1,2,2
// 3 -2,1,3

// 0  0,3,4
// 1  1,2,3
// 2  1,2,2
// 3  0,1,3
