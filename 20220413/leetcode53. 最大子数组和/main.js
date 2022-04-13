/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-13 13:43:35                                                  *
 * @LastModifiedDate: 2022-04-13 23:28:55                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 子数组 是数组中的一个连续部分。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 动态规划
  let max = -Infinity;
  let curMax = 0;
  for (let i = 0; i < nums.length; i++) {
    curMax += nums[i];
    max = Math.max(curMax, max);

    if (curMax < 0) {
      // 重新开始计算
      curMax = 0;
    }
  }
  return max;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 如果使用f(i)表示已第i个元素结尾的连续子数组最大和，那么本题答案就是Math.max({f(i)}(0<=i<len))
  // 求f(i)的值有两种情况：
  // ①自身独立组成一个子数组(当前面的f(i-1)是负数时就会出现这种情况)
  // ②和前面一个元素的最大子数组和组成
  // 所以f(i) = max(f(i-1) + nums[i],nums[i])
  const len = nums.length;
  const dp = new Array(len).fill(0);
  let max = nums[0];
  dp[0] = nums[0];
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    max = Math.max(max, dp[i]);
  }
  return max;
};

// 因为状态转化方程只使用到了前面的一个dp值，所以不需要保存所有的dp值，使用一个变量保存上一个值即可
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // 如果使用f(i)表示已第i个元素结尾的连续子数组最大和，那么本题答案就是Math.max({f(i)}(0<=i<len))
  // 求f(i)的值有两种情况：
  // ①自身独立组成一个子数组(当前面的f(i-1)是负数时就会出现这种情况)
  // ②和前面一个元素的最大子数组和组成
  // 所以f(i) = max(f(i-1) + nums[i],nums[i])
  const len = nums.length;
  let max = nums[0];
  let pre = nums[0];
  for (let i = 1; i < len; i++) {
    let curMax = Math.max(pre + nums[i], nums[i]);
    max = Math.max(max, curMax);
    pre = curMax;
  }
  return max;
};

// 分治算法
/**
 * @description 定义每一个分治区间的状态
 * @param {Number} l 以左边为起始的最大子连续子数组和
 * @param {Number} r 以右边为结束的最大子连续子数组和
 * @param {Number} m 最大连续子数组和
 * @param {Number} i 区间总和
 */
function Status(l, r, m, i) {
  this.lSum = l;
  this.rSum = r;
  this.mSum = m;
  this.iSum = i;
}

/**
 * @description 获取左右区间合并后的状态
 * @param {Status} l 左区间的状态
 * @param {Status} r 右区间的状态
 * @returns {Status} 获取左右区间合并的区间的状态
 */
const pushUp = (l, r) => {
  // 总和
  const iSum = l.iSum + r.iSum;
  // 以左边为起始的最大连续子数组 =>
  // 两种情况经过或者没有经过中间点 => 左区间的lSum和左区间的iSum+右区间的lSum
  const lSum = Math.max(l.lSum, l.iSum + r.lSum);
  const rSum = Math.max(r.rSum, r.iSum + l.rSum);
  const mSum = Math.max(l.mSum, r.mSum, l.rSum + r.lSum);
  return new Status(lSum, rSum, mSum, iSum);
};
/**
 * @description 求得区间的状态(Status)
 * @param {Array} a 区间数组
 * @param {Number} l 区间起始索引
 * @param {Number} r 区间终止索引
 */
const getInfo = (a, l, r) => {
  // [i,i]区间时
  if (l === r) {
    return new Status(a[l], a[l], a[l], a[l]);
  }
  // 中间索引
  const m = (l + r) >> 1;
  // 获取左边的状态
  const lSub = getInfo(a, l, m);
  // 获取右边的状态
  const rSub = getInfo(a, m + 1, r);
  // 计算出左右区间整合一起时的状态
  return pushUp(lSub, rSub);
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  return getInfo(nums, 0, nums.length - 1).mSum;
};
