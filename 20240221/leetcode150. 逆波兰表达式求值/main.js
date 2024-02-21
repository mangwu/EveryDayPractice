// 给你一个字符串数组 tokens ，表示一个根据 逆波兰表示法 表示的算术表达式。

// 请你计算该表达式。返回一个表示表达式值的整数。

// 注意：

// 有效的算符为 '+'、'-'、'*' 和 '/' 。
// 每个操作数（运算对象）都可以是一个整数或者另一个表达式。
// 两个整数之间的除法总是 向零截断 。
// 表达式中不含除零运算。
// 输入是一个根据逆波兰表示法表示的算术表达式。
// 答案及所有中间计算结果可以用 32 位 整数表示。

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  for (const token of tokens) {
    if (!isNaN(parseInt(token))) {
      stack.push(parseInt(token));
    } else {
      stack.push(evalNum(stack.pop(), stack.pop(), token));
    }
  }
  return stack.pop();
};

function evalNum(num1, num2, op) {
  if (op === "+") return num1 + num2;
  if (op === "-") return num2 - num1;
  if (op === "*") return num1 * num2;
  if (op === "/")
    return num2 * num1 > 0
      ? Math.floor(num2 / num1)
      : -Math.floor(Math.abs(num2) / Math.abs(num1));
}
