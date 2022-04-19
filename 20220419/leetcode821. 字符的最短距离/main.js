/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-19 09:04:19                                                  *
 * @LastModifiedDate: 2022-04-19 09:32:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 s 和一个字符 c ，且 c 是 s 中出现过的字符。

// 返回一个整数数组 answer ，其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离 。

// 两个下标 i 和 j 之间的 距离 为 abs(i - j) ，其中 abs 是绝对值函数。

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  // 可以遍历一遍s后获得c在s中的所有索引
  // 使用一个变量记录上一个找到的c的索引
  // 每当新找到一个字符，就需要倒序遍历到上一次找到c的索引位置
  // 初始时记录的上一次位置为-1
  let pre = -1;
  const len = s.length;
  const ans = new Array(len).fill(len);
  for (let i = 0; i < len; i++) {
    if (pre !== -1) {
      ans[i] = i - pre;
    }
    if (s[i] == c) {
      // 倒序遍历
      for (let j = i; j > pre; j--) {
        ans[j] = Math.min(ans[j], i - j);
      }
      pre = i;
    }
  }
  return ans;
};
