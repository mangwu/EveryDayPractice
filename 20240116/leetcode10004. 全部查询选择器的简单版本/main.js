/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2024-01-16 15:29:59                                                  *
 * @LastModifiedDate: 2024-01-16 15:52:45                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 设计一个基础版本的函数 querySelectorAll ，它接收一个选择器字符串作为输入，并返回一个与给定选择器匹配的 DOM 元素数组。

// 要求：

// 只处理简单选择器：id、class 和 tag，不考虑嵌套或复杂的查询。
// 避免使用内置方法如 querySelector 和 querySelectorAll，但请随意使用其他标准的 DOM 访问器方法。
// 假设选择器：
// 只包含字母（a-z，A-Z）。
// ID 和类选择器区分大小写（例如，.example 和 .Example 是不同的）。
// 标签选择器不区分大小写（例如，li 和 LI 是相同的）。
// 从 document.body 开始遍历 DOM 树，并按照它们在 DOM 中出现的顺序返回元素，类似于原生的 querySelectorAll 方法。

/**
 * @param {string} selector
 * @return {HTMLElement[]}
 */
// export const querySelectorAll = (selector) => {
//   // 使用其它API实现
//   if (selector[0] === "#") return [document.getElementById(selector.slice(1))];
//   if (selector[0] === ".")
//     return [...document.getElementsByClassName(selector.slice(1))];
//   return [...document.getElementsByTagName(selector)];
// };

/**
 * @param {string} selector
 * @return {HTMLElement[]}
 */
export const querySelectorAll = (selector) => {
  let callback = () => {};
  const ans = [];
  if (selector[0] === "#") {
    callback = (node) => {
      if (node.id === selector.slice(1)) {
        ans.push(node);
      }
    };
  } else if (selector[0] === ".") {
    callback = (node) => {
      if (node.classList.contains(selector.slice(1))) {
        ans.push(node);
      }
    };
  } else {
    callback = (node) => {
      if (node.nodeName.toLocaleUpperCase() === selector.toLocaleUpperCase()) {
        ans.push(node);
      }
    };
  }
  const dfs = (node, callback) => {
    for (const item of node.children) {
      callback(item);
      dfs(item, callback);
    }
  };
  dfs(document.body, callback);
  return ans;
};
