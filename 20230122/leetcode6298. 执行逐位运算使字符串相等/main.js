/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-01-22 11:01:13                                                  *
 * @LastModifiedDate: 2023-01-22 11:03:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


// 给你两个下标从 0 开始的 二元 字符串 s 和 target ，两个字符串的长度均为 n 。你可以对 s 执行下述操作 任意 次：

// 选择两个 不同 的下标 i 和 j ，其中 0 <= i, j < n 。
// 同时，将 s[i] 替换为 (s[i] OR s[j]) ，s[j] 替换为 (s[i] XOR s[j]) 。
// 例如，如果 s = "0110" ，你可以选择 i = 0 和 j = 2，然后同时将 s[0] 替换为 (s[0] OR s[2] = 0 OR 1 = 1)，并将 s[2] 替换为 (s[0] XOR s[2] = 0 XOR 1 = 1)，最终得到 s = "1110" 。

// 如果可以使 s 等于 target ，返回 true ，否则，返回 false 。

/**
 * @param {string} s
 * @param {string} target
 * @return {boolean}
 */
var makeStringsEqual = function(s, target) {

};

// 0 0 => 0 0
// 0 1 => 1 1
// 1 0 => 1 1
// 1 1 => 1 0