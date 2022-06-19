/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-19 10:52:15                                                  *
 * @LastModifiedDate: 2022-06-19 11:32:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个二进制字符串 s 和一个正整数 k 。

// 请你返回 s 的 最长 子序列，且该子序列对应的 二进制 数字小于等于 k 。

// 注意：

// 子序列可以有 前导 0 。
// 空字符串视为 0 。
// 子序列 是指从一个字符串中删除零个或者多个字符后，不改变顺序得到的剩余字符序列。

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubsequence = function (s, k) {
  let zero = 0;
  for (const ch of s) {
    if (ch == "0") {
      zero++;
    }
  }
  // 计算k的1的位置
  const kidx = [];
  let val = k;
  let idx = 0;
  while (val > 0) {
    if ((val & 1) == 1) {
      kidx.push(idx);
    }
    val = val >> 1;
    idx++;
  }
  kidx.reverse();
  console.log(kidx);
  // 第一个idx就是后面能有1的个数
  const n = s.length;
  let last = 0;
  let select = 0;
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] == "0") {
      last++;
    } else {
      if (last <= kidx[0]) {
        select++;
        last++;
      }
    }
  }
  console.log(select, last, kidx[0]);
  let j = 0;
  let ans = "";
  for (let i = n - 1; i >= 0; i--) {
    if (j >= select) {
      break;
    }
    if (s[i] == "1") {
      j++;
    }
    ans = s[i] + ans;
  }
  ans = "0".repeat(zero + select - ans.length) + ans;
  console.log(ans);
  if (parseInt(ans, 2) <= k) {
    return zero + select;
  }
  return zero + select - 1;
};

longestSubsequence("1001010", 5);
