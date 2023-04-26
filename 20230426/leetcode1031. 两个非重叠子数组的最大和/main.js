/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-04-26 08:54:32                                                  *
 * @LastModifiedDate: 2023-04-26 09:20:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums 和两个整数 firstLen 和 secondLen，请你找出并返回两个非
// 重叠 子数组 中元素的最大和，长度分别为 firstLen 和 secondLen 。

// 长度为 firstLen 的子数组可以出现在长为 secondLen 的子数组之前或之后，
// 但二者必须是不重叠的。

// 子数组是数组的一个 连续 部分。

/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function (nums, firstLen, secondLen) {
  const prefix = [0];
  for (const num of nums) {
    prefix.push(prefix[prefix.length - 1] + num);
  }
  const n = nums.length;
  let res = 0;
  for (let i = 0; i < n - firstLen + 1; i++) {
    let first = prefix[firstLen + i] - prefix[i];
    for (let j = 0; j < n - secondLen + 1; j++) {
      if (j === i) {
        j += firstLen - 1;
        continue;
      } else if (j < i && j + secondLen - 1 >= i) {
        continue;
      } else if (j > i && j < i + firstLen - 1) {
        continue;
      }
      let second = prefix[secondLen + j] - prefix[j];
      res = Math.max(res, first + second);
    }
  }
  return res;
};
