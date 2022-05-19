/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-19 09:00:57                                                  *
 * @LastModifiedDate: 2022-05-19 10:31:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的整数数组 nums ，返回使所有数组元素相等需要的最少移动数。

// 在一步操作中，你可以使数组中的一个元素加 1 或者减 1 。
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  let n = nums.length;
  nums.sort((a, b) => a - b);

  let averge = nums[Math.floor(n / 2)];
  console.log(averge);
  let ans = 0;
  for (const num of nums) {
    ans += Math.abs(num - averge);
  }
  return ans;
};

// 23 / 4 = 5.75
//

// x - 1 + x - 10 + x - 2 + x - 10 + 85 - x + 92 - x + x - 8
// |x - 1| + |x - 2| + |x - 8| + 2|x - 10| + |x - 85| + |x - 92|

// [-∞, 1] 递减
// [1,2] 递减
// [2, 8] 递减
// [8,10] 递减
// [10, 85] 递增
// [85, 92]递增
// [92, ∞]递增
// 最小值在x = 10处
// 即在数组排序后的中点处
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  // 快速排序
  const quickSort = (nums, start, end) => {
    if (start >= end) {
      return;
    }
    let romdom = Math.floor(Math.random() * (end - start + 1)) + start;
    [nums[start], nums[romdom]] = [nums[romdom], nums[start]];
    let temp = nums[start];
    let left = start;
    let right = end;
    while (left < right) {
      while (nums[right] >= temp && left < right) {
        right--;
      }
      // 移动左边，找到第一个比temp大的数
      while (nums[left] <= temp && left < right) {
        left++;
      }
      if (nums[left] > nums[right]) {
        // 进行替换
        [nums[left], nums[right]] = [nums[right], nums[left]];
      }
    }
    // 找到nums[start]的位置
    nums[start] = nums[left];
    nums[left] = temp;
    quickSort(nums, start, left - 1);
    quickSort(nums, left + 1, end);
  };
  const n = nums.length;
  // 快速排序
  quickSort(nums, 0, n - 1);
  let mid = nums[Math.floor(n / 2)];
  let ans = 0;
  for (const num of nums) {
    ans += Math.abs(num - mid);
  }
  return ans;
};
minMoves2([1, -8, -5, 6, 9, 12, 14, 12, -2, -1, 2, 3, 2, 4, -8, 9]);

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  // 快排，中途中止版
  const n = nums.length;

  const mid = randomSelect(nums, 0, n - 1, Math.floor(n / 2));
  let res = 0;
  for (const num of nums) {
    res += Math.abs(mid - num);
  }
  return res;
};
// 快排核心代码
const partition = (nums, start, end) => {
  let left = start;
  let right = end;
  const temp = nums[left];
  while (left < right) {
    while (left < right && nums[right] >= temp) {
      right--;
      // 找到第一个比temp小的数
    }
    while (left < right && nums[left] <= temp) {
      left++;
      // 找到第一个比temp小的数
    }
    if (nums[left] > nums[right]) {
      // 替换
      [nums[left], nums[right]] = [nums[right], nums[left]];
    }
  }
  nums[start] = nums[left];
  nums[left] = temp;
  return left;
};
// 随机选择索引
const randomPartition = (nums, start, end) => {
  const random = Math.floor(Math.random() * (end - start + 1)) + start;
  [nums[start], nums[random]] = [nums[random], nums[start]];
  return partition(nums, start, end);
};
// 随机选择
const randomSelect = (nums, start, end, idx) => {
  const q = randomPartition(nums, start, end);
  if (q == idx) {
    return nums[q];
  } else {
    return q < idx
      ? randomSelect(nums, q + 1, end, idx)
      : randomSelect(nums, start, q - 1, idx);
  }
};
