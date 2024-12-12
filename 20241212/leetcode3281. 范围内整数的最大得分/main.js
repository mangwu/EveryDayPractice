/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-12 15:27:42                                                  *
 * @LastModifiedDate: 2024-12-12 16:40:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 start 和一个整数 d，代表 n 个区间 [start[i], start[i] + d]。

// 你需要选择 n 个整数，其中第 i 个整数必须属于第 i 个区间。所选整数的 得分 定义为所选整数两两之间的 最小 绝对差。

// 返回所选整数的 最大可能得分 。

/**
 * @param {number[]} start
 * @param {number} d
 * @return {number}
 */
var maxPossibleScore = function (start, d) {
  start.sort((a, b) => a - b);
  const n = start.length;
  // 二分查找
  let left = 0;
  let right = 2 * 10 ** 9;
  // 判断当差值结果最小绝对查的值为val时，能否顺利取得
  const check = (val) => {
    let pre = start[0]; // 上一个区间的元素取值最小值
    for (let i = 1; i < n; i++) {
      if (start[i] >= start[0] + d) {
        // 
      }
    }
  };
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
  }
};

// 区间不相交的情况，最小绝对差值的计算方式为比较每个相连区间的取值之差，
// 后一个区间的取值一定大于前一个区间的取值
// [a1, a1 + d]  [a2, a2 + d]  [a3, a3 + d]
// 相连区间最大取值为 a2+d - a1, a3+d - a2。。。
// 假设相连区间是相交的，那么区间取值之差可以是负数，以保证下一个区间的取值更自由
