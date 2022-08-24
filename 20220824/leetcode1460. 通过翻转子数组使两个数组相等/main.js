/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-24 08:54:11                                                  *
 * @LastModifiedDate: 2022-08-24 09:10:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你两个长度相同的整数数组 target 和 arr 。每一步中，你可以选择 arr 的任意 非空子数组 并将它翻转。
// 你可以执行此过程任意次。

// 如果你能让 arr 变得与 target 相同，返回 True；否则，返回 False 。

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function (target, arr) {
  // 查看arr中的元素是否和target中的一致
  const hash = new Map();
  for (const num of target) {
    hash.has(num) ? hash.set(num, hash.get(num) + 1) : hash.set(num, 1);
  }
  for (const num of arr) {
    if (hash.has(num)) {
      const k = hash.get(num);
      if (k == 1) {
        hash.delete(num);
      } else {
        hash.set(num, k - 1);
      }
    } else {
      return false;
    }
  }
  return true;
};

// 1 0
// 1 0

// 1100
// 1100
// 1100
// 1100