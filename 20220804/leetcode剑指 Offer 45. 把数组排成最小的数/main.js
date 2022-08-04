/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-04 15:27:10                                                  *
 * @LastModifiedDate: 2022-08-04 16:13:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 输入一个非负整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。

/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function (nums) {
  nums.sort((a, b) => {
    // 按照 0-9的字典顺序排列
    // 31 应该排在32 3的前面
    const aStr = a.toString();
    const bStr = b.toString();
    let len = Math.max(aStr.length, bStr.length);
    for (let i = 0; i < len; i++) {
      if (aStr[i] == bStr[i]) {
        continue;
      }
      // 找到第一个不相等的
      let aCh = aStr[i] ? aStr[i] : aStr[0];
      let bCh = bStr[i] ? bStr[i] : bStr[0];
      if (aCh >= bCh) {
        // a在前
        return 1;
      } else {
        // b在前
        return -1;
      }
    }
    // 不相等可以直接字典顺序返回
    if (aStr > bStr) {
      // a在前
      return 1;
    } else if (aStr < bStr) {
      // b在前
      return -1;
    }
    return 0;
  });
  let ans = "";
  for (const num of nums) {
    ans += num;
  }
  return ans;
};

// "0 300 301 30 305 310 311 312 31 313 321 32 331 33 3 334 341 342 34 345 35" 正解
// "0 300 30 301 305 310 311 31 312 313 321 32 331 33 334 3 341 342 34 345 35" 错解
// "0 300 301 30 305 310 311 312 313 31 321 32 331 33 3 343 341 342 34 345 35" 错解
// "0 300 301 30 305 310 311 312 31 313 321 32 33 313 3 334 341 342 34 345 35" 错解