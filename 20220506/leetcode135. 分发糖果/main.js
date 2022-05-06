/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-05-06 14:53:41                                                  *
 * @LastModifiedDate: 2022-05-06 15:34:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// n 个孩子站成一排。给你一个整数数组 ratings 表示每个孩子的评分。

// 你需要按照以下要求，给这些孩子分发糖果：

// 每个孩子至少分配到 1 个糖果。
// 相邻两个孩子评分更高的孩子会获得更多的糖果。
// 请你给每个孩子分发糖果，计算并返回需要准备的 最少糖果数目 。
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  // 每个孩子默认一个糖果保底
  const len = ratings.length;
  const candys = new Array(len).fill(1);
  // 首
  let header = 0;
  while (header < len - 1 && ratings[header] < ratings[header + 1]) {
    candys[header + 1] = Math.max(candys[header] + 1, candys[header + 1]);
    header++;
  }
  // 尾
  let tailer = len - 1;
  while (tailer >= 1 && ratings[tailer - 1] > ratings[tailer]) {
    candys[tailer - 1] = Math.max(candys[tailer - 1], candys[tailer] + 1);
    tailer--;
  }
  for (let i = 1; i < len - 1; i++) {
    // 找到低谷， 可以有一方是相等的
    if (ratings[i] <= ratings[i + 1] && ratings[i] <= ratings[i - 1]) {
      let left = i;
      let right = i;
      while (left >= 1 && ratings[left - 1] > ratings[left]) {
        candys[left - 1] = Math.max(candys[left - 1], candys[left] + 1);
        left--;
      }
      while (right < len - 1 && ratings[right + 1] > ratings[right]) {
        candys[right + 1] = Math.max(candys[right + 1], candys[right] + 1);
        right++;
      }
    }
    // 可以相等也可以
  }
  let ans = 0;
  for (const candy of candys) {
    ans += candy;
  }
  return ans;
};

// [1,5,3,1,2,1]
// [1,3,2,1,2,1]

//[1,7,6,6,5,3,1,2,1]
//[1,2,1,4,3,2,1,2,1]

[
  1, 1, 5, 1, 2, 5, 7, 5, 2, 6, 8, 4, 1, 3, 9, 2, 6, 6, 6, 2, 8, 9, 6, 3, 3, 4,
  1,
];
[
  1, 1, 2, 1, 2, 3, 4, 2, 1, 2, 3, 2, 1, 2, 3, 1, 2, 1, 2, 1, 2, 3, 1, 1, 1, 2,
  1,
];
