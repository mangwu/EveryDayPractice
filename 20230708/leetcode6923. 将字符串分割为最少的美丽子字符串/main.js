/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-07-08 22:43:55                                                  *
 * @LastModifiedDate: 2023-07-08 23:09:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个二进制字符串 s ，你需要将字符串分割成一个或者多个 子字符串  ，使每个子字符串都是 美丽 的。

// 如果一个字符串满足以下条件，我们称它是 美丽 的：

// 它不包含前导 0 。
// 它是 5 的幂的 二进制 表示。
// 请你返回分割后的子字符串的 最少 数目。如果无法将字符串 s 分割成美丽子字符串，请你返回 -1 。

// 子字符串是一个字符串中一段连续的字符序列。
const FIVE = new Set([1, 5, 25, 125, 625, 3125, 15625]);
/**
 * @param {string} s
 * @return {number}
 */
var minimumBeautifulSubstrings = function (s) {
  if (s[0] === "0") return -1;
  const n = s.length;
  let res = n + 1;
  const dfs = (idx, splitNum, curSum, preSplited) => {
    if (idx === n) {
      if (curSum === 0 && preSplited) {
        res = Math.min(res, splitNum); // 分割过了
      } else if (FIVE.has(curSum) && !preSplited) {
        splitNum++;
        res = Math.min(res, splitNum); // 还未分割
      }
      return;
    }
    // 上一次刚好进行过分割
    if (preSplited && s[idx] === "0") return;
    const nxtSum = 2 * curSum + parseInt(s[idx]);
    // 不进行分割
    dfs(idx + 1, splitNum, nxtSum, false);
    // 尝试分割
    if (FIVE.has(nxtSum)) {
      dfs(idx + 1, splitNum + 1, 0, true);
    }
  };
  dfs(0, 0, 0, true);
  return res === n + 1? -1 : res;
};
