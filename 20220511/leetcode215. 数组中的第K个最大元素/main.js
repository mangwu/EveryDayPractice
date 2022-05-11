/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-11 11:06:48                                                  *
 * @LastModifiedDate: 2022-05-11 16:13:07                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // 快速排序
  const quickSort = (start, end) => {
    if (start >= end) {
      return;
    }
    let right = end;
    let left = start;
    let temp = nums[start];
    while (right > left) {
      // 左移right，找到第一个比nums[start]小的元素
      while (right > left && nums[right] >= temp) {
        right--;
      }
      // 右移left，找到第一个比nums[start]大的元素
      while (right > left && nums[left] <= temp) {
        left++;
      }
      if (left < right) {
        // 交换元素
        [nums[left], nums[right]] = [nums[right], nums[left]];
      }
    }
    // 找到temp的元素位置，进行交换
    nums[start] = nums[left];
    nums[left] = temp;
    // 查找左右数组
    quickSort(start, left - 1);
    quickSort(left + 1, end);
  };
  const n = nums.length;
  quickSort(0, n - 1);
  return nums[n - k + 1];
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // 随机快排
  // 使用默认第一个为边界值导致起位置可能每次都在最后或最前，这样的时间复杂度最坏的情况下就是O(n^2)
  // 随机快排的思想是选择的边界值为随机的，这样时间复杂度就收敛在O(nlogn)
  const quickSort = (start, end) => {
    if (start >= end) {
      return;
    }
    let right = end;
    let left = start;
    // 随机选取一个
    let random = Math.floor(Math.random() * (end - start + 1)) + start;
    let temp = nums[random];
    nums[random] = nums[left];
    nums[left] = temp;
    while (right > left) {
      // 左移right，找到第一个比nums[start]小的元素
      while (right > left && nums[right] >= temp) {
        right--;
      }
      // 右移left，找到第一个比nums[start]大的元素
      while (right > left && nums[left] <= temp) {
        left++;
      }
      if (left < right) {
        // 交换元素
        [nums[left], nums[right]] = [nums[right], nums[left]];
      }
    }
    // 找到temp的元素位置，进行交换
    nums[start] = nums[left];
    nums[left] = temp;
    // 查找左右数组
    quickSort(start, left - 1);
    quickSort(left + 1, end);
  };
  const n = nums.length;
  quickSort(0, n - 1);
  return nums[n - k];
};

// 分解版本的快速排序
// 将选取随机边界，以选择基准进行划分的功能，和总的递归调用函数进行函数分解
// 随机选取完边界后，调用以基准划分的功能，它能返回选择的中点，供给总的递归调用函数使用
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const romdomPartittion = (start, end) => {
    let random = Math.floor(Math.random() * (end - start + 1)) + start;
    let temp = nums[random];
    nums[random] = nums[start];
    nums[start] = temp;
    return partition(start, end);
  };
  const partition = (start, end) => {
    let left = start;
    let right = end;
    let temp = nums[left];
    while (left < right) {
      // 右指针左移,找到第一个小于temp的元素
      while (left < right && nums[right] >= temp) {
        right--;
      }
      // 左指针右移动。找到第一个大于temp的元素
      while (left < right && nums[left] <= temp) {
        left++;
      }
      if (left < right) {
        // 交换元素
        [nums[left], nums[right]] = [nums[right], nums[left]];
      }
    }
    // 交换temp和left位置的值
    nums[start] = nums[left];
    nums[left] = temp;
    return left;
  };
  const romdomQuickSort = (start, end) => {
    if (start < end) {
      let q = romdomPartittion(start, end);
      romdomQuickSort(start, q - 1);
      romdomQuickSort(q + 1, end);
    }
  };
  const n = nums.length;
  romdomQuickSort(0, n - 1);
  return nums[n - k];
};

// 分解成三个函数树后，可以通过