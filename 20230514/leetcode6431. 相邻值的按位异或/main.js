/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-14 11:03:16                                                  *
 * @LastModifiedDate: 2023-05-14 11:16:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 下标从 0 开始、长度为 n 的数组 derived 是由同样长度为 n 的原始 二进制数组 original 通过计算相邻值的 按位异或（⊕）派生而来。

// 特别地，对于范围 [0, n - 1] 内的每个下标 i ：

// 如果 i = n - 1 ，那么 derived[i] = original[i] ⊕ original[0]
// 否则 derived[i] = original[i] ⊕ original[i + 1]
// 给你一个数组 derived ，请判断是否存在一个能够派生得到 derived 的 有效原始二进制数组 original 。

// 如果存在满足要求的原始二进制数组，返回 true ；否则，返回 false 。

// 二进制数组是仅由 0 和 1 组成的数组。

/**
 * @param {number[]} derived
 * @return {boolean}
 */
var doesValidArrayExist = function (derived) {
  return isDervied(0, derived) || isDervied(1, derived);
};

var isDervied = function (initial, derived) {
  const arr = [initial];
  const n = derived.length;
  for (let i = 1; i < n; i++) {
    arr[i] = derived[i - 1] ^ arr[i - 1];
  }
  return (arr[n - 1] ^ initial) === derived[n - 1];
};
