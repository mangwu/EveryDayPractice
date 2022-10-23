/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-23 11:11:19                                                  *
 * @LastModifiedDate: 2022-10-23 12:00:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个下标从 0 开始的数组 nums 和 cost ，分别包含 n 个 正 整数。

// 你可以执行下面操作 任意 次：

// 将 nums 中 任意 元素增加或者减小 1 。
// 对第 i 个元素执行一次操作的开销是 cost[i] 。

// 请你返回使 nums 中所有元素 相等 的 最少 总开销。

/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function (nums, cost) {
  const hash = new Map();
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    hash.has(num) ? hash.get(num).push(cost[i]) : hash.set(num, [cost[i]]);
  }
  nums.sort((a, b) => a - b);
  cost = [];

  for (let i = 0; i < n; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }
    for (const c of hash.get(nums[i])) {
      cost.push(c);
    }
  }
  // 所有常数之和
  let init = 0;
  // 求常数的开始索引
  let start = 1;
  while (nums[start] === nums[0]) {
    start++;
  }
  if (start == n) {
    return 0;
  }
  // 左边的x系数
  let left = 0;
  // 中间的x系数
  let mid = 0;
  // 右边的x系数
  let right = 0;
  // 求init和right
  for (let i = start; i < n; i++) {
    init += cost[i] * nums[i];
    right -= cost[i];
  }
  // ans初始值
  let ans = right * nums[0] + init;
  // 保存下一个要比较的索引
  let idx = start;
  // 左边的常数和
  let pre = 0;
  // 求左边的常数和和中间的x系数
  for (let i = 0; i < start; i++) {
    pre += nums[i] * cost[i];
    mid += cost[i];
  }
  // 减去左边的常数和
  init -= pre;
  // 从nums[0] + 1开始计算
  for (let i = nums[0] + 1; i <= nums[n - 1]; i++) {
    // 遇到相同值，可以对常数和系数进行修改
    if (i === nums[idx]) {
      pre = 0;
      left += mid;
      mid = 0;
      while (nums[idx] === nums[start]) {
        pre += nums[idx] * cost[idx];
        mid += cost[idx];
        idx++;
      }
      right += mid;
      init -= pre;
      start = idx;
    }
    // 比较
    ans = Math.min(ans, (right + left) * i + init);
  }
  return ans;
};

// let init = (x - 1) * 2 + (x - 3) * 3 + (x - 5) * 1 + (x - 2) * 14
