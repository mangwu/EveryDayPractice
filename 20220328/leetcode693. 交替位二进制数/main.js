/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-28 20:51:46                                                  *
 * @LastModifiedDate: 2022-03-28 20:56:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个正整数，检查它的二进制表示是否总是 0、1 交替出现：
// 换句话说，就是二进制表示中相邻两位的数字永不相同。
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  let pre = null;
  // 每次与1与后得到结果右移动即可
  while (n > 0) {
    let cur = n & 1;
    if (cur == pre) {
      return false;
    }
    pre = cur;
    n = n >> 1;
  }
  return true;
};
