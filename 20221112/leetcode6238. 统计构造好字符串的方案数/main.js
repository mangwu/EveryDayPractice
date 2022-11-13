/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-12 22:35:12                                                  *
 * @LastModifiedDate: 2022-11-12 23:05:21                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你整数 zero ，one ，low 和 high ，我们从空字符串开始构造一个字符串，每一步执行下面操作中的一种：

// 将 '0' 在字符串末尾添加 zero  次。
// 将 '1' 在字符串末尾添加 one 次。
// 以上操作可以执行任意次。

// 如果通过以上过程得到一个 长度 在 low 和 high 之间（包含上下边界）的字符串，那么这个字符串我们称为 好 字符串。

// 请你返回满足以上要求的 不同 好字符串数目。由于答案可能很大，请将结果对 109 + 7 取余 后返回。
const MOD = 10 ** 9 + 7;
/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {
  // 长度要大于low小于high
  const dp = new Array(high + 1).fill(0);
  let min = Math.min(zero, one);
  let max = Math.max(zero, one);
  dp[min] = 1;
  dp[max] = 1;
  if (zero === one) {
    dp[min]++;
  }
  for (let i = min + 1; i <= high; i++) {
    let zeroN = dp[i - zero] ? dp[i - zero] : 0;
    let oneN = dp[i - one] ? dp[i - one] : 0;
    dp[i] += (zeroN + oneN) % MOD;
  }
  let ans = 0;
  for (let i = low; i <= high; i++) {
    ans += dp[i];
    ans %= MOD;
  }
  return ans;
};
