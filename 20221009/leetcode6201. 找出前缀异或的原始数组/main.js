/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-10-09 10:37:05                                                  *
 * @LastModifiedDate: 2022-10-09 10:43:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 的 整数 数组 pref 。找出并返回满足下述条件且长度为 n 的数组 arr ：

// pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].
// 注意 ^ 表示 按位异或（bitwise-xor）运算。

// 可以证明答案是 唯一 的。

/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
  const n = pref.length;
  const ans = new Array(n).fill(0);
  ans[0] = pref[0]
  // 根据异或前缀求原始数组
  // ans[i] ^ pref[i-1] = pref[i]
  // ans[0] = pref[0]
  // ans[i] ^ pref[i-1] ^ pref[i-1] = pref[i] ^ pref[i-1]
  // ans[i] = pref[i] ^ pref[i-1];
  for (let i = 1; i < n; i++) {
    ans[i] = pref[i] ^ pref[i - 1];
  }
  return ans;
};
