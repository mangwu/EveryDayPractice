/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-26 14:38:31                                                  *
 * @LastModifiedDate: 2022-09-26 15:21:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个整数 n，计算所有小于等于 n 的非负整数中数字 1 出现的个数。

/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  const str = n.toString();
  // mask表示前面的1选择了多少个
  const dp = new Array(str.length).fill(-1).map((v) => new Array(9).fill(-1));
  const dfs = (i, mask, isLimit, isNum) => {
    if (i == str.length) {
      // 前面的1选择的个数就时当前找到的数字拥有1的个数
      return mask;
    }
    // 判断是否为重复计算
    // isLimit为true时=>全限制的特殊情况，或isNum为false时=>前面全部跳过的特殊情况，不用记忆化
    if (!isLimit && isNum && dp[i][mask] > 0) return dp[i][mask];
    let res = 0;
    // 判断是否可一跳过, 跳过，所以没有选择，也没限制
    if (!isNum) res = dfs(i + 1, mask, false, false);
    // 上界确定 如果前面都限制了，上届就是str
    let up = isLimit ? str[i] - "0" : 9;
    // 下界确定，如果前面都跳过了，从1开始
    let start = isNum ? 0 : 1;
    for (let d = start; d <= up; d++) {
      // 当前isLimit是true只有满足前面都被限制且d是限制数的情况
      // 当前选择了，所以isNum就是true
      if (d == 1) {
        res += dfs(i + 1, mask + 1, isLimit && d == up, true);
      } else {
        res += dfs(i + 1, mask, isLimit && d == up, true);
      }
    }
    // isLimit为true，前面全限制的特殊情况只计算一次；isNum为false，前面全跳过的特殊情况只计算一次
    if (!isLimit && isNum) dp[i][mask] = res;
    return res;
  };
  return dfs(0, 0, true, false);
};

// 1 10 11 12 13
