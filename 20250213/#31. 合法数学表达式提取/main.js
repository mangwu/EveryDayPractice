// 题目
// 提取字符串中的最长合法简单数学表达式，字符串长度最长的，并计算表达式的值。如果没有，则返回0 。 简单数学表达式只能包含以下内容：

// 0-9数字，符号+-* 说明： 1、所有数字，计算结果都不超过long 2、如果有多个长度一样的，请返回第一个表达式的结果 3、数学表达式，必须是最长的，合法的 4、操作符不能连续出现，如 +--+1 是不合法的

// 输入描述 字符串

// 输出描述 表达式值

// 用例 输入 1-2abcd 输出 -1

const rl = require("readline").createInterface({ input: process.stdin });
const iter = rl[Symbol.asyncIterator]();
const func = async () => (await iter.next()).value;

async function solution() {
  const inputs = [];
  while ((line = await func())) {
    inputs.push(line);
  }
  const str = inputs[0];
  let pattern = "";
  const isNumber = (ch) => {
    return !isNaN(parseInt(ch));
  };
  const isOp = (ch) => {
    return ch === "+" || ch === "-" || ch === "*";
  };
  // 先找出所有计算表达式，然后选择最大的进行计算
  const maxP = (p1, p2) => {
    if (p2.length > p1.length) return p2.join("");
    return p1;
  };
  const n = str.length;
  for (let i = 0; i < n; i++) {
    if (isNumber(str[i])) {
      const curP = [str[i]];
      let j = i + 1;
      let preNumber = true;
      pattern = maxP(pattern, curP);
      while (j < n) {
        if (preNumber) {
          if (isNumber(str[j])) {
            curP.push(str[j++]);
            pattern = maxP(pattern, curP);
          } else if (isOp(str[j])) {
            curP.push(str[j++]);
            preNumber = false; // 上一个不是数字，而是操作符
          } else {
            // 非数字和操作符
            i = j;
            break;
          }
        } else {
          if (isNumber(str[j])) {
            curP.push(str[j++]);
            pattern = maxP(pattern, curP);
            preNumber = true;
          } else {
            // 上一个是操作符，下一个必须是数字，所以结束比较
            i = j;
            break;
          }
        }
      }
    }
  }
  if (!pattern) {
    console.log(0);
    return;
  }
  const stack = [];
  for (let i = 0; i < pattern.length; i++) {
    if (isNumber(pattern[i])) {
      let cur = parseInt(pattern[i]);
      let j = i + 1;
      while (j < pattern.length && isNumber(pattern[j])) {
        cur = cur * 10 + parseInt(pattern[j++]);
      }
      i = j - 1;
      if (stack.length && stack[stack.length - 1] === "*") {
        stack.pop();
        const x = stack.pop();
        stack.push(x * cur);
      } else {
        stack.push(cur);
      }
    } else stack.push(pattern[i]);
  }
  const stack2 = [];
  for (const ch of stack) {
    if (isOp(ch)) {
      stack2.push(ch);
    } else {
      if (stack2.length && isOp(stack2[stack2.length - 1])) {
        const op = stack2.pop();
        const x = stack2.pop();
        if (op === "+") {
          stack2.push(x + ch);
        } else if (op === "-") {
          stack2.push(x - ch);
        }
      } else {
        stack2.push(ch);
      }
    }
  }
  console.log(stack2[0]);
}
solution();
