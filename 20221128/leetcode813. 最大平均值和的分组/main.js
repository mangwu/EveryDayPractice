/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-28 19:11:50                                                  *
 * @LastModifiedDate: 2022-11-28 22:47:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
// 给定数组 nums 和一个整数 k 。我们将给定的数组 nums 分成 最多 k 个相邻的非空子数组 。 分数 由每个子数组内的平均值的总和构成。

// 注意我们必须使用 nums 数组中的每一个数进行分组，并且分数不一定需要是整数。

// 返回我们所能得到的最大 分数 是多少。答案误差在 10-6 内被视为是正确的。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumOfAverages = function (nums, k) {
  // 贪心原则1：k越大越好吗，所以就分为k个子数组
  // 贪心原则2：每个子数组长度越小，其中的单个元素越大越好，这样有利于取大值为平均值
  // 贪心原则3：在尽可能进行第二个原则贪心时，会遇到选取下一个最大值时，分隔的子数组变为k+1的情况
  //          这个时候要选取一个最大的边界值作为最终的结果，而这个边界值只会多生成一个子数组
  const n = nums.length;
  let sum = nums.reduce((pre, (cur) => pre + cur), 0);
  if (k === 1) {
    return sum / n;
  }
  if (k === 2) {
    let ans = 0;
    let curSum = nums[0];
    for (let i = 1; i < n; i++) {
      ans = Math.max(curSum / i + (sum - curSum) / n - i, ans);
    }
    return ans;
  }
  const selected = [];
  const border = [];
  const sorted = nums.slice().sort((a, b) => a - b);
};
