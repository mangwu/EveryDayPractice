/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-08 19:54:10                                                  *
 * @LastModifiedDate: 2022-10-08 20:50:41                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定两个大小相等的数组 nums1 和 nums2，
// nums1 相对于 nums2 的优势可以用满足 nums1[i] > nums2[i] 的索引 i 的数目来描述。

// 返回 nums1 的任意排列，使其相对于 nums2 的优势最大化。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
  const hash = new Map();
  const n = nums2.length;
  // 记录nums2的位置
  for (let i = 0; i < n; i++) {
    hash.has(nums2[i]) ? hash.get(nums2[i]).push(i) : hash.set(nums2[i], [i]);
  }
  // 排序
  nums2.sort((a, b) => a - b);
  nums1.sort((a, b) => a - b);
  const set = [];
  // 双指针
  const ans = new Array(n).fill(-1);
  let j = 0;
  for (let i = 0; i < n && j < n; i++) {
    while (j < n) {
      if (nums1[j] > nums2[i]) {
        // 选择该元素
        let idx = hash.get(nums2[i]).pop();
        ans[idx] = nums1[j];
        j++;
        break;
      } else {
        set.push(nums1[j]);
        j++;
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (ans[i] === -1) {
      ans[i] = set.pop();
    }
  }
  return ans;
};
