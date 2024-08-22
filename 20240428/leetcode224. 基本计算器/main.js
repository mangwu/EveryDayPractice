// 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。

// 注意:不允许使用任何将字符串作为数学表达式计算的内置函数，比如 eval() 。

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let signs = 1;
  const ops = [1]; // 栈顶表示当前的符号
  let res = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    if (s[i] === "+") {
      signs = ops[ops.length - 1];
    } else if (s[i] === "-") {
      signs = -ops[ops.length - 1];
    } else if (s[i] === "(") {
      ops.push(signs);
    } else if (s[i] === ")") {
      ops.pop();
    } else if (s[i] !== " ") {
      let cur = parseInt(s[i++]);
      while (!isNaN(parseInt(s[i]))) {
        cur = cur * 10 + parseInt(s[i++]);
      }
      i--;
      res += cur * signs;
    }
  }
  return res;
};

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  // -取0
  // 栈，展开括号
  const nums = [];
  const ops = [];
  // 字符预处理
  const arr = calExpStrPreprocess(s);
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === "(") {
      ops.push(arr[i]);
    } else if (arr[i] === ")") {
      // 弹出上一个"(""
      ops.pop();
      calculateExp(nums, ops);
    } else if (typeof arr[i] === "number") {
      nums.push(arr[i]);
      // 数字
      calculateExp(nums, ops);
    } else {
      ops.push(arr[i]);
    }
  }
  return nums[0];
};

/**
 * @description 计算数字之和或之差
 * @param {number[]} nums
 * @param {string[]} ops
 */
var calculateExp = function (nums, ops) {
  while (ops.length && ops[ops.length - 1] !== "(") {
    const op = ops.pop();
    const num2 = nums.pop();
    const num1 = nums.pop();
    if (op === "+") nums.push(num1 + num2);
    else if (op === "-") nums.push(num1 - num2);
  }
};

/**
 * @description 计算表达式字符串预处理：将数字字符变成数字，将符合分隔
 * @param {string} s
 * @return {[]}
 */
var calExpStrPreprocess = function (s) {
  const arr = s.split("").filter((v) => v && v !== " "); // 将空格去除，去除空字符串
  const ans = [];
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] === "(" || arr[i] === ")" || arr[i] === "+") {
      ans.push(arr[i]);
    } else if (arr[i] === "-") {
      if (!ans.length || ans[ans.length - 1] === "(") ans.push(0);
      ans.push(arr[i]);
    } else {
      // 数字
      let cur = parseInt(arr[i++]);
      while (!isNaN(parseInt(arr[i]))) cur = cur * 10 + parseInt(arr[i++]);
      i--;
      ans.push(cur);
    }
  }
  return ans;
};
