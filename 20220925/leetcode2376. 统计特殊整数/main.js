/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-25 19:08:28                                                  *
 * @LastModifiedDate: 2022-09-25 22:41:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 如果一个正整数每一个数位都是 互不相同 的，我们称它是 特殊整数 。

// 给你一个 正 整数 n ，请你返回区间 [1, n] 之间特殊整数的数目。

/**
 * @param {number} n
 * @return {number}
 */
var countSpecialNumbers = function (n) {
  const str = n.toString();
  const dp = new Array(str.length).fill(0).map((v) => new Array(1024).fill(-1));
  const dfs = (i, mask, isLimit, isNum) => {
    // 找到一个特殊数,，如果前面都是0，可以直接返回0，否则就返回1
    if (i == str.length) return isNum ? 1 : 0;
    // 记忆化，如果未被限制且前面都是0，可以直接方法
    if (!isLimit && isNum && dp[i][mask] >= 0) return dp[i][mask];
    let res = 0;
    if (!isNum) res = dfs(i + 1, mask, false, false); // 跳过当前数
    for (let d = isNum ? 0 : 1, up = isLimit ? str[i] - "0" : 9; d <= up; d++) {
      if (((mask >> d) & 1) == 0) {
        // d不在mask中，可选
        res += dfs(i + 1, mask | (1 << d), isLimit && d == up, true);
      }
    }
    if (!isLimit && isNum) dp[i][mask] = res;
    return res;
  };
  return dfs(0, 0, true, false);
};

/**
 * @param {number} n
 * @return {number}
 */
var countSpecialNumbers = function (n) {
  // 数字子字符串，从第一位开始填写
  const str = n.toString();
  const dp = new Array(str.length)
    .fill(0)
    .map((v, i) => new Array(1024).fill(-1));
  // i表示正在填写的位置，mask表示已经使用的数字
  // isLimit表示前面填的数字是否都是n所表示的限制值（是否需要限制当前值的上位）
  // isNum表示前面是否填了数字（false表示前面都跳过了，相当于填的都是0）
  const dfs = (i, mask, isLimit, isNum) => {
    // 退出条件
    if (i == str.length) {
      // 如前面都跳过应该返回0
      return isNum ? 1 : 0;
    }
    // 获取记忆化的结果，不用记忆化isLimit为true， isNum为false的情况
    // 因为它们的情况只会执行一次
    if (!isLimit && isNum && dp[i][mask] >= 0) return dp[i][mask];
    // 计算结果
    let res = 0;
    // 单独计算此次跳过的情况(此次跳过，后面的数就没有限制，且下一次前面都跳过了)
    if (!isNum) res = dfs(i + 1, mask, false, false);
    // 计算本次不跳过的情况，如果前面填了数字就可以从0开始，否则从1开始
    let start = isNum ? 0 : 1;
    // 结束的数字受到isLimit的限制
    let end = isLimit ? str[i] - "0" : 9;
    for (let d = start; d <= end; d++) {
      // 判断d是否不在mask中
      if (((mask >> d) & 1) == 0) {
        // isLimit只有在已经限制且是最后一位的情况下才有效
        // isNum一定是true，因为本次已填数字
        res += dfs(i + 1, mask | (1 << d), isLimit & (d == end), true);
      }
    }
    // 值记录没有限制，且填了数字的情况
    if (!isLimit && isNum) dp[i][mask] = res;
    return res;
  };
  return dfs(0, 0, true, false);
};
