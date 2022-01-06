/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2022-01-06 13:58:30                                                  *
 * @LastModifiedDate: 2022-01-06 14:20:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 inspur                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 给你一个字符串 path ，表示指向某一文件或目录的 Unix 风格 绝对路径 （以 '/' 开头），请你将其转化为更加简洁的规范路径。

// 在 Unix 风格的文件系统中，一个点（.）表示当前目录本身；此外，两个点 （..） 表示将目录切换到上一级（指向父目录）；两者都可以是复杂相对路径的组成部分。任意多个连续的斜杠（即，'//'）都被视为单个斜杠 '/' 。 对于此问题，任何其他格式的点（例如，'...'）均被视为文件/目录名称。

// 请注意，返回的 规范路径 必须遵循下述格式：

// 始终以斜杠 '/' 开头。
// 两个目录名之间必须只有一个斜杠 '/' 。
// 最后一个目录名（如果存在）不能 以 '/' 结尾。
// 此外，路径仅包含从根目录到目标文件或目录的路径上的目录（即，不含 '.' 或 '..'）。
// 返回简化后得到的 规范路径 。

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // 一个点表示同目录
  // 两个点表示上一目录
  // 三个点或其它被视为文件或者目录名称
  let pathArr = path.split("/");
  // 使用栈解决，无可出栈的元素默认不操作
  const stack = [];
  for (let i = 0; i < pathArr.length; i++) {
    if (pathArr[i] === '.') {
      // 同目录，不做操作
      continue;
    }
    if (pathArr[i] === '..') {
      // 上一目录 出栈
      stack.pop();
      continue;
    }
    // 不为空
    if (pathArr[i]) {
      stack.push(pathArr[i])
    }
  }
  return '/' + stack.join('/');
};
console.log(simplifyPath("/a/./b/../.../ss//s/c/"));
