/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-27 21:42:41                                                  *
 * @LastModifiedDate: 2022-03-27 22:20:48                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
  // 计算出rolls的总和
  const m = rolls.length;
  let sumOfRolls = 0;
  for (const roll of rolls) {
    sumOfRolls += roll;
  }
  let restOfRolls = mean * (m + n) - sumOfRolls;
  // 平均整数值
  let meanOfRest = Math.floor(restOfRolls / n);
  console.log(restOfRolls)
  // 余数
  let remainder = restOfRolls % n;
  // 
  if(meanOfRest > 6 || (meanOfRest == 6 && remainder > 0) || restOfRolls < n) {
    return []
  }
  let ans = new Array(n).fill(meanOfRest);
  for (let i = 0; i < remainder; i++) {
    ans[i]++;
  }
  return ans;
};
