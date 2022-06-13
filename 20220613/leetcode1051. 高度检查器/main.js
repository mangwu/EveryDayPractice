/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-13 09:31:11                                                  *
 * @LastModifiedDate: 2022-06-13 09:33:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 学校打算为全体学生拍一张年度纪念照。根据要求，学生需要按照 非递减 的高度顺序排成一行。

// 排序后的高度情况用整数数组 expected 表示，其中 expected[i]
// 是预计排在这一行中第 i 位的学生的高度（下标从 0 开始）。

// 给你一个整数数组 heights ，表示 当前学生站位 的高度情况。
// heights[i] 是这一行中第 i 位学生的高度（下标从 0 开始）。

// 返回满足 heights[i] != expected[i] 的 下标数量 。
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  // 排序后比较
  const primary = heights.slice();
  heights.sort((a, b) => a - b);
  let ans = 0;
  const n = heights.length;
  for (let i = 0; i < n; i++) {
    if (heights[i] !== primary[i]) {
      ans++;
    }
  }
  return ans;
};
