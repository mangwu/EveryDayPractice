/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-02-04 10:34:49                                                  *
 * @LastModifiedDate: 2024-02-04 11:11:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的字符串 word 和一个整数 k 。

// 在每一秒，你必须执行以下操作：

// 移除 word 的前 k 个字符。
// 在 word 的末尾添加 k 个任意字符。
// 注意 添加的字符不必和移除的字符相同。但是，必须在每一秒钟都执行 两种 操作。

// 返回将 word 恢复到其 初始 状态所需的 最短 时间（该时间必须大于零）

/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var minimumTimeToInitialState = function (word, k) {
  // 让word后面的字符匹配前面的字符
  // word的规模变大了
  const n = word.length;
  let ans = 1;
  while (ans * k < n) {
    // 从ans * k开始匹配
    let flag = true;
    for (let i = ans * k; i < n; i++) {
      if (word[i] !== word[i - ans * k]) {
        // 在匹配的过程中，记录下一个
        flag = false;
        break;
      }
    }
    if (flag) return ans;
    ans++;
  }
  return ans;
};
