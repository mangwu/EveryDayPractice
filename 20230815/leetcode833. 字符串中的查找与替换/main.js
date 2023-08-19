/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-08-15 08:56:51                                                  *
 * @LastModifiedDate: 2023-08-15 09:22:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 你会得到一个字符串 s (索引从 0 开始)，你必须对它执行 k 个替换操作。替换操作以三个长度均为 k 的并行数组给出：indices, sources,  targets。

// 要完成第 i 个替换操作:

// 检查 子字符串  sources[i] 是否出现在 原字符串 s 的索引 indices[i] 处。
// 如果没有出现， 什么也不做 。
// 如果出现，则用 targets[i] 替换 该子字符串。
// 例如，如果 s = "abcd" ， indices[i] = 0 , sources[i] = "ab"， targets[i] = "eee" ，那么替换的结果将是 "eeecd" 。

// 所有替换操作必须 同时 发生，这意味着替换操作不应该影响彼此的索引。测试用例保证元素间不会重叠 。

// 例如，一个 s = "abc" ，  indices = [0,1] ， sources = ["ab"，"bc"] 的测试用例将不会生成，因为 "ab" 和 "bc" 替换重叠。
// 在对 s 执行所有替换操作后返回 结果字符串 。

// 子字符串 是字符串中连续的字符序列。

/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (s, indices, sources, targets) {
  const strArr = s.split("");
  const n = indices.length;
  for (let i = 0; i < n; i++) {
    const source = sources[i];
    if (s.slice(indices[i], indices[i] + source.length) === source) {
      strArr.splice(
        indices[i],
        source.length,
        targets[i],
        ...new Array(source.length - 1).fill("")
      );
    }
  }
  return strArr.join("");
};
