/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-11-01 16:21:19                                                  *
 * @LastModifiedDate: 2022-11-01 16:22:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 存在一种仅支持 4 种操作和 1 个变量 X 的编程语言：

// ++X 和 X++ 使变量 X 的值 加 1
// --X 和 X-- 使变量 X 的值 减 1
// 最初，X 的值是 0

// 给你一个字符串数组 operations ，这是由操作组成的一个列表，返回执行所有操作后， X 的 最终值 。

/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let x = 0;
  for (const operation of operations) {
    if (operation === "X++" || operation === "++X") {
      x++;
    } else {
      x--;
    }
  }
  return x;
};
