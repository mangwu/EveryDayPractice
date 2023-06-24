/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-24 22:53:15                                                  *
 * @LastModifiedDate: 2023-06-24 22:53:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


// 给你一个下标从 0 开始的数组 words ，它包含 n 个字符串。

// 定义 连接 操作 join(x, y) 表示将字符串 x 和 y 连在一起，得到 xy 。如果 x 的最后一个字符与 y 的第一个字符相等，连接后两个字符中的一个会被 删除 。

// 比方说 join("ab", "ba") = "aba" ， join("ab", "cde") = "abcde" 。

// 你需要执行 n - 1 次 连接 操作。令 str0 = words[0] ，从 i = 1 直到 i = n - 1 ，对于第 i 个操作，你可以执行以下操作之一：

// 令 stri = join(stri - 1, words[i])
// 令 stri = join(words[i], stri - 1)
// 你的任务是使 strn - 1 的长度 最小 。

// 请你返回一个整数，表示 strn - 1 的最小长度。

/**
 * @param {string[]} words
 * @return {number}
 */
var minimizeConcatenatedLength = function(words) {
  
};