// 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

// 注意:不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。

class Stack {
  #items = [];
  size() {
    return this.#items.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
  push(val) {
    this.#items.push(val);
  }
  pop() {
    return this.#items.pop();
  }
  peek() {
    if (this.isEmpty()) return undefined;
    return this.#items[this.size() - 1];
  }
}

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  // s中包含数字，+，-，空格和括号()，括号会改变优先级，
  // 其中 - 可以用作表示负数的一元运算符
  // 使用栈的匹配来解决问题
  // 如果遇到左括号，就不能立即解决问题了
  // 为了避免负数符号出现一元运算符的情况，可以在前面添加一个0
  const strArr = s.split("").filter((v) => v !== " "); // 去除空格
  const arr = [];
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "-" && (strArr[i - 1] === "(" || i === 0)) {
      arr.push(0);
      arr.push(strArr[i]);
    } else if (isNaN(parseInt(strArr[i]))) {
      arr.push(strArr[i]);
    } else {
      // 连续数字
      let cur = parseInt(strArr[i]);
      while (i + 1 < strArr.length && !isNaN(parseInt(strArr[i + 1]))) {
        cur = cur * 10 + parseInt(strArr[++i]);
      }
      arr.push(cur);
    }
  }
  const stack = new Stack();
  const ops = new Set(["+", "-", "("]);
  for (let ch of arr) {
    if (ops.has(ch)) {
      stack.push(ch);
    } else if (ch === ")") {
      // 开始计算
      let num = stack.pop();
      stack.pop(); // 弹出左括号
      if (!stack.isEmpty() && ops.has(stack.peek()) && stack.peek() !== "(") {
        const op = stack.pop();
        const preNum = stack.pop();
        if (op === "+") num = num + preNum;
        if (op === "-") num = preNum - num;
      }
      stack.push(num);
    } else {
      // 数字
      if (!stack.isEmpty() && ops.has(stack.peek()) && stack.peek() !== "(") {
        const op = stack.pop();
        const num = stack.pop();
        if (op === "+") ch += num;
        if (op === "-") ch = num - ch;
      }
      stack.push(ch);
    }
  }
  return stack.pop();
};

// 优化
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const arr = [];
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (s[i] === " ") continue;
    let ch = s[i];
    if (ch === "-" && (arr[arr.length - 1] === "(" || !arr.length)) arr.push(0);
    else if (!isNaN(parseInt(s[i]))) {
      ch = parseInt(ch);
      while (i + 1 < n && !isNaN(parseInt(s[i + 1])))
        ch = ch * 10 + parseInt(s[++i]);
    }
    arr.push(ch);
  }
  const stack = new Stack();
  const ops = new Set(["+", "-", "("]);
  for (let ch of arr) {
    if (ops.has(ch)) {
      stack.push(ch);
      continue;
    }
    if (ch === ")") {
      ch = stack.pop(); // 数字
      stack.pop(); // 弹出左括号
    }
    if (!stack.isEmpty() && ops.has(stack.peek()) && stack.peek() !== "(") {
      const op = stack.pop();
      const num = stack.pop();
      if (op === "+") ch += num;
      if (op === "-") ch = num - ch;
    }
    stack.push(ch);
  }
  return stack.pop();
};

// 展开括号：
// 如果当前位置处于一系列括号之内，则也与这些括号前面的运算符有关：
// 每当遇到一个以 −-− 号开头的括号，则意味着此后的符号都要被「翻转」。

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  const ops = new Stack();
  ops.push(1);
  let signs = 1;
  const n = s.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === " ") continue;
    else if (s[i] === "+") signs = ops.peek();
    else if (s[i] === "-") signs = -ops.peek();
    else if (s[i] === "(") ops.push(signs);
    else if (s[i] === ")") ops.pop();
    else {
      let cur = parseInt(s[i++]);
      while (i < n && !isNaN(parseInt(s[i]))) cur = cur * 10 + parseInt(s[i++]);
      ans += cur * signs;
      i--;
    }
  }
  return ans;
};
