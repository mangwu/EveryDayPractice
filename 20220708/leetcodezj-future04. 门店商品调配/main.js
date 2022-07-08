/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-07-08 10:59:48                                                  *
 * @LastModifiedDate: 2022-07-08 11:27:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 某连锁店开设了若干门店，门店间允许进行商品借调以应对暂时性的短缺。
// 本月商品借调的情况记于数组 distributions，其中 distributions[i] = [from,to,num]，
// 表示从 from 门店调配了 num 件商品给 to 门店。

// 若要使得每一个门店最终借出和借入的商品数量相同，请问至少还需要进行多少次商品调配。

// 注意：一次商品调配以三元组 [from, to, num] 表示，并有 from ≠ to 且 num > 0。

/**
 * @param {number[][]} distributions
 * @return {number}
 */
var minTransfers = function (distributions) {
  const hash = new Map();
  for (const d of distributions) {
    if (hash.has(d[0])) {
      let num = hash.get(d[0]);
      hash.set(d[0], num - d[2]);
    } else {
      hash.set(d[0], 0 - d[2]);
    }
    if (hash.has(d[1])) {
      let num = hash.get(d[1]);
      hash.set(d[1], num + d[2]);
    } else {
      hash.set(d[1], d[2]);
    }
  }
  // hash中值为0的不用管
  // 分别求得值不为负数和正数的个数
  const negative = [];
  const positive = [];
  for (const [key, val] of hash) {
    if (val > 0) {
      positive.push(val);
    }
    if (val < 0) {
      negative.push(val);
    }
  }
  if (positive.length == 0 && negative.length == 0) {
    return 0;
  }
  if (positive.length == 1) {
    return negative.length;
  }
  if (negative.length == 1) {
    return positive.length;
  }
  positive.sort((a, b) => a - b);
  negative.sort((a, b) => a - b);
  // 如何填充才能达到最小值
  // 先将互补的进行合并，然后
  const dfs = () => {
    
  }
};

// 2 5 8 9
// -1 -1 -2 -8 -12

// 按照大大顺序 =>
// 9 + 3 2次
// 5 + 3 2次
// 2 1次
// 1 1次
// 1 1次

// 按照小小顺序
// 1 1次
// 1 1次
// 2 1次
// 3 + 5 2次
// 3 + 9 2次

// 实际
// 8 1次
// 3 + 9 2次
// 2 1次
// 1 1次
// 1 1次
