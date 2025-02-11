// 题目
// 已知火星人使用的运算符为#、$，其与地球人的等价公式如下：

// x#y = 4*x+3*y+2
// x$y = 2*x+y+3
// 其中 x、y 是无符号整数
// 地球人公式按C语言规则计算 火星人
// 公式中，#的优先级高于$，相同的运算符，按从左到右的顺序计算
// 现有一段火星人的字符串报文，请你来翻译并计算结果。

// 输入描述 火星人字符串表达式（结尾不带回车换行） 输入的字符串说明： 字符串为仅由无符号整数和操作符（#、$）组成的计算表达式。例如：

// 123#4$5#67$78
// 用例保证字符串中，操作数与操作符之间没有任何分隔符。

// 用例保证操作数取值范围为32位无符号整数。

// 保证输入以及计算结果不会出现整型溢出。

// 保证输入的字符串为合法的求值报文，例如：123#4$5#67$78

// 保证不会出现非法的求值报文，例如类似这样字符串：

// #4$5 //缺少操作数

// 4$5# //缺少操作数

// 4#$5 //缺少操作数

// 4 $5 //有空格

// 3+4-5*6/7 //有其它操作符

// 12345678987654321$54321 //32位整数计算溢出

// 输出描述 根据输入的火星人字符串输出计算结果（结尾不带回车换行）

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
  // 先把#的运算出来
  const n = str.length;
  for (let i = 0; i < n; i++) {
    if (str[i] === "#" || str[i] === "$") {
      stack.push(str[i]);
    } else {
      let cur = parseInt(str[i++]);
      while (i < n && str[i] !== "#" && str[i] !== "$") {
        cur = cur * 10 + parseInt(str[i++]);
      }
      i--;
      if (stack[stack.length - 1] === "#") {
        stack.pop();
        const x = stack.pop();
        const y = cur;
        stack.push(4 * x + 3 * y + 2);
      } else {
        stack.push(cur);
      }
    }
  }
  const stack2 = [];
  for (const item of stack) {
    if (stack2[stack2.length - 1] === "$") {
      stack2.pop();
      const x = stack2.pop();
      const y = item;
      stack2.push(2 * x + y + 3);
    } else {
      stack2.push(item);
    }
  }
  console.log(stack2[0]);
}
solution()
