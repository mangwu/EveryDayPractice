/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-18 22:31:40                                                  *
 * @LastModifiedDate: 2023-03-18 22:39:58                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数 money ，表示你总共有的钱数（单位为美元）和另一个整数 children ，表示你要将钱分配给多少个儿童。

// 你需要按照如下规则分配：

// 所有的钱都必须被分配。
// 每个儿童至少获得 1 美元。
// 没有人获得 4 美元。
// 请你按照上述规则分配金钱，并返回 最多 有多少个儿童获得 恰好 8 美元。如果没有任何分配方案，返回 -1 。

/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
var distMoney = function (money, children) {
  if (money < children) return -1;
  if (money < 7 + children) return 0;
  money -= children; // 每个都至少分一美元
  if (children * 7 == money) {
    return children;
  } else if (children * 7 > money) {
    let k = Math.floor(money / 7);
    let re = money % 7;
    if (re === 3 && k === children - 1) k--;
    return k;
  } else {
    return children - 1;
  }
};
