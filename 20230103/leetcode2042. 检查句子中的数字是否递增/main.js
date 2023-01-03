/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-03 08:50:44                                                  *
 * @LastModifiedDate: 2023-01-03 09:00:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 句子是由若干 token 组成的一个列表，token 间用 单个 空格分隔，句子没有前导或尾随空格。每个 token 要么是一个由数字 0-9 组成的不含前导零的 正整数 ，要么是一个由小写英文字母组成的 单词 。

// 示例，"a puppy has 2 eyes 4 legs" 是一个由 7 个 token 组成的句子："2" 和 "4" 是数字，其他像 "puppy" 这样的 tokens 属于单词。
// 给你一个表示句子的字符串 s ，你需要检查 s 中的 全部 数字是否从左到右严格递增（即，除了最后一个数字，s 中的 每个 数字都严格小于它 右侧 的数字）。

// 如果满足题目要求，返回 true ，否则，返回 false 。
/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  let pre = 0;
  const words = s.split(" ");
  for (const word of words) {
    let num = parseInt(word);
    if (!isNaN(num)) {
      if (num <= pre) return false;
      pre = num;
    }
  }
  return true;
};
