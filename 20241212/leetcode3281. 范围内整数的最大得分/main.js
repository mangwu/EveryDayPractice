/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-12-12 15:27:42                                                  *
 * @LastModifiedDate: 2024-12-13 14:04:03                                      *
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
    console.log(`-----check start ${val}-----`);
    console.log(`区间${[pre, pre + d]}取值${pre}`);
    for (let i = 1; i < n; i++) {
      if (start[i] >= start[i - 1] + d) {
        // 当前区间的取值可以直接增加
        pre += val;
        if (pre < start[i]) pre = start[i];
        else if (pre > start[i] + d) return false;
      } else {
        // 当前区间和上一个区间相交，判断当前区间的取值可以比上一个区间的小
        if (start[i - 1] + d - val >= start[i]) {
          // 可以直接取当前区间最小值
          pre = start[i];
        } else {
          // 仍然需要加上val
          pre += val;
          if (pre < start[i]) pre = start[i];
          else if (pre > start[i] + d) return false;
        }
      }
      console.log(`区间${[start[i], start[i] + d]}取值${pre}`);
    }
    console.log(`-----check end ${val}-----`);
    return true;
  };
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};

// 区间不相交的情况，最小绝对差值的计算方式为比较每个相连区间的取值之差，
// 后一个区间的取值一定大于前一个区间的取值
// [a1, a1 + d]  [a2, a2 + d]  [a3, a3 + d]
// 相连区间最大取值为 a2+d - a1, a3+d - a2。。。
// 假设相连区间是相交的，那么区间取值之差可以是负数，以保证下一个区间的取值更自由

// [1,6,84,84,561,567,651,651,785,5489,5641,6841,8946,9841,9841,9841,9851,9874,89645,651897,984135,984156,999999,9841563]
// d = 8

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
      // 当前区间的取值可以直接增加
      pre += val;
      if (pre < start[i]) pre = start[i];
      else if (pre > start[i] + d) return false;
    }
    return true;
  };
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (check(mid)) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return right;
};
