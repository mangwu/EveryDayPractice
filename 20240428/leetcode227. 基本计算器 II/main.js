// 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

// 整数除法仅保留整数部分。

// 你可以假设给定的表达式总是有效的。所有中间结果将在 [-231, 231 - 1] 的范围内。

// 注意：不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let arr = calExpStrPreprocess(s);
  let stack = [];
  for (const ch of arr) {
    if (typeof ch === "number") {
      if (stack[stack.length - 1] === "*") {
        stack.pop();
        const num1 = stack.pop();
        stack.push(num1 * ch);
      } else if (stack[stack.length - 1] === "/") {
        stack.pop();
        const num1 = stack.pop();
        stack.push(Math.floor(num1 / ch));
      } else stack.push(ch);
    } else stack.push(ch);
  }
  arr = stack;
  stack = [];
  for (const ch of arr) {
    if (typeof ch === "number") {
      if (stack[stack.length - 1] === "+") {
        stack.pop();
        const num1 = stack.pop();
        stack.push(num1 + ch);
      } else if (stack[stack.length - 1] === "-") {
        stack.pop();
        const num1 = stack.pop();
        stack.push(num1 - ch);
      } else stack.push(ch);
    } else stack.push(ch);
  }
  return stack[0];
};

/**
 * @description 预处理计算表达式
 * @param {string} s
 * @returns {[]}
 */
function calExpStrPreprocess(s) {
  s = s.split("").filter((v) => v || v !== " ");
  const ans = [];
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (s[i] === "+" || s[i] === "-" || s[i] === "*" || s[i] === "/") {
      ans.push(s[i]);
    } else {
      let cur = parseInt(s[i++]);
      while (!isNaN(parseInt(s[i]))) {
        cur = cur * 10 + parseInt(s[i++]);
      }
      ans.push(cur);
      i--;
    }
  }
  return ans;
}
