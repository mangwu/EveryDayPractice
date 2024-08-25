/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-08-23 23:22:27                                                  *
 * @LastModifiedDate: 2024-08-24 00:34:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


// 一个非负整数 x 的 强数组 指的是满足元素为 2 的幂且元素总和为 x 的最短有序数组。下表说明了如何确定 强数组 的示例。可以证明，x 对应的强数组是独一无二的。

// 数字	二进制表示	强数组
// 1	00001	[1]
// 8	01000	[8]
// 10	01010	[2, 8]
// 13	01101	[1, 4, 8]
// 23	10111	[1, 2, 4, 16]
 

// 我们将每一个升序的正整数 i （即1，2，3等等）的 强数组 连接得到数组 big_nums ，big_nums 开始部分为 [1, 2, 1, 2, 4, 1, 4, 2, 4, 1, 2, 4, 8, ...] 。

// 给你一个二维整数数组 queries ，其中 queries[i] = [fromi, toi, modi] ，你需要计算 (big_nums[fromi] * big_nums[fromi + 1] * ... * big_nums[toi]) % modi 。

// 请你返回一个整数数组 answer ，其中 answer[i] 是第 i 个查询的答案。

/**
 * @param {number[][]} queries
 * @return {number[]}
 */
var findProductsOfElements = function(queries) {
  const n = queries.length;
  
};

// [1, 2, 1, 2, 4, 1, 4, 2, 4, 1, 2, 4, 8, ...]

// 1  => 1
// 2 | 1 2  => 1 + 
// 