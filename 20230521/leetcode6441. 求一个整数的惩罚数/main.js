/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-05-21 10:41:09                                                  *
 * @LastModifiedDate: 2023-05-21 11:20:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数 n ，请你返回 n 的 惩罚数 。

// n 的 惩罚数 定义为所有满足以下条件 i 的数的平方和：

// 1 <= i <= n
// i * i 的十进制表示的字符串可以分割成若干连续子字符串，且这些子字符串对应的整数值之和等于 i 。
const RESULTS = [];
var getResults = function () {
  let res = false;
  let str = "81";
  let n = 2;
  let curI = 9;
  /**
   * @description
   * @param {number} preSum 前面的和
   * @param {string} pre 当前的选择
   * @param {number} index 当前的索引
   */
  var dfs = (preSum, pre, index) => {
    if (index === n) {
      // 只能选择结束
      if (pre.length) {
        preSum += parseInt(pre);
      }
      if (preSum === curI) {
        res = true;
      }
      return;
    }
    if (pre && preSum + parseInt(pre) > curI) {
      return;
    }
    // 选择当前
    if (pre) {
      const nxtSum = preSum + parseInt(pre);
      dfs(nxtSum, str[index], index + 1);
    }
    // 不选择当前
    dfs(preSum, pre + str[index], index + 1);
  };
  // dfs(0, "", 0);
  // console.log(res);
  for (let i = 1; i <= 1000; i++) {
    res = false;
    str = (i * i).toString();
    n = str.length;
    curI = i;
    dfs(0, "", 0);
    if (res) {
      RESULTS.push([i, i * i]);
    }
  }
};
getResults();
/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
  let res = 0;
  for (const RESULT of RESULTS) {
    if (n >= RESULT[0]) {
      res += RESULT[1];
    } else {
      break;
    }
  }
  return res;
};
