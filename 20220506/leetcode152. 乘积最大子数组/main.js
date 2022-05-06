/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-06 20:56:14                                                  *
 * @LastModifiedDate: 2022-05-06 21:29:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

// 测试用例的答案是一个 32-位 整数。

// 子数组 是数组的连续子序列。
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // 前缀积
  const prefix = [1];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] == 0) {
      prefix[i + 1] = 0;
      if (i < len - 1 && nums[i + 1] !== 0) {
        prefix[i + 2] = nums[i + 1];
        i++;
      }
      continue;
    }
    prefix[i + 1] = prefix[i] * nums[i];
  }
  let ans = -Infinity;
  let firstNegtive = 0;
  console.log(prefix);

  for (let i = 1; i < len + 1; i++) {
    if (prefix[i] < 0) {
      if (firstNegtive == 0) {
        firstNegtive = prefix[i];
      } else {
        console.log(firstNegtive, prefix[i], ans, prefix[i] / firstNegtive);
        ans = Math.max(ans, prefix[i] / firstNegtive);
        console.log(ans);
      }
    } else if (prefix[i] == 0) {
      firstNegtive = 0;
    }
    ans = Math.max(ans, prefix[i]);
  }
  console.log(ans);
  return ans;
};
maxProduct([-2, 1, 5, 8, 9, 2, -2, 5, -3, 0, 2, 5, 6, 8]);
