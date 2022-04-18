/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-18 14:02:46                                                  *
 * @LastModifiedDate: 2022-04-18 14:27:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。
// 返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。
// 可以不考虑输出结果的顺序。
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // 使用一个hash记录其中一个的元素和数量
  const len1 = nums1.length;
  const len2 = nums2.length;
  // 有空数组
  if (!(len1 * len2)) {
    return [];
  }
  const hash = new Map();
  const ans = [];
  for (let i = 0; i < len1; i++) {
    const num = hash.get(nums1[i]);
    hash.set(nums1[i], num ? num + 1 : 1);
  }
  for (let i = 0; i < len2; i++) {
    if (hash.has(nums2[i])) {
      ans.push(nums2[i]);
      const num = hash.get(nums2[i]);
      if (num == 1) {
        hash.delete(nums2[i]);
      } else {
        hash.set(nums2[i], num - 1);
      }
    }
  }
  return ans;
};

// 如果两个数组是排好序的，那么使用双指针可以避免hash表的O(min(m,n))空间复杂度
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  // 使用一个hash记录其中一个的元素和数量
  const len1 = nums1.length;
  const len2 = nums2.length;
  // 有空数组
  if (!(len1 * len2)) {
    return [];
  }
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 0;
  const ans = [];
  while (p1 < len1 && p2 < len2) {
    if (nums1[p1] == nums2[p2]) {
      ans.push(nums1[p1]);
      p1++;
      p2++;
      continue;
    }
    if (nums1[p1] > nums2[p2]) {
      p2++;
    } else {
      p1++;
    }
  }
  return ans;
};
