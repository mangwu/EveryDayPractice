/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-17 10:45:39                                                  *
 * @LastModifiedDate: 2022-07-17 11:23:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的字符串数组 nums ，其中每个字符串 长度相等 且只包含数字。

// 再给你一个下标从 0 开始的二维整数数组 queries ，其中 queries[i] = [ki, trimi] 。
// 对于每个 queries[i] ，你需要：

// 将 nums 中每个数字 裁剪 到剩下 最右边 trimi 个数位。
// 在裁剪过后的数字中，找到 nums 中第 ki 小数字对应的 下标 。
// 如果两个裁剪后数字一样大，那么下标 更小 的数字视为更小的数字。
// 将 nums 中每个数字恢复到原本字符串。
// 请你返回一个长度与 queries 相等的数组 answer，其中 answer[i]是第 i 次查询的结果。

// 提示：

// 裁剪到剩下 x 个数位的意思是不断删除最左边的数位，直到剩下 x 个数位。
// nums 中的字符串可能会有前导 0 。

/**
 * @param {string[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var smallestTrimmedNumbers = function (nums, queries) {
  const sortedNums = [];
  const sLen = nums[0].length;
  const len = nums.length;
  for (let i = sLen - 1; i >= 0; i--) {
    const newArr = [];
    for (const num of nums) {
      newArr.push(num.substring(i, sLen));
    }
    const hash = new Map();
    for (let i = 0; i < len; i++) {
      if (hash.has(newArr[i])) {
        let idx = 1;
        while (hash.has("0".repeat(idx) + newArr[i])) {
          idx++;
        }
        newArr[i] = "0".repeat(idx) + newArr[i];
        hash.set(newArr[i], i);
      } else {
        hash.set(newArr[i], i);
      }
    }
    newArr.sort((a, b) => a - b);
    sortedNums.push(newArr.map((v) => hash.get(v)));
  }
  let ans = [];
  const n = queries.length;
  for (let i = 0; i < n; i++) {
    ans[i] = sortedNums[queries[i][1] - 1][queries[i][0] - 1];
  }
  return ans;
};
