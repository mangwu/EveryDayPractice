/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-12 11:02:47                                                  *
 * @LastModifiedDate: 2023-02-12 11:39:57                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个 二进制字符串 s 和一个整数数组 queries ，其中 queries[i] = [firsti, secondi] 。

// 对于第 i 个查询，找到 s 的 最短子字符串 ，它对应的 十进制值 val 与 firsti 按位异或 得到 secondi ，换言之，val ^ firsti == secondi 。

// 第 i 个查询的答案是子字符串 [lefti, righti] 的两个端点（下标从 0 开始），如果不存在这样的子字符串，则答案为 [-1, -1] 。如果有多个答案，请你选择 lefti 最小的一个。

// 请你返回一个数组 ans ，其中 ans[i] = [lefti, righti] 是第 i 个查询的答案。

// 子字符串 是一个字符串中一段连续非空的字符序列。

/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[][]}
 */
var substringXorQueries = function (s, queries) {
  const res = [];
  for (const querie of queries) {
    let binaryVal = querie[0] ^ querie[1];
    let binaryStr = binaryVal.toString(2);
    const len = binaryStr.length;
    let flag = s.indexOf(binaryStr);
    if (flag !== -1) {
      res.push([flag, flag + len - 1]);
    } else {
      res.push([-1, -1]);
    }
  }
  return res;
};
