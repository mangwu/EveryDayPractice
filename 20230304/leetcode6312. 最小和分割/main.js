/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-04 22:30:18                                                  *
 * @LastModifiedDate: 2023-03-04 22:36:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个正整数 num ，请你将它分割成两个非负整数 num1 和 num2 ，满足：

// num1 和 num2 直接连起来，得到 num 各数位的一个排列。
// 换句话说，num1 和 num2 中所有数字出现的次数之和等于 num 中所有数字出现的次数。
// num1 和 num2 可以包含前导 0 。
// 请你返回 num1 和 num2 可以得到的和的 最小 值。

// 注意：

// num 保证没有前导 0 。
// num1 和 num2 中数位顺序可以与 num 中数位顺序不同。

/**
 * @param {number} num
 * @return {number}
 */
var splitNum = function (num) {
  let res = num
    .toString()
    .split("")
    .map((v) => parseInt(v))
    .sort((a, b) => a - b);
  const n = res.length;
  const num1 = [];
  const num2 = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) num1.push(res[i]);
    else num2.push(res[i]);
  }
  return parseInt(num1.join("")) + parseInt(num2.join(""));
};

// 0 1 2 4 5
// 0 2 5
// 1 4
