/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-15 08:50:05                                                  *
 * @LastModifiedDate: 2022-06-15 09:39:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 数对 (a,b) 由整数 a 和 b 组成，其数对距离定义为 a 和 b 的绝对差值。

// 给你一个整数数组 nums 和一个整数 k ，数对由 nums[i] 和 nums[j]
// 组成且满足 0 <= i < j < nums.length 。返回 所有数对距离中 第 k 小的数对距离。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  // 因为数对的绝对差值一直是正数
  // 所以数对两方的元素是可以调换位置的
  // 可以将nums进行排序
  nums.sort((a, b) => a - b);
  const n = nums.length;
  // 最小的前n-1个数对肯定是相邻的
  // 其次就是相邻1位的n - 2 个数对
  // n - 3
  // ...
  // 1 (首尾数对)

  // 求出k属于那种数对
  // 初始相隔0位
  let idx = 0;
  let sum = 0;
  while (sum < k) {
    idx++;
    sum += n - idx;
  }
  // 相隔 idx位
  // 前面共有的
  sum = sum - (n - idx);
  // 相隔idx的第k位
  k -= sum;
  const adjacent = [];
  for (let i = idx; i < n; i++) {
    adjacent.push(nums[i] - nums[i - idx]);
  }
  // 错误解答 ，当前的隔位相差不一定都是当前最小的
  adjacent.sort((a, b) => a - b);
  return adjacent[k];
};

// [1,5,9,2,4]
// [1,2,4,5,9]
// 1 1 2 3 4

// 相邻的相减并不一定比隔位的相减值小
// 如 9 - 5 = 4 与 5 - 2 = 3

// 如果求出所有相减绝对值，那么时间复杂度会变为O(n^2);

// 数组是有序的，考虑使用二分查找

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function (nums, k) {
  // 因为数对的绝对差值一直是正数
  // 所以数对两方的元素是可以调换位置的
  // 可以将nums进行排序
  nums.sort((a, b) => a - b);
  const n = nums.length;
  // 相邻的相减并不一定比隔位的相减值小
  // 如 9 - 5 = 4 与 5 - 2 = 3

  // 如果求出所有相减绝对值，那么时间复杂度会变为O(n^2);

  // 数组是有序的，考虑使用二分查找
  // 答案值是有范围的:
  let left = 0;
  let right = nums[n - 1] - nums[0];
  // [left, right];
  // 求出小于中间值的配对个数
  // 然后比较配对个数和k的大小，继续二分
  while (left <= right) {
    const mid = (left + right) >> 1;
    let cnt = 0;
    // 求出距离小于等于mid的数对
    // 双指针,初始i,j,计算
    for (let i = 0, j = 0; j < n; j++) {
      while (nums[j] - nums[i] > mid) {
        i++;
      }
      cnt += j - i;
    }
    if (cnt >= k) {
      // 小于等于mid的数对大于等于k
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  // 或者right + 1
  return left;
};
