/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-04 10:26:11                                                  *
 * @LastModifiedDate: 2022-03-10 19:45:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 。nums 中，子数组的 范围 是子数组中最大元素和最小元素的差值。

// 返回 nums 中 所有 子数组范围的 和 。

// 子数组是数组中一个连续 非空 的元素序列。

// 输入：nums = [1,3,3]
// 输出：4
// 解释：nums 的 6 个子数组如下所示：
// [1]，范围 = 最大 - 最小 = 1 - 1 = 0
// [3]，范围 = 3 - 3 = 0
// [3]，范围 = 3 - 3 = 0
// [1,3]，范围 = 3 - 1 = 2
// [3,3]，范围 = 3 - 3 = 0
// [1,3,3]，范围 = 3 - 1 = 2
// 所有范围的和是 0 + 0 + 0 + 2 + 0 + 2 = 4

/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
  // 不能排序 因为子数组是数组中一个连续的非空元素序列
  // 滑动窗口的大小
  let size = 1;
  // 长度
  const len = nums.length;
  let sum = 0;
  // 开始遍历
  while (size < len) {
    for (let i = size; i < len; i++) {
      const arr = nums.slice(i - size, i + 1).sort((a, b) => a - b);
      sum += arr[size] - arr[0];
    }
    size++;
  }
  return sum;
};
// 上面方法使用sort排序每一个数组会超时

subArrayRanges([4, -2, -3, 4, 1]);

/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges2 = function (nums) {
  // 需要维护两个遍历保存最大值和最小值
  // 不使用滑动窗口，而是普通遍历，从0开始
  let min = 0,
    max = 0;
  const len = nums.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    min = nums[i];
    max = nums[i];
    for (let j = i + 1; j < len; j++) {
      // 计算得出最大值和最小值
      min = Math.min(min, nums[j]);
      max = Math.max(max, nums[j]);
      sum += max - min;
    }
  }
  console.log(sum);
  return sum;
};

subArrayRanges2([4, -2, -3, 4, 1]);

/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges2 = function (nums) {
  // 单调栈
  const len = nums.length;
  let s = [];
  const lsmall = [];
  const rsmall = [];
  const llarge = [];
  const rlarge = [];

  for (let i = 0; i < len; i++) {
    while (s.length > 0 && nums[s[s.length - 1]] >= nums[i]) {
      // 大于当前值就不是最近小于当前元素的节点（同时排除相等值）
      s.pop();
    }
    // 左侧范围是自己就记录-1即可
    lsmall[i] = s.length ? s[s.length - 1] : -1;
    s.push(i);
  }
  s = [];
  for (let i = len - 1; i >= 0; i--) {
    while (s.length > 0 && nums[s[s.length - 1]] > nums[i]) {
      // 大于当前值就不是最近小于当前元素的节点（同时排除相等值）
      s.pop();
    }
    // 右侧范围是自己就记录-1即可
    rsmall[i] = s.length ? s[s.length - 1] : len;
    s.push(i);
  }
  s = [];
  for (let i = 0; i < len; i++) {
    while (s.length > 0 && nums[s[s.length - 1]] <= nums[i]) {
      // 小于当前值就不是最近的大于当前元素的节点（同时排除相同值）
      s.pop();
    }
    // 左侧范围是自己就记录-1
    llarge[i] = s.length ? s[s.length - 1] : -1;
    s.push(i);
  }
  s = [];
  for (let i = len - 1; i >= 0; i--) {
    while (s.length > 0 && nums[s[s.length - 1]] < nums[i]) {
      // 小于当前值就不是最近的大于当前元素的节点（同时排除相同值）
      s.pop();
    }
    // 右侧范围是自己就记录-1
    rlarge[i] = s.length ? s[s.length - 1] : len;
    s.push(i);
  }
  let ans = 0;
  for (let i = 0; i < len; i++) {
    // 加最大值之和
    ans += nums[i] * (i - llarge[i]) * (rlarge[i] - i);
    // 减去最小值之和
    ans -= nums[i] * (i - lsmall[i]) * (rsmall[i] - i);
  }
  return ans;
};
