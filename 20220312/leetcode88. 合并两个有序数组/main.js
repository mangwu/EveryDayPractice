/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-12 17:26:01                                                  *
 * @LastModifiedDate: 2022-03-12 18:02:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。

// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

// 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。
// 为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 即不使用额外空间将nums2合入nums1中
  // 遍历nums2，然后遍历num1
  // 暴力解法 时间复杂度O((m+n)logm+n + n)
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[i - m];
  }
  nums1.sort((a, b) => a - b);
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge2 = function (nums1, m, nums2, n) {
  // hash表法，记录每个数应该插入的位置
  const hash = new Map();
  // 当前指针指向的nums1位置
  let i = 0;
  // 当前指针指向的nums2位置
  let j = 0;

  while (i < m || j < n) {
    // 判断有一个已经遍历完的情况
    if (i == m) {
      hash.set(i + j, nums2[j]);
      j++;
      continue;
    }
    if (j == n) {
      hash.set(i + j, nums1[i]);
      i++;
      continue;
    }

    if (nums1[i] < nums2[j]) {
      hash.set(i + j, nums1[i]);
      i++;
    } else {
      hash.set(i + j, nums2[j]);
      j++;
    }
  }
  for (const [idx, num] of hash) {
    nums1[idx] = num;
  }
};

merge2([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 逆向双指针
  // 不使用额外空间，从后向前遍历，将大者直接放入nums1的后面即可
  let i = m - 1;
  let j = n - 1;
  while (i >= 0 || j >= 0) {
    if (i == -1) {
      nums1[i + j + 1] = nums2[j];
      j--;
      continue;
    }
    if (j == -1) {
      nums1[i + j + 1] = nums1[i];
      i--;
      continue;
    }
    if (nums1[i] > nums2[j]) {
      nums1[i + j + 1] = nums1[i];
      i--;
    } else {
      nums1[i + j + 1] = nums2[j];
      j--;
    }
  }
};
