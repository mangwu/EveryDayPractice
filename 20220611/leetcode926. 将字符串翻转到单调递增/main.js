/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-06-11 22:34:05                                                  *
 * @LastModifiedDate: 2022-06-11 23:18:13                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 如果一个二进制字符串，是以一些 0（可能没有 0）
// 后面跟着一些 1（也可能没有 1）的形式组成的，那么该字符串是 单调递增 的。

// 给你一个二进制字符串 s，你可以将任何 0 翻转为 1 或者将 1 翻转为 0 。

// 返回使 s 单调递增的最小翻转次数。

/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
  // 统计前面0的个数
  // 第一个1开始统计1和0各自的个数
  let start = [];
  let end = [];
  const n = s.length;
  // 遍历start和end，判断前面全是0和后面全是1需要几步
  if (s[0] == "0") {
    start = [[1, 0]];
  } else {
    start = [[0, 1]];
  }
  if (s[n - 1] == "0") {
    end = [[1, 0]];
  } else {
    end = [[0, 1]];
  }
  for (let i = 1; i < n; i++) {
    const pres = start[i - 1].slice();
    const pree = end[i - 1].slice();
    if (s[i] == "0") {
      pres[0]++;
    } else {
      pres[1]++;
    }
    start.push(pres);
    if (s[n - i - 1] == "0") {
      pree[0]++;
    } else {
      pree[1]++;
    }
    end.push(pree);
  }
  let ans = Infinity;
  for (let i = -1; i < n; i++) {
    // 前面1的数量
    let one = start[i] !== undefined ? start[i][1] : 0;
    // 后面0的数量
    let zero = end[n - i - 2] !== undefined ? end[n - i - 2][0] : 0;
    ans = Math.min(ans, one + zero);
  }
  return ans;
};

// "00101001011101011101"
minFlipsMonoIncr("00101001011101011101");
