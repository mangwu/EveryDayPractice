/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-19 11:11:52                                                  *
 * @LastModifiedDate: 2023-02-19 11:17:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个 二维 整数数组 nums1 和 nums2.

// nums1[i] = [idi, vali] 表示编号为 idi 的数字对应的值等于 vali 。
// nums2[i] = [idi, vali] 表示编号为 idi 的数字对应的值等于 vali 。
// 每个数组都包含 互不相同 的 id ，并按 id 以 递增 顺序排列。

// 请你将两个数组合并为一个按 id 以递增顺序排列的数组，并符合下述条件：

// 只有在两个数组中至少出现过一次的 id 才能包含在结果数组内。
// 每个 id 在结果数组中 只能出现一次 ，并且其对应的值等于两个数组中该 id 所对应的值求和。如果某个数组中不存在该 id ，则认为其对应的值等于 0 。
// 返回结果数组。返回的数组需要按 id 以递增顺序排列。

/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
  const res = [];
  let idx1 = 0;
  let idx2 = 0;
  while (idx1 < nums1.length || idx2 < nums2.length) {
    if (idx1 === nums1.length) {
      for (let i = idx2; i < nums2.length; i++) {
        res.push(nums2[i]);
      }
      break;
    }
    if (idx2 === nums2.length) {
      for (let i = idx1; i < nums1.length; i++) {
        res.push(nums1[i]);
      }
      break;
    }
    if (nums1[idx1][0] < nums2[idx2][0]) {
      res.push(nums1[idx1++]);
    } else if (nums1[idx1][0] === nums2[idx2][0]) {
      res.push([nums1[idx1][0], nums1[idx1++][1] + nums2[idx2++][1]]);
    } else {
      res.push(nums2[idx2++]);
    }
  }
  return res;
};
