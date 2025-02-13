// 题目
// 给定一个字符串，只包含字母和数字，按要求找出字符串中的最长（连续）子串的长度，字符串本身是其最长的子串，子串要求： 1、 只包含1个字母(a-z, A~Z)，其余必须是数字； 2、 字母可以在子串中的任意位置； 如果找不到满足要求的子串，如全是字母或全是数字，则返回-1。

// 输入描述

// 字符串(只包含字母和数字)

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  let res = -1;
  // 双指针
  const str = inputs[0];
  const n = str.length;
  let right = 0;
  const isNumber = (ch) => {
    return !isNaN(parseInt(ch));
  };
  let num = 0;
  for (let i = 0; i < n; i++) {
    while (right < n && num === 0) {
      if (isNumber(str[right++])) {
        continue;
      } else {
        num++;
      }
    }
    res = Math.max(res, right - i);
    if (!isNumber(str[i])) num--;
  }
  console.log(res === 1 ? -1 : res);
}

solution();
