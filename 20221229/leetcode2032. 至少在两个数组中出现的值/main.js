/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-29 09:00:06                                                  *
 * @LastModifiedDate: 2022-12-29 09:07:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你三个整数数组 nums1、nums2 和 nums3 ，请你构造并返回一个 元素各不相同的 数组，
// 且由 至少 在 两个 数组中出现的所有值组成。数组中的元素可以按 任意 顺序排列。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const set3 = new Set(nums3);
  const set = new Set([...nums1, ...nums2, ...nums3]);
  const ans = [];
  for (const item of set) {
    let count = 0;
    if (set1.has(item)) count++;
    if (set2.has(item)) count++;
    if (set3.has(item)) count++;
    if (count >= 2) ans.push(item);
  }
  return ans;
};
