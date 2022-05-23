/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-22 11:14:02                                                  *
 * @LastModifiedDate: 2022-05-22 11:25:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 作为国王的统治者，你有一支巫师军队听你指挥。

// 给你一个下标从 0 开始的整数数组 strength ，其中 strength[i] 表示第 i 位巫师的力量值。对于连续的一组巫师（也就是这些巫师的力量值是 strength 的 子数组），总力量 定义为以下两个值的 乘积 ：

// 巫师中 最弱 的能力值。
// 组中所有巫师的个人力量值 之和 。
// 请你返回 所有 巫师组的 总 力量之和。由于答案可能很大，请将答案对 109 + 7 取余 后返回。

// 子数组 是一个数组里 非空 连续子序列。
const MAX = Math.pow(10, 9) + 7;
/**
 * @param {number[]} strength
 * @return {number}
 */
var totalStrength = function (strength) {
  // 连续子序列
  let left = 0;
  let right = 0;
  const n = strength.length;
  let min = strength[0];
  let sum = 0;
  let ans = 0;
  while (left < n || right < n) {
    while (right < n) {
      min = Math.min(min, strength[right]);
      sum += strength[right];
      ans = (ans + min * sum) % MAX;
      right++;
    }
    left++;
    right = left;
    min = strength[left];
    sum = 0;
  }
  return ans;
};


// 5 4 6

// 5 * 5 + 4 * 4 + 6 * 6 + 