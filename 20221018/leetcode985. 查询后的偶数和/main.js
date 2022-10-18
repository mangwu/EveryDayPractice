/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-18 15:35:26                                                  *
 * @LastModifiedDate: 2022-10-18 15:47:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给出一个整数数组 A 和一个查询数组 queries。

// 对于第 i 次查询，有 val = queries[i][0], index = queries[i][1]，我们会把 val 加到 A[index] 上。
// 然后，第 i 次查询的答案是 A 中偶数值的和。

// （此处给定的 index = queries[i][1] 是从 0 开始的索引，每次查询都会永久修改数组 A。）

// 返回所有查询的答案。你的答案应当以数组 answer 给出，answer[i] 为第 i 次查询的答案。

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function (nums, queries) {
  // 先计算出nums中的偶数和
  let sumOfEven = 0;
  for (const num of nums) {
    if (Math.abs(num % 2) === 0) {
      sumOfEven += num;
    }
  }
  const ans = [];
  for (const [val, idx] of queries) {
    const preVal = nums[idx];
    if (Math.abs(preVal % 2) === 0) {
      // 减去
      sumOfEven -= preVal;
    }
    const curVal = preVal + val;
    if (Math.abs(curVal % 2) === 0) {
      // 加上
      sumOfEven += curVal;
    }
    nums[idx] = curVal;
    ans.push(sumOfEven);
  }
  return ans;
};
