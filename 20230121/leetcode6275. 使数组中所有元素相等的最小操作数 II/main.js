/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-21 22:33:40                                                  *
 * @LastModifiedDate: 2023-01-21 22:48:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个整数数组 nums1 和 nums2 ，两个数组长度都是 n ，再给你一个整数 k 。你可以对数组 nums1 进行以下操作：

// 选择两个下标 i 和 j ，将 nums1[i] 增加 k ，将 nums1[j] 减少 k 。换言之，nums1[i] = nums1[i] + k 且 nums1[j] = nums1[j] - k 。
// 如果对于所有满足 0 <= i < n 都有 num1[i] == nums2[i] ，那么我们称 nums1 等于 nums2 。

// 请你返回使 nums1 等于 nums2 的 最少 操作数。如果没办法让它们相等，请你返回 -1 。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums1, nums2, k) {
  // 和值必须相同
  // 每个位的差值必须是k的倍数
  const n = nums1.length;
  let diff = 0;
  let res = 0;
  if (k === 0) {
    // 要每个元素都相同
    for (let i = 0; i < n; i++) {
      if (nums1[i] !== nums2[i]) return -1;
    }
    return 0;
  }
  for (let i = 0; i < n; i++) {
    let curDiff = nums1[i] - nums2[i]; // 减去的数
    if (curDiff % k !== 0) return -1;
    res += Math.abs(curDiff / k);
    diff += curDiff / k;
  }
  if (diff !== 0) return -1;
  return res / 2;
};
