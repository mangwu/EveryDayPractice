/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-10 22:30:25                                                  *
 * @LastModifiedDate: 2023-06-10 22:33:54                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个三位数整数 n 。

// 如果经过以下修改得到的数字 恰好 包含数字 1 到 9 各一次且不包含任何 0 ，那么我们称数字 n 是 迷人的 ：

// 将 n 与数字 2 * n 和 3 * n 连接 。
// 如果 n 是迷人的，返回 true，否则返回 false 。

// 连接 两个数字表示把它们首尾相接连在一起。比方说 121 和 371 连接得到 121371 。
/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
  const str = (n.toString() + (n * 2).toString() + (n * 3).toString()).split(
    ""
  );
  const set = new Set(str);
  return !set.has("0") && set.size === 9 && str.length === 9;
};
