/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-14 18:40:00                                                  *
 * @LastModifiedDate: 2022-03-14 19:52:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

// 算法的时间复杂度应该为 O(log (m+n)) 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  // 二分插入法
  const len1 = nums1.length;
  const len2 = nums2.length;
  let left = 0;
  if (len1 < len2) {
    findMedianSortedArrays(nums2, nums1);
  }
  // 将第二个数组元素插入到nums1
  for (let i = 0; i < len2; i++) {
    left = binarySearch(nums1, nums2[i], left);
    // 插入到left索引前
    nums1.splice(left, 0, nums2[i]);
  }
  let ans = 0;
  const len = nums1.length;
  if (len % 2 == 0) {
    // 偶数个
    ans = ((nums1[len / 2] + nums1[len / 2 - 1]) / 2).toFixed(5);
  } else {
    // 奇数个
    ans = nums1[Math.floor((len1 + len2) / 2)].toFixed(5);
  }
  // console.log(nums1);
  return ans;
};
const binarySearch = (nums, target, left = 0) => {
  // [0, right]
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    // 找到相同mid，放在其后
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      // 选择左边[left, mid - 1]
      right = mid - 1;
    } else {
      // 选择右边[mid+1, right]
      left = mid + 1;
    }
  }
  return left;
};
binarySearch([2, 5, 6, 7, 8, 10], 12);

// 使用双指针

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays2 = function (nums1, nums2) {
  // 双指针法
  const len1 = nums1.length;
  const len2 = nums2.length;
  let i = 0;
  let j = 0;
  let ans = [];
  let mid = (len1 + len2) / 2;
  while ((i < len1 || j < len2) && i + j <= mid) {
    if (i == len1) {
      ans.push(nums2[j]);
      j++;
      continue;
    }
    if (j == len2) {
      ans.push(nums1[i]);
      i++;
      continue;
    }
    if (nums1[i] > nums2[j]) {
      ans.push(nums2[j]);
      j++;
    } else {
      ans.push(nums1[i]);
      i++;
    }
  }
  const len = len1 + len2;
  const anslen = ans.length;
  console.log(ans);
  if (len % 2 == 0) {
    return ((ans[anslen - 1] + ans[anslen - 2]) / 2).toFixed(5);
  } else {
    return ans[anslen - 1].toFixed(5);
  }
};
findMedianSortedArrays2(
  [1, 3, 7, 15, 47, 56],
  [2, 4, 6, 9, 14, 28, 37, 46, 78, 98]
);
// 2 3 4 5 5 6 7 7 8 10
