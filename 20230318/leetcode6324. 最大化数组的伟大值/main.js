/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-18 22:41:18                                                  *
 * @LastModifiedDate: 2023-03-18 23:09:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的整数数组 nums 。你需要将 nums 重新排列成一个新的数组 perm 。

// 定义 nums 的 伟大值 为满足 0 <= i < nums.length 且 perm[i] > nums[i] 的下标数目。

// 请你返回重新排列 nums 后的 最大 伟大值。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeGreatness = function (nums) {
  // 田忌赛马
  nums.sort((a, b) => a - b);
  let cur = nums.slice(1);
  cur.push(nums[0]);
  let next = [];
  let res = 0;
  while (cur.length) {
    for (let i = 0; i < cur.length; i++) {
      if (cur[i] > nums[i]) {
        res++;
      } else if (cur[i] === nums[i]) {
        next.push(cur[i]);
        pre = cur[i];
      } else {
        break;
      }
    }
    if (!next.length || next[0] === next[next.length - 1]) break;
    nums = next;
    cur = next.slice(1);
    cur.push(next[0]);
    next = [];
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeGreatness = function (nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  // 找到最大的相同元素
  let maxEqual = 1;
  for (let i = 1; i < n; i++) {
    let cur = 1;
    while (nums[i] === nums[i - 1]) {
      i++;
      cur++;
    }
    maxEqual = Math.max(maxEqual, cur);
  }
  return n - maxEqual
};
