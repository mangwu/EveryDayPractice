/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-20 23:13:23                                                  *
 * @LastModifiedDate: 2022-08-20 23:34:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个下标从 0 开始的整数数组 nums 和 removeQueries ，两者长度都为 n 。
// 对于第 i 个查询，nums 中位于下标 removeQueries[i] 处的元素被删除，将 nums 分割成更小的子段。

// 一个 子段 是 nums 中连续 正 整数形成的序列。子段和 是子段中所有元素的和。

// 请你返回一个长度为 n 的整数数组 answer ，其中 answer[i]是第 i 次删除操作以后的 最大 子段和。

// 注意：一个下标至多只会被删除一次。

/**
 * @param {number[]} nums
 * @param {number[]} removeQueries
 * @return {number[]}
 */
var maximumSegmentSum = function (nums, removeQueries) {
  const n = nums.length;
  const ans = [];
  const dfs = (start, end, idx) => {
    const rq = removeQueries[idx];
    let sum1 = 0;
    for (let i = start; i < rq; i++) {
      sum1 += nums[i];
    }
    let sum2 = 0;
    for (let i = rq + 1; i <= end; i++) {
      sum2 += nums[i];
    }
    ans[idx]
  };
};

// [1,2,5,6,1]
// 1 3 8 14 15
