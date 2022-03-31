/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-03-31 23:14:37                                                  *
 * @LastModifiedDate: 2022-03-31 23:20:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 自除数 是指可以被它包含的每一位数整除的数。

// 例如，128 是一个 自除数 ，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。
// 自除数 不允许包含 0 。

// 给定两个整数 left 和 right ，返回一个列表，列表的元素是范围 [left, right] 内所有的 自除数 。

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const ans = [];
  for (let i = left; i <= right; i++) {
    let str = i.toString();
    if (str.includes("0")) {
      continue;
    }
    let isDividingNum = true;
    for (let j = 0; j < str.length; j++) {
      if (i % parseInt(str[j]) !== 0) {
        // 不是自除数
        isDividingNum = false;
        break;
      }
    }
    if (isDividingNum) {
      ans.push(i);
    }
  }
  return ans;
};
