/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-01-15 14:37:42                                                  *
 * @LastModifiedDate: 2022-01-15 14:42:15                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022                                                          *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Hercy 想要为购买第一辆车存钱。他 每天 都往力扣银行里存钱。

// 最开始，他在周一的时候存入 1 块钱。从周二到周日，他每天都比前一天多存入 1 块钱。在接下来每一个周一，他都会比 前一个周一 多存入 1 块钱。

// 给你 n ，请你返回在第 n 天结束的时候他在力扣银行总共存了多少块钱。

/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
  let f = 0;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (i % 7 === 0) {
      f++;
    }
    ans = ans + f + i % 7;
  }
  return ans;
};
