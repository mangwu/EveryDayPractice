/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-08-03 08:45:39                                                  *
 * @LastModifiedDate: 2022-08-03 09:00:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个字符串 s 和一个整数 k 。你可以从 s 的前 k 个字母中选择一个，并把它加到字符串的末尾。

// 返回 在应用上述步骤的任意数量的移动后，字典上最小的字符串 。

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function (s, k) {
  const n = s.length;
  if (k == 1) {
    let ans = s;
    // 找到序列最大的结果
    for (let i = 1; i < n; i++) {
      if (s.substring(i) + s.substring(0, i) < ans) {
        ans = s.substring(i) + s.substring(0, i);
      }
    }
    return ans;
  }
  // k大于1
  const strs = s.split("");
  strs.sort();
  return strs.join("");
};
