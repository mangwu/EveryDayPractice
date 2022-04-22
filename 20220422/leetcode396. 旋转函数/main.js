/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-22 10:35:12                                                  *
 * @LastModifiedDate: 2022-04-22 14:38:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个长度为 n 的整数数组 nums 。

// 假设 arrk 是数组 nums 顺时针旋转 k 个位置后的数组，我们定义 nums 的 旋转函数  F 为：

// F(k) = 0 * arrk[0] + 1 * arrk[1] + ... + (n - 1) * arrk[n - 1]
// 返回 F(0), F(1), ..., F(n-1)中的最大值 。

// 生成的测试用例让答案符合 32 位 整数。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
  // 如果通过获取所有的F(x)然后比较获得结果，会超时
  // len < 10^5
  // 暴力时间复杂度为O(n^2)，导致超时
  // 所以应该尽可能旋转nums后，大的数在后面，而小的数在前面
  let ans = -Infinity;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = 0; j < len; j++) {
      sum += nums[j] * ((j + i) % len);
    }
    ans = Math.max(ans, sum);
  }
  return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
  // 实际上求得F(x)之间具有如下关系
  // n 时nums长度
  // F(0) = 0 * nums[0] + 1 * nums[1] + ... (n-2) * nums[n-2] + (n-1) * nums[n-1];
  // F(1) = 1 * nums[0] + 2 * nums[1] + ... (n-1) * nums[n-2] + 0 * nums[n-1]
  // F(1) - F(0) = sumNums - n * nums[n-1];
  // 其中nums[n-1] 是F(0)时的最后一个元素
  // F(x) = F(x-1) + sumNums - n * nums[n-x]
  // 求nums的和
  const n = nums.length;
  let sumNums = 0;
  for (let i = 0; i < n; i++) {
    sumNums += nums[i];
  }
  // 求第一个f
  let pre = 0;
  for (let i = 0; i < n; i++) {
    pre += i * nums[i];
  }
  let ans = pre;
  // 根据sumNums和f0求后面的fx
  for (let i = 1; i <= n; i++) {
    pre = pre + sumNums - n * nums[n - i];
    ans = Math.max(ans, pre);
  }
  return ans;
};
