/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-22 17:36:45                                                  *
 * @LastModifiedDate: 2023-04-22 18:07:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums，返回 nums 中最长等差子序列的长度。

// 回想一下，nums 的子序列是一个列表 nums[i1], nums[i2], ..., nums[ik] ，且 0 <= i1 < i2 < ... < ik <= nums.length - 1。并且如果 seq[i+1] - seq[i]( 0 <= i < seq.length - 1) 的值都相同，那么序列 seq 是等差的。

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
  const hash = new Map();
  const n = nums.length;
  let res = 2;
  for (let i = 0; i < n; i++) {
    if (hash.has(nums[i])) {
      const arr = hash.get(nums[i]);
      arr.push(i);
      res = Math.max(res, arr.length);
    } else {
      hash.set(nums[i], [i]);
    }
  }
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] === nums[j]) continue;
      let diff = nums[j] - nums[i];
      let nextNum = nums[j] + diff;
      let preIdx = j;
      let curRes = 2;
      while (hash.has(nextNum)) {
        const arr = hash.get(nextNum);
        if (arr[arr.length - 1] < curRes) break;
        // 找到第一个比preIdx大的索引
        let left = 0;
        let right = arr.length;
        while (left < right) {
          let mid = (left + right) >> 1;
          if (arr[mid] > preIdx) {
            right = mid;
          } else {
            left = mid + 1;
          }
        }
        if (right !== arr.length) {
          preIdx = arr[right];
          nextNum += diff;
          curRes++;
        } else {
          break;
        }
      }
      res = Math.max(res, curRes);
    }
  }
  return res;
};
