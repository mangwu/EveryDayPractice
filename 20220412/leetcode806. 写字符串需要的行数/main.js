/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-12 15:58:05                                                  *
 * @LastModifiedDate: 2022-04-12 16:27:20                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 我们要把给定的字符串 S 从左到右写到每一行上，每一行的最大宽度为100个单位，
// 如果我们在写某个字母的时候会使这行超过了100 个单位，
// 那么我们应该把这个字母写到下一行。我们给定了一个数组 widths ，
// 这个数组 widths[0] 代表 'a' 需要的单位， widths[1] 代表 'b' 需要的单位，...， widths[25] 代表 'z' 需要的单位。

// 现在回答两个问题：至少多少行能放下S，以及最后一行使用的宽度是多少个单位？
// 将你的答案作为长度为2的整数列表返回。

/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let rows = 1;
  let sum = 0;
  for (const ch of s) {
    let increment = widths[ch.charCodeAt() - "a".charCodeAt()];
    if (sum + increment <= 100) {
      sum += increment;
    } else {
      rows++;
      sum = increment;
    }
  }
  return [rows, sum];
};
