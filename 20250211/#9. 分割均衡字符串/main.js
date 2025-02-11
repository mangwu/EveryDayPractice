/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-11 16:19:53                                                  *
 * @LastModifiedDate: 2025-02-11 16:26:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 均衡串定义：字符串中只包含两种字符，且这两种字符的个数相同。 给定一个均衡字符串，请给出可分割成新的均衡子串的最大个数。 约定：字符串中只包含大写的 X 和 Y 两种字符。

// 输入描述 输入一个均衡串。

// 字符串的长度：[2， 10000]。 给定的字符串均为均衡字符串 输出描述 输出可分割成新的均衡子串的最大个数。

// 备注 分割后的子串，是原字符串的连续子串

// 用例

// 输入	XXYYXY
// 输出	2
// 说明	XXYYXY可分割为2个均衡子串，分别为：XXYY、XY
// 解题思路
// 遍历一次字符串，使用两个变量 xCount 和 yCount 来分别记录当前已经遇到的字符 'X' 和 'Y' 的个数。每当遇到一个字符，就相应地更新计数器。当 xCount 和 yCount 相等时，表示找到了一个均衡子串，我们可以增加一个计数器 count，同时重置 xCount 和 yCount 为 0。最后输出 count，即为可分割成新的均衡子串的最大个数。

const rl = require("readline").createInterface({ input: process.stdin });

const iter = rl[Symbol.asyncIterator]();
const asyncFunc = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await asyncFunc())) {
    inputs.push(line);
  }
  const str = inputs[0];
  // 激励X和Y的个数
  let res = 0;
  let x = 0;
  let y = 0;
  for (const ch of str) {
    if (ch === "X") x++;
    else y++;
    if (x === y) res++;
  }
  console.log(res);
}
solution()