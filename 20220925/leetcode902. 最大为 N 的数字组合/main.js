/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-09-25 22:46:25                                                  *
 * @LastModifiedDate: 2022-09-25 23:03:03                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个按 非递减顺序 排列的数字数组 digits 。
// 你可以用任意次数 digits[i] 来写的数字。例如，
// 如果 digits = ['1','3','5']，我们可以写数字，如 '13', '551', 和 '1351315'。

// 返回 可以生成的小于或等于给定整数 n 的正整数的个数 。

/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
var atMostNGivenDigitSet = function (digits, n) {
  const str = n.toString();
  // 记录当前位后能选择可能性
  const dp = new Array(str.length).fill(-1);
  // isLimit 前面是否按照n的限制选数
  // isNum 前面是否选择了数字
  const dfs = (i, isLimit, isNum) => {
    if (i == str.length) {
      return isNum ? 1 : 0;
    }
    // 前面按照限制选数就不用记忆化
    // 前面没有选择数组也不用记忆
    if (dp[i] > 0 && !isLimit && isNum) return dp[i];
    let res = 0;
    // 前面未选，本轮也可以不选，不选下次就没有了限制
    if (!isNum) res = dfs(i + 1, false, false);
    // 限制会导致上限有变化
    let up = isLimit ? str[i] : "9";
    // 计算本轮选择数字的可选项
    for (const digit of digits) {
      if (digit > up) {
        break;
      }
      // 选择了isNum就是true了
      res += dfs(i + 1, isLimit && digit == up, true);
    }
    // 进行记忆没有限制且选择了数字就需要记忆
    if (!isLimit && isNum) dp[i] = res;
    return res;
  };
  return dfs(0, true, false);
};
