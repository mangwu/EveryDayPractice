/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-03-18 23:55:34                                                  *
 * @LastModifiedDate: 2023-03-19 00:03:10                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个整数数组 ranks ，表示一些机械工的 能力值 。ranksi 是第 i 位机械工的能力值。能力值为 r 的机械工可以在 r * n2 分钟内修好 n 辆车。

// 同时给你一个整数 cars ，表示总共需要修理的汽车数目。

// 请你返回修理所有汽车 最少 需要多少时间。

// 注意：所有机械工可以同时修理汽车。

/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
  ranks.sort((a, b) => a - b);
  // ranks[i]越小，修得速度越快
  
};
