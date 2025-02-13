/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2025-02-13 10:32:22                                                  *
 * @LastModifiedDate: 2025-02-13 10:41:12                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2025 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定用户密码输入流 input，输入流中字符 '<' 表示退格，可以清除前一个输入的字符，请你编写程序，输出最终得到的密码字符，并判断密码是否满足如下的密码安全要求。

// 密码安全要求如下： 1、密码长度 ≥ 8； 2、密码至少需要包含 1 个大写字母； 3、密码至少需要包含 1 个小写字母； 4、密码至少需要包含 1 个数字； 5、密码至少需要包含 1 个字母和数字以外的非空白特殊字符； 注意空串退格后仍然为空串，且用户输入的字符串不包含 '<' 字符和空白字符。

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const str = inputs[0];
  const stack = [];
  // 获取密码
  for (const ch of str) {
    if (ch === "<") {
      stack.pop();
    } else stack.push(ch);
  }
  const isNumber = (ch) => {
    return !isNaN(parseInt(ch));
  };
  const isUpper = (ch) => {
    const code = ch.charCodeAt();
    return code >= "A".charCodeAt() && code <= "Z".charCodeAt();
  };
  const isLower = (ch) => {
    const code = ch.charCodeAt();
    return code >= "a".charCodeAt() && code <= "z".charCodeAt();
  };
  let hasNum = false;
  let hasUpper = false;
  let hasLower = false;
  let hasOther = false;
  let legalLen = stack.length >= 8;
  for (const ch of stack) {
    if (isNumber(ch)) {
      hasNum = true;
    } else if (isUpper(ch)) {
      hasUpper = true;
    } else if (isLower(ch)) {
      hasLower = true;
    } else {
      hasOther = true;
    }
  }
  let res = hasNum && hasUpper && hasLower && hasOther && legalLen;
  console.log([stack.join(""), res].join(","));
}

solution();
