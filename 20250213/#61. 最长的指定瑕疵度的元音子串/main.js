/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-14 00:03:47                                                  *
 * @LastModifiedDate: 2025-02-14 00:22:49                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 题目
// 开头和结尾都是元音字母（aeiouAEIOU）的字符串为元音字符串，其中混杂的非元音字母数量为其瑕疵度。比如: “a” 、 “aa”是元音字符串，其瑕疵度都为0 “aiur”不是元音字符串（结尾不是元音字符） “abira”是元音字符串，其瑕疵度为2 给定一个字符串，请找出指定瑕疵度的最长元音字符子串，并输出其长度，如果找不到满足条件的元音字符子串，输出0。

// 子串：字符串中任意个连续的字符组成的子序列称为该字符串的子串。

// 输入描述 首行输入是一个整数，表示预期的瑕疵度flaw，取值范围[0, 65535]。 接下来一行是一个仅由字符a-z和A-Z组成的字符串，字符串长度(0, 65535]。

// 输出描述 输出为一个整数，代表满足条件的元音字符子串的长度。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const len = parseInt(inputs[0]);
  const str = inputs[1];
  const n = str.length;
  const set = new Set("aeiouAEIOU".split(""));
  let num = 0;
  let right = 0;
  let res = 0;
  for (let i = 0; i < n; i++) {
    while (right < n && num < len) {
      if (!set.has(str[right])) num++;
      right++;
    }
    if (right === n && num < len) break;
    while (right < n && set.has(str[right])) right++;
    if (set.has(str[i]) && num === len && set.has(str[right - 1])) {
      res = Math.max(res, right - i);
    } else num--;
  }
  console.log(res);
}
solution();
