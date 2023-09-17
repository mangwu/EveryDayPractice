/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-09-16 22:33:20                                                  *
 * @LastModifiedDate: 2023-09-16 22:43:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 下标从 0 开始的数组 nums ，数组中的元素为 互不相同 的正整数。请你返回让 nums 成为递增数组的 最少右移 次数，如果无法得到递增数组，返回 -1 。

// 一次 右移 指的是同时对所有下标进行操作，将下标为 i 的元素移动到下标 (i + 1) % n 处。

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function (nums) {
  const n = nums.length;
  const copy = nums.slice().sort((a, b) => a - b);
  let idx = nums.findIndex((v) => v === copy[0]);
  let res = (n - idx) % n;
  for (let i = 0; i < n; i++) {
    if (nums[idx] !== copy[i]) return -1;
    idx++;
    idx %= n;
  }
  return res;
};
