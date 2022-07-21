/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-21 11:11:20                                                  *
 * @LastModifiedDate: 2022-07-21 11:29:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个长度为 n 、下标从 0 开始的二进制字符串 target 。
// 你自己有另一个长度为 n 的二进制字符串 s ，最初每一位上都是 0 。你想要让 s 和 target 相等。

// 在一步操作，你可以选择下标 i（0 <= i < n）并翻转在 闭区间 [i, n - 1] 内的所有位。
// 翻转意味着 '0' 变为 '1' ，而 '1' 变为 '0' 。

// 返回使 s 与 target 相等需要的最少翻转次数。

// 。

/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function (target) {
  // 等价于将target翻转成"0".repeat(n)的最小次数
  const n = target.length;
  let ans = 0;
  const res = "0".repeat(n);
  let idx = n - 1;
  while (target !== res) {
    if (target[idx] == "0") {
      while (target[idx] == "0") {
        idx--;
      }
      // 进行一次翻转
      target = target.substring(0, idx + 1) + "1".repeat(n - idx - 1);
      ans++;
    } else {
      while (target[idx] == "1") {
        idx--;
      }
      // 进行一次翻转
      target = target.substring(0, idx + 1) + "0".repeat(n - idx - 1);
      ans++;
    }
  }
  return ans;
};

// 110010110100110

// 110010110100111
// 110010110100000
// 110010110111111
// 110010110000000
// 110010001111111
// 110010000000000
// 110001111111111
// 110000000000000
// 001111111111111
// 000000000000000
//
