/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-08-27 09:01:16                                                  *
 * @LastModifiedDate: 2024-08-28 00:29:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 。数组 nums 的 唯一性数组 是一个按元素从小到大排序的数组，包含了 nums 的所有
// 非空子数组中
// 不同元素的个数。

// 换句话说，这是由所有 0 <= i <= j < nums.length 的 distinct(nums[i..j]) 组成的递增数组。

// 其中，distinct(nums[i..j]) 表示从下标 i 到下标 j 的子数组中不同元素的数量。

// 返回 nums 唯一性数组 的 中位数 。

// 注意，数组的 中位数 定义为有序数组的中间元素。如果有两个中间元素，则取值较小的那个。

/**
 * @param {number[]} nums
 * @return {number}
 */
var medianOfUniquenessArray = function (nums) {
  const n = nums.length;
  // 共有 (n + 1)*n/2个子数组
  // 中位数位置为 (n + 1) * n / 4
  const median = Math.ceil((n * (n + 1)) / 4);

  // 假设C(t)是最多t个不同元素的子数组个数
  // t越大，要包含的不同元素越多，子数组的长度越长，个数也就越多，C(t)越大
  // 由其单调性可以使用二分查找，找到t的上限，让C(t) >= median时最小的t，这个t就是中位数
  const check = (t) => {
    // 检查C(t)是否大于等于median
    const cnt = new Map();
    let total = 0; // 当最多不同元素为t时的子数组个数
    for (let i = 0, j = 0; i < n; i++) {
      // 找到以i为尾部，不同元素个数小于等于t的子数组个数
      cnt.set(nums[i], (cnt.get(nums[i]) || 0) + 1);
      while (cnt.size > t) {
        cnt.set(nums[j], cnt.get(nums[j]) - 1);
        if (cnt.get(nums[j]) === 0) cnt.delete(nums[j]);
        j++;
      }
      total += i - j + 1; // j是以i为尾部，在不同元素个数小于等于t的条件下，能扩展的最大头部
    }
    return total >= median;
  };
  let left = 1;
  let right = n; // t的最大值为n
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
// n => total => median (从1开始计数)
// 5 => 15    => 8
// 7 => 28    => 14 15
