/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-22 08:53:17                                                  *
 * @LastModifiedDate: 2022-09-22 09:23:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 arr ，数组中的每个整数 互不相同 。另有一个由整数数组构成的数组 pieces，其中的整数也 互不相同 。
// 请你以 任意顺序 连接 pieces 中的数组以形成 arr 。但是，不允许 对每个数组 pieces[i] 中的整数重新排序。

// 如果可以连接 pieces 中的数组形成 arr ，返回 true ；否则，返回 false 。

/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  // pieces中的数字元素个数和arr中相同
  const hash = new Map();
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    hash.set(arr[i], i);
  }
  for (const piece of pieces) {
    let pre = null;
    for (let i = 0; i < piece.length; i++) {
      if (hash.has(piece[i])) {
        if (pre == null || pre + 1 === hash.get(piece[i])) {
          pre = hash.get(piece[i]);
          continue;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return true;
};
