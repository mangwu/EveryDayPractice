/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-05-05 23:16:25                                                  *
 * @LastModifiedDate: 2024-05-05 23:20:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你有一个炸弹需要拆除，时间紧迫！你的情报员会给你一个长度为 n 的 循环 数组 code 以及一个密钥 k 。

// 为了获得正确的密码，你需要替换掉每一个数字。所有数字会 同时 被替换。

// 如果 k > 0 ，将第 i 个数字用 接下来 k 个数字之和替换。
// 如果 k < 0 ，将第 i 个数字用 之前 k 个数字之和替换。
// 如果 k == 0 ，将第 i 个数字用 0 替换。
// 由于 code 是循环的， code[n-1] 下一个元素是 code[0] ，且 code[0] 前一个元素是 code[n-1] 。

// 给你 循环 数组 code 和整数密钥 k ，请你返回解密后的结果来拆除炸弹！

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  const n = code.length;
  const ans = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (k > 0) {
      for (let j = i + 1; j < i + 1 + k; j++) {
        ans[i] += code[j % n];
      }
    } else if (k < 0) {
      for (let j = i - 1; j > i + k - 1; j--) {
        ans[i] += code[(j + n) % n];
      }
    }
  }
  return ans;
};
