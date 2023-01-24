/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-23 17:58:40                                                  *
 * @LastModifiedDate: 2023-01-23 18:05:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个下标从 0 开始的二维整数数组 brackets ，其中 brackets[i] = [upperi, percenti] ，表示第 i 个税级的上限是 upperi ，征收的税率为 percenti 。税级按上限 从低到高排序（在满足 0 < i < brackets.length 的前提下，upperi-1 < upperi）。

// 税款计算方式如下：

// 不超过 upper0 的收入按税率 percent0 缴纳
// 接着 upper1 - upper0 的部分按税率 percent1 缴纳
// 然后 upper2 - upper1 的部分按税率 percent2 缴纳
// 以此类推
// 给你一个整数 income 表示你的总收入。返回你需要缴纳的税款总额。与标准答案误差不超 10-5 的结果将被视作正确答案。

/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
  let pre = 0;
  let res = 0;
  for (const bracket of brackets) {
    if (income > bracket[0]) {
      res += (bracket[0] - pre) * bracket[1];
    } else {
      res += (income - pre) * bracket[1];
      break;
    }
    pre = bracket[0];
  }
  return res;
};
