/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-12-28 09:07:55                                                  *
 * @LastModifiedDate: 2022-12-28 09:40:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个只包含字符 'a'，'b' 和 'c' 的字符串 s ，你可以执行下面这个操作（5 个步骤）任意次：

// 选择字符串 s 一个 非空 的前缀，这个前缀的所有字符都相同。
// 选择字符串 s 一个 非空 的后缀，这个后缀的所有字符都相同。
// 前缀和后缀在字符串中任意位置都不能有交集。
// 前缀和后缀包含的所有字符都要相同。
// 同时删除前缀和后缀。
// 请你返回对字符串 s 执行上面操作任意次以后（可能 0 次），能得到的 最短长度 。

/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  const n = s.length;
  let i = 0;
  let j = n - 1;
  while (i < j) {
    let first = s[i];
    let last = s[j];
    if (first === last) {
      while (s[i] === first && i < j) {
        i++;
      }
      while (s[j] === first && j >= i) {
        j--;
      }
    } else {
      break;
    }
  }
  return j - i + 1;
};
