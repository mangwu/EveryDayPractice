/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-04 15:27:10                                                  *
 * @LastModifiedDate: 2022-08-05 16:21:17                                      *
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
      if (aCh > bCh) {
        // a在后
        return 1;
      } else if (aCh < bCh) {
        // a在前
        return -1;
      } else if (aStr[i] == aStr[0]) {
        // a更长,判断a是否还有后面字符
        if (aStr[i + 1]) {
          // 有字符
          if (aStr[i + 1] >= aStr[0]) {
            // a在后方
            return 1;
          } else if (aStr[i + 1] < aStr[0]) {
            // a在前方
            return -1;
          }
        } else {
          // 没有了
          let idx = 0;
          while (aStr[idx] == aStr[0]) {
            idx++;
          }
          if (aStr[idx] && aStr[idx] < aStr[0]) {
            // a放后面
            return 1;
          } else if (aStr[idx] && aStr[idx] > aStr[0]) {
            // a放前面
            return -1;
          }
          return 0;
        }
      } else {
        // b更长,判断b是否还有后面字符
        if (bStr[i + 1]) {
          // 有字符
          if (bStr[i + 1] >= bStr[0]) {
            // b在后方
            return -1;
          } else if (bStr[i + 1] < bStr[0]) {
            // b在前方
            return 1;
          }
        } else {
          let idx = 0;
          while (bStr[idx] == bStr[0]) {
            idx++;
          }
          if (bStr[idx] && bStr[idx] < bStr[0]) {
            // b放后面
            return -1;
          } else if (aStr[idx] && aStr[idx] > aStr[0]) {
            // b放前面
            return 1;
          }
          return 0;
        }
      }
    }
    // 不相等可以直接字典顺序返回
    if (aStr > bStr) {
      // a在后
      return 1;
    } else if (aStr < bStr) {
      // a在前
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

// 32 323

// 32323

// 32332

// 3 33

// [0,31,33,323,333,312,321,301,321,310, 313, 321, 32, 331, 33]
// "0 301 310 31231313321321321323233313333333" 正解

// 32 323  32323   32332  // 长的放后面
// 35 353  35353   35335 // 长的放前面

// 3124 312433 3124312433 3124333124 // 长的放后面

// 312 31233 31231233 31233312

// 3312 33123  331233123 331233312 // 长的放后面
// 3342 33423  334233423 334233342 // 长的放前面
