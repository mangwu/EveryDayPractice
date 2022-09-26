/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-24 12:46:36                                                  *
 * @LastModifiedDate: 2022-09-24 14:47:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你有一个炸弹需要拆除，时间紧迫！你的情报员会给你一个长度为 n 的 循环
// 数组 code 以及一个密钥 k 。

// 为了获得正确的密码，你需要替换掉每一个数字。所有数字会 同时 被替换。

// 如果 k > 0 ，将第 i 个数字用 接下来 k 个数字之和替换。
// 如果 k < 0 ，将第 i 个数字用 之前 k 个数字之和替换。
// 如果 k == 0 ，将第 i 个数字用 0 替换。
// 由于 code 是循环的， code[n-1] 下一个元素是 code[0] ，
// 且 code[0] 前一个元素是 code[n-1] 。

// 给你 循环 数组 code 和整数密钥 k ，请你返回解密后的结果来拆除炸弹！

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
  const n = code.length;
  let ans = new Array(n).fill(0);
  if (k === 0) {
    return ans;
  }

  if (k > 0) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
      sum += code[i];
    }
    for (let i = 0; i < n; i++) {
      sum -= code[i];
      sum += code[(i + k) % n];
      ans[i] = sum;
    }
  } else {
    let sum = 0;
    k = -k;
    for (let i = n - 1; i >= n - k; i--) {
      sum += code[i];
    }
    for (let i = n - 1; i >= 0; i--) {
      sum -= code[i];
      sum += code[(i - k + n) % n];
      ans[i] = sum;
    }
  }
  return ans;
};
