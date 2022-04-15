/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-04-15 08:55:20                                                  *
 * @LastModifiedDate: 2022-04-15 17:07:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给定一个字符串 s 表示一个整数嵌套列表，
// 实现一个解析它的语法分析器并返回解析的结果 NestedInteger 。

// 列表中的每个元素只可能是整数或整数嵌套列表

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         // ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         // ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         // ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         // ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         // ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
  // 使用JSON的parse方法可以得到整数或者数组
  let parseS = JSON.parse(s);
  let ans = new NestedInteger();
  if (typeof parseS == "object") {
    for (const item of parseS) {
      // item是数字也需要创建一个NestedInterger，直接调用setInteger
      let res = deserialize(JSON.stringify(item));
      ans.add(res);
    }
  } else {
    ans.setInteger(parseS);
  }
  return ans;
};

/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
  // dfs深度优先搜索
  // 第一位是"[" 表示带解析的是一个列表，从"["开始的是一个新的NestedInteger实例
  // 如果遇到"]"字符，表示该列表已经解析完毕
  // 如果不是"["则该解析为一个整数，并判断是否是正数,直到遇到",",或者"]"
  let index = 0;
  const dfs = (s) => {
    if (s[index] == "[") {
      // 是一个列表
      index++;
      const ni = new NestedInteger();
      // 遍历到结束
      while (s[index] !== "]") {
        // 此时的index已经改变，正常dfs
        ni.add(dfs(s));
        if (s[index] == ",") {
          index++;
        }
      }
      // 此时index指向一个"]"的索引
      index++;
      return ni;
    } else {
      // 是一个数字
      let negative = false;
      if (s[index] == "-") {
        negative = true;
        index++;
      }
      let num = 0;
      while (index < s.length && isDigit(s[index])) {
        num = num * 10 + parseInt(s[index]);
        index++;
      }
      if (negative) {
        num = 0 - num;
      }
      // 数字可以直接构造
      return new NestedInteger(num);
    }
  };
  return dfs(s);
};
const isDigit = (s) => {
  return parseInt(s).toString() == "NaN" ? false : true;
};

// This is the interface that allows for creating nested lists.
// You should not implement it, or speculate about its implementation
function NestedInteger() {
  // Return true if this NestedInteger holds a single integer, rather than a nested list.
  // @return {boolean}
  this.isInteger = function () {
    // ...
  };

  // Return the single integer that this NestedInteger holds, if it holds a single integer
  // Return null if this NestedInteger holds a nested list
  // @return {integer}
  this.getInteger = function () {
    // ...
  };

  // Set this NestedInteger to hold a single integer equal to value.
  // @return {void}
  this.setInteger = function (value) {
    // ...
  };

  // Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
  // @return {void}
  this.add = function (elem) {
    // ...
  };

  //Return the nested list that this NestedInteger holds, if it holds a nested list
  // Return null if this NestedInteger holds a single integer
  // @return {NestedInteger[]}
  this.getList = function () {
    // ...
  };
}

// 栈实现
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
  if (s[0] !== "[") {
    return new NestedInteger(parseInt(s));
  }
  const stack = [];
  let idx = 0;
  while (idx < s.length) {
    if (s[idx] == "[") {
      // 开始一个列表
      const ni = new NestedInteger();
      stack.push(ni);
      idx++;
    }
    if (s[idx] !== "," && s[idx] !== "]" && s[idx] !== "[") {
      // 是数字
      let isNegative = false;
      if (s[idx] == "-") {
        isNegative = true;
        idx++;
      }
      let num = 0;
      while (idx < s.length && !isNaN(parseInt(s[idx]))) {
        num = num * 10 + parseInt(s[idx]);
        idx++;
      }
      if (isNegative) {
        num = 0 - num;
      }
      stack.push(new NestedInteger(num));
    }
    if (s[idx] == "," || s[idx] == "]") {
      const top = stack.pop();
      const top2 = stack.pop();
      if (top2) {
        top2.add(top);
        stack.push(top2);
      } else {
        stack.push(top);
      }

      idx++;
    }
  }
  return stack[0];
};
// 上述解答有错误，对于多层嵌套的列表有错误，如[[[[]]]];

var deserialize = function (s) {
  if (s[0] !== "[") {
    return new NestedInteger(parseInt(s));
  }
  const stack = [];
  let idx = 0;
  while (idx < s.length) {
    const ch = s[idx];
    if (ch == "-" || !isNaN(parseInt(ch))) {
      // 一个数字
      let isNegative = false;
      if (ch == "-") {
        isNegative = true;
        idx++;
      }
      let num = 0;
      while (!isNaN(parseInt(s[idx]))) {
        num = num * 10 + parseInt(s[idx]);
        idx++;
      }
      if (isNegative) {
        num = 0 - num;
      }
      stack.push(new NestedInteger(num));
      continue;
    }
    if (ch == "[") {
      stack.push(new NestedInteger());
      idx++;
      continue;
    }
    // 逗号和"]"处理方式不一致
    if (ch == ",") {
      if (stack.length > 1) {
        const top = stack.pop();
        const top2 = stack[stack.length - 1];
        top2.add(top);
      }
      idx++;
      continue;
    }
    // 如果是一个[]
    if (ch == "]" && s[idx - 1] !== "[") {
      if (stack.length > 1) {
        const top = stack.pop();
        const top2 = stack[stack.length - 1];
        top2.add(top);
      }
      idx++;
    } else {
      idx++;
    }
  }
  return stack[0];
};

// "[[],[[[[]],-4],[]]]"
