/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-13 23:34:18                                                  *
 * @LastModifiedDate: 2025-02-13 23:49:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 输入两个字符串 S 和 L ，都只包含英文小写字母。S长度 ≤ 100，L长度 ≤ 500,000。判定S是否是L的有效子串。

// 判定规则：S 中的每个字符在 L 中都能找到（可以不连续），且 S 在Ｌ中字符的前后顺序与 S 中顺序要保持一致。（例如，S = ”ace” 是 L= ”abcde” 的一个子序列且有效字符是a、c、e，而”aec”不是有效子序列，且有效字符只有a、e）

// 输入描述 输入两个字符串 S 和 L，都只包含英文小写字母。S长度 ≤ 100，L长度 ≤ 500,000。 先输入S，再输入L，每个字符串占一行。

// 输出描述 S 串最后一个有效字符在 L 中的位置。（首位从0开始计算，无有效字符返回-1）

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const s = inputs[0];
  const l = inputs[1];
  let j = 0;
  const n = s.length;
  const m = l.length;
  for (let i = 0; i < n; i++) {
    while (j < m && l[j] !== s[i]) {
      j++;
    }
    if (i === n - 1 && l[j] === s[i]) {
      console.log(j);
      return;
    }
  }
  console.log(-1);
}
solution()